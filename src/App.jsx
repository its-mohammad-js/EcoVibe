import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { getUserData } from "./reducers/auth/userDataSlice";
import AppLayout from "./layout/AppLayout";
import HomePage from "mainPages/Home/HomePage";
import ShopPage from "mainPages/Shop/ShopPage";
import ExploreProducts from "mainPages/Explore Products/ExploreProductsPage";
import ProductDetailsPage from "mainPages/Product Detail/ProductDetailsPage";
import CustomerAuthPage from "customerAuthPages/CustomerAuthPage";
import SignUpCustomer from "customerAuthPages/tabs/SignUpCustomer";
import PersonalDetailsForm from "customerAuthPages/tabs/PersonalDetailsForm";
import UserInterestsForm from "customerAuthPages/tabs/UserInterestsForm";
import SellerAuthPage from "sellerAuthPages/SellerAuthPage";
import SignUpSeller from "sellerAuthPages/tabs/SignUpSeller";
import BusinessInfoForm from "sellerAuthPages/tabs/BusinessInfoForm";
import SignInPage from "./pages/Auth Pages/SignIn";
import WishListPage from "customerPages/WishList/WishListPage";
import CartPage from "customerPages/Cart/CartPage";
import CheckoutPage from "customerPages/Checkout/CheckoutPage";
import OrdersPage from "customerPages/Orders/OrdersPage";
import CustomerProfilePage from "customerPages/Profile/CustomerProfilePage";
import SellerSolutionsPage from "sellerPages/Seller Solutions/sellerSolutionsPage";
import SellerDashboardPage from "sellerPages/Dashboard/SellerDashboardPage";
import AnalyticsTab from "sellerPages/Dashboard/tabs/Analytics/MainTab";
import ProductTab from "sellerPages/Dashboard/tabs/Products Management/ProductTab";
import OrdersTab from "sellerPages/Dashboard/tabs/Orders Management/OrdersTab";
import SellerProfilePage from "sellerPages/Profile/SellerProfilePage";
import ProtectedRoute from "UI/ProtectedRoute/ProtectedRoute";
import NotFoundPage from "./pages/404 Page/NotFoundPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChatPage from "./pages/Main Pages/Chat/ChatPage";

function App() {
  const dispatch = useDispatch();

  // read all user data from local storage
  useEffect(() => {
    // read user data
    dispatch(getUserData());
  }, []);

  return (
    <AppLayout>
      <Toaster />
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
        {/* chat room page */}
        <Route path="/EcoVibe/Messages/" element={<ChatPage />} />
        {/* customer's sign-up */}
        <Route path="/EcoVibe/Customers/" element={<CustomerAuthPage />}>
          <Route path="sign-up" element={<SignUpCustomer />} />
          <Route path="personal-details" element={<PersonalDetailsForm />} />
          <Route path="user-intersets" element={<UserInterestsForm />} />
        </Route>
        {/* seller's sign-up */}
        <Route path="/EcoVibe/Sellers/" element={<SellerAuthPage />}>
          <Route path="sign-up" element={<SignUpSeller />} />
          <Route path="business-details" element={<BusinessInfoForm />} />
        </Route>
        {/* sign-in page */}
        <Route path="/EcoVibe/sign-in" element={<SignInPage />} />
        {/* customer bag (buying proccess) */}
        <Route path="/EcoVibe/bag" element={<ProtectedRoute />}>
          <Route path="Wish-list" element={<WishListPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="orders/:orderId?/:sellerId?" element={<OrdersPage />} />
        </Route>
        {/* customer personal pages */}
        <Route path="/EcoVibe/profile" element={<ProtectedRoute />}>
          <Route index element={<CustomerProfilePage />} />
        </Route>
        {/* seller solution's page */}
        <Route
          path="/EcoVibe/sellers-solutions"
          element={<SellerSolutionsPage />}
        />
        {/* seller's dashboard */}
        <Route path="/EcoVibe/Dashboard" element={<SellerDashboardPage />}>
          <Route index element={<AnalyticsTab />} />
          <Route path="Analytics/:modalKey?" element={<AnalyticsTab />} />
          <Route path="Products/:modalKey?" element={<ProductTab />} />
          <Route path="Orders/:modalKey?" element={<OrdersTab />} />
        </Route>
        {/* seller profile */}
        <Route path="/EcoVibe/seller/:id?" element={<SellerProfilePage />} />
        {/* 404 page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
