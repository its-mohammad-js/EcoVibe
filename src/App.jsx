import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home Page/HomePage";
import AppLayout from "./layout/AppLayout";
import ShopPage from "./pages/Shop Page/ShopPage";
import ExploreProducts from "./pages/Explore Products Page/ExploreProductsPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductDetailsPage from "./pages/Product Detail Page/ProductDetailsPage";
import RegularUserSignUp from "./pages/Regular User Auth Page/RegularUserSignUp";
import RegularUserSign from "./pages/Regular User Auth Page/RegularUserSign";
import SignUp from "./components/Auth/Regular Users/SignUp";
import PersonalDetailsForm from "./components/Auth/Regular Users/PersonalDetailsForm";
import UserInterestsForm from "./components/Auth/Regular Users/UserInterestsForm";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getLocalUserData } from "./redux/auth/regularUsers/regluarUsersSlice";
import WishListPage from "./pages/WishList Page/WishListPage";

function App() {
  const dispatch = useDispatch();

  // read user data from local storage
  useEffect(() => {
    dispatch(getLocalUserData());
  }, []);

  return (
    <AppLayout>
      <Routes>
        {/* main pages */}
        <Route path="/EcoVibe/" element={<HomePage />} />
        <Route path="/EcoVibe/Shop" element={<ShopPage />} />
        <Route
          path="/EcoVibe/Explore-Products/:filters?"
          element={<ExploreProducts />}
        />
        <Route
          path="/EcoVibe/Products/:productId?"
          element={<ProductDetailsPage />}
        />
        {/* regular user auth pages */}
        <Route path="/EcoVibe/Sign-up/" element={<RegularUserSignUp />}>
          <Route path="first-step/authentication" element={<SignUp />} />
          <Route
            path="second-step/personal-details"
            element={<PersonalDetailsForm />}
          />
          <Route
            path="third-step/user-intersets"
            element={<UserInterestsForm />}
          />
        </Route>
        <Route path="/EcoVibe/Sign-in/" element={<RegularUserSign />} />
        {/*  */}
        <Route path="/EcoVibe/Wish-list/" element={<WishListPage />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
