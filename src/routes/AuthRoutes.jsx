import { lazy } from "react";
import { Route } from "react-router-dom";

// Lazy load components
const CustomerAuthPage = lazy(() =>
  import("../pages/Auth Pages/Customers/CustomerAuthPage")
);
const SignUpCustomer = lazy(() =>
  import("../pages/Auth Pages/Customers/tabs/SignUpCustomer")
);
const PersonalDetailsForm = lazy(() =>
  import("../pages/Auth Pages/Customers/tabs/PersonalDetailsForm")
);
const UserInterestsForm = lazy(() =>
  import("../pages/Auth Pages/Customers/tabs/UserInterestsForm")
);
const SellerAuthPage = lazy(() =>
  import("../pages/Auth Pages/Sellers/SellerAuthPage")
);
const SignUpSeller = lazy(() =>
  import("../pages/Auth Pages/Sellers/tabs/SignUpSeller")
);
const BusinessInfoForm = lazy(() =>
  import("../pages/Auth Pages/Sellers/tabs/BusinessInfoForm")
);
const SignInPage = lazy(() => import("../pages/Auth Pages/SignIn"));

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
