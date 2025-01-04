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

import { getUserData } from "authActions/getUserData";

function App() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);

  // console.log(userData);

  // useEffect(() => {
  //   // get user data
  //   dispatch(getUserData());
  // }, []);

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
