import { lazy } from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "UI/ProtectedRoute/ProtectedRoute";
import withSuspense from "./AutoSuspense";

// Lazy load components
const WishListPage = withSuspense(
  lazy(() => import("customerPages/WishList/WishListPage"))
);

const CartPage = withSuspense(
  lazy(() => import("customerPages/Cart/CartPage"))
);

const CheckoutPage = withSuspense(
  lazy(() => import("customerPages/Checkout/CheckoutPage"))
);

const OrdersPage = withSuspense(
  lazy(() => import("customerPages/Orders/OrdersPage"))
);

const CustomerProfilePage = withSuspense(
  lazy(() => import("customerPages/Profile/CustomerProfilePage"))
);

const CustomerRoutes = [
  // customer bag
  <Route key="bag" path="/EcoVibe/bag" element={<ProtectedRoute />}>
    <Route path="Wish-list" element={<WishListPage />} />
    <Route path="cart" element={<CartPage />} />
    <Route path="checkout" element={<CheckoutPage />} />
    <Route path="orders/:orderId?/:sellerId?" element={<OrdersPage />} />
  </Route>,
  // customer profile
  <Route
    key="customer-profile"
    path="/EcoVibe/profile"
    element={<ProtectedRoute />}
  >
    <Route index element={<CustomerProfilePage />} />
  </Route>,
];

export default CustomerRoutes;
