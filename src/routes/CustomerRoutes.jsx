import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "../common/UI elements/ProtectedRoute/ProtectedRoute";
import FallBackLoader from "../common/UI elements/Loaders/FallBackLoader";

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
  <Route key="bag" path="/EcoVibe/bag" element={<ProtectedRoute />}>
    <Route
      path="Wish-list"
      element={
        <Suspense fallback={<FallBackLoader />}>
          <WishListPage />
        </Suspense>
      }
    />
    <Route
      path="cart"
      element={
        <Suspense fallback={<FallBackLoader />}>
          <CartPage />
        </Suspense>
      }
    />
    <Route
      path="checkout"
      element={
        <Suspense fallback={<FallBackLoader />}>
          <CheckoutPage />
        </Suspense>
      }
    />
    <Route
      path="orders/:orderId?/:sellerId?"
      element={
        <Suspense fallback={<FallBackLoader />}>
          <OrdersPage />
        </Suspense>
      }
    />
    <Route path="/EcoVibe/profile" element={<ProtectedRoute />}>
      <Route index element={<CustomerProfilePage />} />
    </Route>
  </Route>,
];

export default CustomerRoutes;
