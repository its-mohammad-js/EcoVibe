import { lazy } from "react";
import { Route } from "react-router-dom";

// Lazy load components
const SellerSolutionsPage = lazy(() =>
  import("../pages/Seller Pages/Seller Solutions/sellerSolutionsPage")
);
const SellerDashboardPage = lazy(() =>
  import("../pages/Seller Pages/Dashboard/SellerDashboardPage")
);
const SellerProfilePage = lazy(() =>
  import("../pages/Seller Pages/Profile/SellerProfilePage")
);
const AnalyticsTab = lazy(() =>
  import("../pages/Seller Pages/Dashboard/tabs/Analytics/MainTab")
);
const ProductTab = lazy(() =>
  import("../pages/Seller Pages/Dashboard/tabs/Products Management/ProductTab")
);
const OrdersTab = lazy(() =>
  import("../pages/Seller Pages/Dashboard/tabs/Orders Management/OrdersTab")
);

const SellerRoutes = [
  // seller solutions page
  <Route
    key="sellers-solutions"
    path="/EcoVibe/sellers-solutions"
    element={<SellerSolutionsPage />}
  />,
  // seller dashboard
  <Route
    key="dashboard"
    path="/EcoVibe/Dashboard"
    element={<SellerDashboardPage />}
  >
    {/* default tab (analytics) */}
    <Route index element={<AnalyticsTab />} />
    <Route path="Analytics/:modalKey?" element={<AnalyticsTab />} />
    {/* products management tab */}
    <Route path="Products/:modalKey?" element={<ProductTab />} />
    {/* orders management tab */}
    <Route path="Orders/:modalKey?" element={<OrdersTab />} />
  </Route>,
  // seller profile
  <Route
    key="seller-profile"
    path="/EcoVibe/seller/:id?"
    element={<SellerProfilePage />}
  />,
];

export default SellerRoutes;
