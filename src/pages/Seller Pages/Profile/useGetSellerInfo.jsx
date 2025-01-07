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
import useGetStories from "hooks/useGetStories";
import { useSelector } from "react-redux";

const fetchUserInfo = async (sellerId) => {
  const userRef = doc(db, "users", sellerId);
  return getDoc(userRef).then((doc) => doc.data());
};

const fetchReviews = async (sellerId) => {
  const reviewsQuery = query(
    collection(db, "comments"),
    where("sellerId", "==", sellerId)
  );
  return getDocs(reviewsQuery).then(({ docs }) =>
    docs.map((doc) => doc.data())
  );
};

const fetchOrders = async (currentUserId, sellerId) => {
  const ordersQuery = query(
    collection(db, "Orders"),
    where("customerId", "==", currentUserId),
    where("sellers", "array-contains", sellerId)
  );
  return getDocs(ordersQuery).then(({ docs }) => docs.map((doc) => doc.data()));
};

const fetchProducts = async (sellerId) => {
  const productsQuery = query(
    collection(db, "Products"),
    where("SellerId", "==", sellerId)
  );
  return getDocs(productsQuery).then(({ docs }) =>
    docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  );
};

const useGetSellerInfo = (sellerId) => {
  const { userId: currentUserId } = useSelector((state) => state.userData);
  const isOwner = sellerId === currentUserId;
  const ownerData = useSelector((state) => state.userData);

  const [sellerData, setSellerData] = useState({
    userInfo: {},
    orders: [],
    reviews: [],
    products: [],
    loading: false,
    error: null,
  });
  // seller stories modal state
  const [isStoriesShow, setStorieModal] = useState(null);
  const { loading: storyLoading, groupedStories: storiesList } = useGetStories(
    sellerId,
    isStoriesShow !== null
  );

  const fetchSellerData = useCallback(async () => {
    try {
      setSellerData((prev) => ({ ...prev, loading: true }));
      const [userInfo, reviews, orders, products] = await Promise.all([
        isOwner ? ownerData : fetchUserInfo(sellerId),
        fetchReviews(sellerId),
        fetchOrders(currentUserId, sellerId),
        fetchProducts(sellerId),
      ]);

      setSellerData({
        userInfo,
        reviews,
        orders,
        products,
        loading: false,
        error: null,
      });
    } catch (error) {
      setSellerData((prev) => ({ ...prev, error, loading: false }));
      console.error(error);
    }
  }, [sellerId, currentUserId, isOwner, ownerData]);

  useEffect(() => {
    fetchSellerData();
  }, [fetchSellerData]);

  return {
    sellerData,
    storyLoading,
    storiesList,
    isStoriesShow,
    setStorieModal,
    isOwner,
  };
};

export default useGetSellerInfo;
