import { lazy } from "react";
import { Route } from "react-router-dom";
import withSuspense from "./AutoSuspense";

// Lazy load components
const CustomerAuthPage = withSuspense(
  lazy(() => import("customerAuthPages/CustomerAuthPage"))
);
const SignUpCustomer = withSuspense(
  lazy(() => import("customerAuthPages/tabs/SignUpCustomer"))
);
const PersonalDetailsForm = withSuspense(
  lazy(() => import("customerAuthPages/tabs/PersonalDetailsForm"))
);
const UserInterestsForm = withSuspense(
  lazy(() => import("customerAuthPages/tabs/UserInterestsForm"))
);
const SellerAuthPage = withSuspense(
  lazy(() => import("sellerAuthPages/SellerAuthPage"))
);
const SignUpSeller = withSuspense(
  lazy(() => import("sellerAuthPages/tabs/SignUpSeller"))
);
const BusinessInfoForm = withSuspense(
  lazy(() => import("sellerAuthPages/tabs/BusinessInfoForm"))
);
const SignInPage = withSuspense(
  lazy(() => import("../pages/Auth Pages/SignIn/SignInPage"))
);

// Routes
const AuthRoutes = [
  // customer authetication steps
  <Route
    key="customers-auth"
    path="/EcoVibe/Customers/"
    element={<CustomerAuthPage />}
  >
    {/* step 01: customers-signup */}
    <Route path="sign-up" element={<SignUpCustomer />} />
    {/* step 02: personal information */}
    <Route path="personal-details" element={<PersonalDetailsForm />} />
    {/* step 03: customer interests */}
    <Route path="user-intersets" element={<UserInterestsForm />} />
  </Route>,
  // sellers authetication steps
  <Route
    key="sellers-auth"
    path="/EcoVibe/Sellers/"
    element={<SellerAuthPage />}
  >
    {/* step 01: sellers signup */}
    <Route path="sign-up" element={<SignUpSeller />} />
    {/* step 02: business information */}
    <Route path="business-details" element={<BusinessInfoForm />} />
  </Route>,
  // sign-in page for both type user's
  <Route key="sign-in" path="/EcoVibe/sign-in" element={<SignInPage />} />,
];

export default AuthRoutes;
