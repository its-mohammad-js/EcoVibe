import { lazy } from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "../common/UI elements/ProtectedRoute/ProtectedRoute";

// Lazy load components
const WishListPage = lazy(() =>
  import("../pages/Customer Pages/WishList/WishListPage")
);
const CartPage = lazy(() => import("../pages/Customer Pages/Cart/CartPage"));

const CheckoutPage = lazy(() =>
  import("../pages/Customer Pages/Checkout/CheckoutPage")
);
const OrdersPage = lazy(() =>
  import("../pages/Customer Pages/Orders/OrdersPage")
);
const CustomerProfilePage = lazy(() =>
  import("../pages/Customer Pages/Profile/CustomerProfilePage")
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
