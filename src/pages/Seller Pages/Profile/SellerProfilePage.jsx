import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "src/config/firebase";
import SellerInfo from "./components/SellerInfo";
import LastProducts from "./components/LastProducts";
import Testimonials from "mainPages/Home/components/Testimonials";
import EditBusinessInfoForm from "./components/EditBusinessInfoForm";
import SellerProfilePageLoader from "UI/Loaders/SellerProfilePageLoader";
import { AiOutlineLeft } from "react-icons/ai";
import { IoIosMore } from "react-icons/io";
import { fakeArray } from "../../../common/utils/constants";
import HighLights from "./components/HighLights";
import SellerContents from "./components/SellerContents";
import { useSelector } from "react-redux";

const SellerProfileContext = createContext();

function SellerProfilePage() {
  // seller data state
  const [sellerData, setUserData] = useState({
    userInfo: {},
    orders: [],
    reviews: [],
    loading: false,
    error: null,
    products: [],
  });
  // params (seller id)
  const params = useParams();
  const currentUserId = JSON.parse(localStorage.getItem("userData"))?.userId;
  const isOwner = params.id === currentUserId;
  // user data from global state (used only on isOwner true)
  const { personalInformation, businessInformation, loading } = useSelector(
    (state) => state.userData
  );
  // display what type of content ? modes: products || last seller reviews || last orders of this seller
  // product || reviews || orders
  const [currentMode, setContentMode] = useState("products");

  async function getUserData() {
    if (loading) {
      return;
    }

    try {
      // dispatch loading
      setUserData((prev) => ({ ...prev, loading: true }));
      // ref user data to database
      const userRef = doc(db, "users", params.id);
      // get user data from database
      let userInfo = null;
      if (!isOwner) {
        userInfo = await getDoc(userRef).then((doc) => doc.data());
      }
      // ref to user reviews in database
      const reviewsQuery = query(
        collection(db, "comments"),
        where("sellerId", "==", params.id)
      );
      // get comments related to this seller
      const reviews = await getDocs(reviewsQuery).then(({ docs }) =>
        docs.map((doc) => doc.data())
      );
      // ref to user orders in database
      const ordersQuery = query(
        collection(db, "Orders"),
        where("customerId", "==", currentUserId),
        where("sellers", "array-contains", params.id)
      );
      // get orders related to this sellers
      const orders = await getDocs(ordersQuery).then(({ docs }) =>
        docs.map((doc) => doc.data())
      );
      // ref to user products in database
      const productsQuery = query(
        collection(db, "Products"),
        where("SellerId", "==", params.id)
      );
      // get products that realted to this sellers
      const products = await getDocs(productsQuery).then(({ docs }) =>
        docs.map((doc) => doc.data())
      );
      // dispatch success
      setUserData({
        loading: false,
        orders,
        reviews,
        userInfo: isOwner
          ? { personalInformation, businessInformation }
          : userInfo,
        error: null,
        products,
      });
    } catch (error) {
      setUserData((prev) => ({ ...prev, error }));
      console.log(error);
    }
  }

  useEffect(() => {
    if (!loading) getUserData();
  }, [loading]);

  if (loading) return <div>loading current user data</div>;

  // if (sellerData.loading) return <div>loading seller data</div>;

  if (!sellerData.loading)
    return (
      <SellerProfileContext.Provider
        value={{
          sellerData,
          isOwner,
          setContentMode,
          currentMode,
          currentUserId,
        }}
      >
        <div className="mx-auto 2xl:max-w-screen-2xl flex flex-col justify-between">
          <div id="wrapper" className="size-full lg:w-7/12 lg:mx-auto">
            {/* header */}
            <div className="flex items-center justify-between px-4 py-2">
              <button className="text-2xl">
                <AiOutlineLeft />
              </button>
              <h6 className="font-bold">
                {sellerData.userInfo.businessInformation?.business_name}
              </h6>
              <button className="text-2xl">
                <IoIosMore />
              </button>
            </div>
            {/* seller info */}
            <SellerInfo />
            {/* highlights */}
            <HighLights />
            {/* products / reviews / orders */}
            <SellerContents />
          </div>
        </div>
      </SellerProfileContext.Provider>
    );
}

export default SellerProfilePage;

export const useProfileData = () => {
  return useContext(SellerProfileContext);
};
