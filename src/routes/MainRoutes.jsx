import { Route } from "react-router-dom";
import { lazy } from "react";
import withSuspense from "./AutoSuspense";

const HomePage = withSuspense(
  lazy(() => import("../pages/Main Pages/Home/HomePage"))
);
const ShopPage = withSuspense(
  lazy(() => import("../pages/Main Pages/Shop/ShopPage"))
);
const ExploreProducts = withSuspense(
  lazy(() => import("../pages/Main Pages/Explore Products/ExploreProductsPage"))
);

const ProductDetailsPage = withSuspense(
  lazy(() => import("../pages/Main Pages/Product Detail/ProductDetailsPage"))
);

const ChatPage = withSuspense(
  lazy(() => import("../pages/Main Pages/Chat/ChatPage"))
);

const MainRoutes = [
  // main pages
  <Route key="home" path="/EcoVibe/" element={<HomePage />} />, // home page
  <Route key="shop" path="/EcoVibe/Shop" element={<ShopPage />} />, // shop page
  <Route
    key="explore-products"
    path="/EcoVibe/Explore-Products/:filters?"
    element={<ExploreProducts />}
  />, // explore products page
  <Route
    key="product-detail"
    path="/EcoVibe/Products/:productId?"
    element={<ProductDetailsPage />}
  />, // product details page
  <Route key="chat-room" path="/EcoVibe/Messages/" element={<ChatPage />} />, // chat room page
];

export default MainRoutes;
