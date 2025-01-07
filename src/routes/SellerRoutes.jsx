import { lazy } from "react";
import { Route } from "react-router-dom";
import withSuspense from "./AutoSuspense";

// Lazy load components
const SellerSolutionsPage = withSuspense(
  lazy(() => import("sellerPages/Seller Solutions/sellerSolutionsPage"))
);

const SellerDashboardPage = withSuspense(
  lazy(() => import("sellerPages/Dashboard/SellerDashboardPage"))
);

const SellerProfilePage = withSuspense(
  lazy(() => import("sellerPages/Profile/SellerProfilePage"))
);

const AnalyticsTab = withSuspense(
  lazy(() => import("sellerPages/Dashboard/tabs/Analytics/MainTab"))
);
const ProductTab = withSuspense(
  lazy(() =>
    import("sellerPages/Dashboard/tabs/Products Management/ProductTab")
  )
);

const OrdersTab = withSuspense(
  lazy(() =>
    import("../pages/Seller Pages/Dashboard/tabs/Orders Management/OrdersTab")
  )
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
