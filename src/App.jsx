import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { getUserData } from "./reducers/auth/userDataSlice";
import AppLayout from "./layout/AppLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainRoutes from "./routes/MainRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import CustomerRoutes from "./routes/CustomerRoutes";
import SellerRoutes from "./routes/SellerRoutes";
import NotFoundPage from "./pages/404 Page/NotFoundPage";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "/src/config/firebase";

function App() {
  useEffect(() => {
    const testFetch = async () => {
      try {
        const expiredProductsRef = query(
          collection(db, "Products"),
          where("createdByUser", "==", true)
        );

        const expiredProducts = await getDocs(expiredProductsRef).then(
          ({ docs }) => docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );

        console.log(expiredProducts);
      } catch (error) {
        console.error("Error on whole proccess");
        throw error; // Re-throw error for GitHub Action to fail
      }
    };

    testFetch();
  }, []);

  // const dispatch = useDispatch();

  // // read all user data from local storage
  // useEffect(() => {
  //   // read user data
  //   dispatch(getUserData());
  // }, []);

  return <></>;
}

export default App;
