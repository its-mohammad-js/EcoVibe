import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home Page/HomePage";
import AppLayout from "./layout/AppLayout";
import ShopPage from "./pages/Shop Page/ShopPage";
import ExploreProducts from "./pages/Explore Products Page/ExploreProductsPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductDetailsPage from "./pages/Product Detail Page/ProductDetailsPage";
import RegularUserSignIn from "./pages/Regular User Auth Page/RegularUserSignIn";
import RegularUserLogIn from "./pages/Regular User Auth Page/RegularUserLogIn";
import SignIn from "./components/Auth/Regular Users/SignIn";
import PersonalDetailsForm from "./components/Auth/Regular Users/PersonalDetailsForm";
import UserInterestsForm from "./components/Auth/Regular Users/UserInterestsForm";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getLocalUserData } from "./redux/auth/regularUsers/regluarUsersSlice";

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
        <Route path="/EcoVibe/Sign-in/" element={<RegularUserSignIn />}>
          <Route path="first-step/authentication" element={<SignIn />} />
          <Route
            path="second-step/personal-details"
            element={<PersonalDetailsForm />}
          />
          <Route
            path="third-step/user-intersets"
            element={<UserInterestsForm />}
          />
        </Route>
        <Route path="/EcoVibe/Log-in/" element={<RegularUserLogIn />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
