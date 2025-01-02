import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import AppLayout from "./layout/AppLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainRoutes from "./routes/MainRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import CustomerRoutes from "./routes/CustomerRoutes";
import SellerRoutes from "./routes/SellerRoutes";
import NotFoundPage from "./pages/404 Page/NotFoundPage";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "/src/config/firebase";
import { getUserData } from "authActions/getUserData";

function App() {
  const dispatch = useDispatch();
  // const { userId, auth_status } = useSelector((state) => state.userData);

  useEffect(() => {
    // read user data
    dispatch(getUserData());
  }, []);

  // useEffect(() => {
  //   const updateUserAcitvity = async () => {
  //     try {
  //       const userCellDataRef = doc(db, "users", userId);
  //       updateDoc(userCellDataRef, {
  //         lastActivity: serverTimestamp(),
  //       });
  //     } catch (error) {
  //       console.log("failed to update user activity");
  //       console.log(error);
  //     }
  //   };

  //   if (auth_status === 200) {
  //     updateUserAcitvity();
  //   }
  // }, [userId, auth_status]);

  // read all user data from local storage

  return (
    <AppLayout>
      <Toaster />
      <Routes>
        {/* main pages */}
        {MainRoutes}
        {/* customer's sign-up */}
        {AuthRoutes}
        {/* customer routes */}
        {CustomerRoutes}
        {/* seller pages */}
        {SellerRoutes}
        {/* 404 page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
