import { useEffect, useState, useCallback } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "src/config/firebase";

const useSellerProfile = (sellerId, currentUserId, isOwner, ownerData) => {
  // seller main information state
  const [sellerData, setSellerData] = useState({
    userInfo: {},
    orders: [],
    reviews: [],
    loading: false,
    error: null,
    products: [],
  });

  // get user informations from firestore
  const fetchSellerData = useCallback(async () => {
    try {
      // dispatch loading
      setSellerData((prev) => ({ ...prev, loading: true }));
      // get user primary information (personal & business informations)
      let userInfo = null;
      // fetch user info if user isn't owner
      if (!isOwner) {
        // ref to profile data on firestore
        const userRef = doc(db, "users", sellerId);
        // get user data
        userInfo = await getDoc(userRef).then((doc) => doc.data());
      }
      // ref to comments related to this seller
      const reviewsQuery = query(
        collection(db, "comments"),
        where("sellerId", "==", sellerId)
      );
      const reviews = await getDocs(reviewsQuery).then(({ docs }) =>
        docs.map((doc) => doc.data())
      );
      // ref to user orders (seller orders on owner mode & customer orders on review other users)
      let orders = [];
      if (currentUserId) {
        const ordersQuery = query(
          collection(db, "Orders"),
          where("customerId", "==", currentUserId),
          where("sellers", "array-contains", sellerId)
        );
        orders = await getDocs(ordersQuery).then(({ docs }) =>
          docs.map((doc) => doc.data())
        );
      }
      // ref to seller products & fetch them
      const productsQuery = query(
        collection(db, "Products"),
        where("SellerId", "==", sellerId)
      );
      const products = await getDocs(productsQuery).then(({ docs }) =>
        docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      // dispatch success
      setSellerData({
        loading: false,
        orders,
        reviews,
        userInfo: isOwner ? ownerData : userInfo,
        error: null,
        products,
      });
    } catch (error) {
      // dispatch failure
      setSellerData((prev) => ({ ...prev, error }));
      console.error(error);
    }
  }, [sellerId, currentUserId, isOwner, ownerData]);

  // get all seller data on comp mount
  useEffect(() => {
    // fetchSellerData();
  }, [fetchSellerData]);

  // return data & functionalities
  return {
    sellerData,
  };
};

export default useSellerProfile;
