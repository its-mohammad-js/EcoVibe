import { lazy } from "react";
import { Route } from "react-router-dom";
import AnalyticsTab from "../pages/Seller Pages/Dashboard/tabs/Analytics/MainTab";
import ProductTab from "../pages/Seller Pages/Dashboard/tabs/Products Management/ProductTab";
import OrdersTab from "../pages/Seller Pages/Dashboard/tabs/Orders Management/OrdersTab";

const SellerSolutionsPage = lazy(() =>
  import("../pages/Seller Pages/Seller Solutions/sellerSolutionsPage")
);
const SellerDashboardPage = lazy(() =>
  import("../pages/Seller Pages/Dashboard/SellerDashboardPage")
);
const SellerProfilePage = lazy(() =>
  import("../pages/Seller Pages/Profile/SellerProfilePage")
);

const SellerRoutes = [
  <Route
    key="sellers-solutions"
    path="/EcoVibe/sellers-solutions"
    element={<SellerSolutionsPage />}
  />,
  <Route
    key="dashboard"
    path="/EcoVibe/Dashboard"
    element={<SellerDashboardPage />}
  >
    <Route index element={<AnalyticsTab />} />
    <Route path="Analytics/:modalKey?" element={<AnalyticsTab />} />
    <Route path="Products/:modalKey?" element={<ProductTab />} />
    <Route path="Orders/:modalKey?" element={<OrdersTab />} />
  </Route>,
  <Route
    key="seller-profile"
    path="/EcoVibe/seller/:id?"
    element={<SellerProfilePage />}
  />,
];

export default SellerRoutes;
