import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
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
import {
  equalTo,
  get,
  getDatabase,
  orderByChild,
  query,
  ref,
} from "firebase/database";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // get user data
  //   dispatch(getUserData());
  // }, []);

  useEffect(() => {
    async function test() {
      const primarySellersIdList = [
        "mWtCSkEAvVe5M8uQA5yLQWx9bDm2",
        "ZGDo1gsVt1fAR7gYPfO34YDmYaS2",
        "DEZeusIbtogG9uzaej5Eqk3QWf12",
        "xTEewnD5JIROizBBCyCrpN7cysm2",
        "U9vnsssDB7T8GuqdSdfcjWb7EGp2",
      ];
      const database = getDatabase();
      // ref to slide's in database
      const storiesRef = query(
        ref(database, "stories"),
        orderByChild("createdByUser")
      );

      const docs = await get(storiesRef).then((snapShot) => snapShot.val());
      const allSlides = Object.values(docs || {}).filter(
        ({ createdByUser }) => createdByUser
      );

      console.log(allSlides);
    }

    test();
  }, []);

  if (true) return <>test mode</>;

  return (
    <AppLayout>
      <Toaster />
      <Routes>
        {/* main pages */}
        {MainRoutes}
        {/* auth routes */}
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
