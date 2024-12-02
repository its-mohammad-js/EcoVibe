import { Route } from "react-router-dom";
import HomePage from "../pages/Main Pages/Home/HomePage";
import ShopPage from "../pages/Main Pages/Shop/ShopPage";
import ExploreProducts from "../pages/Main Pages/Explore Products/ExploreProductsPage";
import ProductDetailsPage from "../pages/Main Pages/Product Detail/ProductDetailsPage";
import ChatPage from "../pages/Main Pages/Chat/ChatPage";

const MainRoutes = [
  <Route key="home" path="/EcoVibe/" element={<HomePage />} />,
  <Route key="shop" path="/EcoVibe/Shop" element={<ShopPage />} />,
  <Route
    key="explore-products"
    path="/EcoVibe/Explore-Products/:filters?"
    element={<ExploreProducts />}
  />,
  <Route
    key="product-detail"
    path="/EcoVibe/Products/:productId?"
    element={<ProductDetailsPage />}
  />,
  <Route key="chat-room" path="/EcoVibe/Messages/" element={<ChatPage />} />,
];

export default MainRoutes;
