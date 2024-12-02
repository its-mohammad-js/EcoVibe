import { Route } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import CustomerRoutes from "./CustomerRoutes";
import MainRoutes from "./MainRoutes";
import SellerRoutes from "./SellerRoutes";
import NotFoundPage from "../pages/404 Page/NotFoundPage";

function Routes() {
  return (
    <Routes>
      {/* main pages */}
      {MainRoutes}
      {/* customer's sign-up */}
      {AuthRoutes}
      {/* customer routes */}
      {CustomerRoutes}
      {/* seller pages */}
      {SellerRoutes}
      {/* 404 page */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Routes;
