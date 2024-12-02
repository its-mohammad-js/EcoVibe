import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import FallBackLoader from "../common/UI elements/Loaders/FallBackLoader";

// Lazy load components
const CustomerAuthPage = React.lazy(() =>
  import("../pages/Auth Pages/Customers/CustomerAuthPage")
);
const SignUpCustomer = React.lazy(() =>
  import("../pages/Auth Pages/Customers/tabs/SignUpCustomer")
);
const PersonalDetailsForm = React.lazy(() =>
  import("../pages/Auth Pages/Customers/tabs/PersonalDetailsForm")
);
const UserInterestsForm = React.lazy(() =>
  import("../pages/Auth Pages/Customers/tabs/UserInterestsForm")
);
const SellerAuthPage = React.lazy(() =>
  import("../pages/Auth Pages/Sellers/SellerAuthPage")
);
const SignUpSeller = React.lazy(() =>
  import("../pages/Auth Pages/Sellers/tabs/SignUpSeller")
);
const BusinessInfoForm = React.lazy(() =>
  import("../pages/Auth Pages/Sellers/tabs/BusinessInfoForm")
);
const SignInPage = React.lazy(() => import("../pages/Auth Pages/SignIn"));

// Routes
const AuthRoutes = [
  <Route
    key="customers-auth"
    path="/EcoVibe/Customers/"
    element={
      <Suspense fallback={<FallBackLoader />}>
        <CustomerAuthPage />
      </Suspense>
    }
  >
    <Route
      path="sign-up"
      element={
        <Suspense fallback={<FallBackLoader />}>
          <SignUpCustomer />
        </Suspense>
      }
    />
    <Route
      path="personal-details"
      element={
        <Suspense fallback={<FallBackLoader />}>
          <PersonalDetailsForm />
        </Suspense>
      }
    />
    <Route
      path="user-intersets"
      element={
        <Suspense fallback={<FallBackLoader />}>
          <UserInterestsForm />
        </Suspense>
      }
    />
  </Route>,
  <Route
    key="sellers-auth"
    path="/EcoVibe/Sellers/"
    element={
      <Suspense fallback={<FallBackLoader />}>
        <SellerAuthPage />
      </Suspense>
    }
  >
    <Route
      path="sign-up"
      element={
        <Suspense fallback={<FallBackLoader />}>
          <SignUpSeller />
        </Suspense>
      }
    />
    <Route
      path="business-details"
      element={
        <Suspense fallback={<FallBackLoader />}>
          <BusinessInfoForm />
        </Suspense>
      }
    />
  </Route>,
  <Route
    key="sign-in"
    path="/EcoVibe/sign-in"
    element={
      <Suspense fallback={<FallBackLoader />}>
        <SignInPage />
      </Suspense>
    }
  />,
];

export default AuthRoutes;
