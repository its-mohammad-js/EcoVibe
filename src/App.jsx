import { Route, Routes } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
// import { getUserData } from "./reducers/auth/userDataSlice";
import AppLayout from "./layout/AppLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import MainRoutes from "./routes/MainRoutes";
// import AuthRoutes from "./routes/AuthRoutes";
// import CustomerRoutes from "./routes/CustomerRoutes";
// import SellerRoutes from "./routes/SellerRoutes";
// import NotFoundPage from "./pages/404 Page/NotFoundPage";
// import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
// import { db } from "/src/config/firebase";

const testString = `***
  type: service_account,
  project_id: ecovibe-c6720,
  private_key_id: 1a3dda96588c354fbc0bf49b05b5f1abb2092549,
  private_key: -----BEGIN PRIVATE KEY-----nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCynZ6YrVGgs6ken6tbm11iLrBzSCnoHUqb+A4hxWaQGldbcoEVP3/pGdQOeH2wGMfXy+DqOYNzrCy0bnr7wdB+Jma1WuZcn4F3x0kKVWKcn6mgYg7OxhF3J3PAhvIy35xsa5hOczsFeIWw/pnZnK8mbSbHvPnhKyJQk80egaWW+YF5O7WFIUiJsMVqL8OQm9YYn0GgioVi18JHnHdnodA32WpCJBRVJAJhkV9HBKJDFupAExKL4s+F/J5kE64wKEYX1u7HaXrdkr8pw0VnnvAtO5CDPjK3knDUj6f21EaXXD31/Bgx+1TcnszRUQ2DVN/8+BLM0Iua2YGG+6UHunhYMvtUdTAgMBAAECggEADKP2+1sYscTFLTj1aHTJAWl2yK6RID+LLeLWHx926jhknckytWw/AyIezb9dNb8rNWxqSGk1klQW/dXwkVfGe5hymfacaegI/fohWCxj+AEwynLtZVjDF6mlGXTzYwJMMagTqUmiXaq/21zJDBgfNmwquYG0RaaYRV0qLoIG/0gWopn3atYNDLc+5FbvwobKosfJtQBc1z6M1tQRh/JQt46La7NiMjAIw7N1mz1NFdf3drOnkQo7w3KfaT+thk6kCVIAWpa4ko1jxppO5z7x3tJnIypLxO3eZZ3SiymnpgLjz+X4n+3mRNCezypUZfODAqAt4XX2dPIy+faXkmhlJGaez4QKBgQDlWXz2Y1A8OJAcP0p/nGGnTk0kwFDOfKbukbgX78wULZESFqWxJq2INpPjiOQlLiLk7zA5r3GKIVTzuvOkZnlwd/U4bWyAaAXxO0f+VoIbTZmUiBDNlwuSVDIvxVQxkhEps7c2b/8yJmuS5C39zvnBzyT3Ez0bwx8kvZRSdEammBdqQKBgQDHXvCmuc+6SGD7GbZaod+eomgZR/hlAE9InjfabDK
  client_email: firebase-adminsdk-oz1s7@ecovibe-c6720.iam.gserviceaccount.com,
  client_id: 102086339610487874842,
  auth_uri: https://accounts.google.com/o/oauth2/auth,
  token_uri: https://oauth2.googleapis.com/token,
  auth_provider_x509_cert_url: https://www.googleapis.com/oauth2/v1/certs,
  client_x509_cert_url: https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-oz1s7%40ecovibe-c6720.iam.gserviceaccount.com,
  universe_domain: googleapis.com
***`;

function App() {
  useEffect(() => {
    console.log(testString.replace("***", "{").replace("***", "}"));
  }, []);

  // const dispatch = useDispatch();
  // const { auth_status, userId } = useSelector((state) => state.userData);

  // useEffect(() => {
  //   const updateUserAcitvity = async () => {
  //     try {
  //       const userCellDataRef = doc(db, "users", userId);
  //       updateDoc(userCellDataRef, {
  //         lastActivity: serverTimestamp(),
  //       });
  //     } catch (error) {
  //       console.log("failed to update user activity");
  //       console.log(error);
  //     }
  //   };

  //   if (auth_status === 200) {
  //     updateUserAcitvity();
  //   }
  // }, [userId, auth_status]);

  // // read all user data from local storage
  // useEffect(() => {
  //   // read user data
  //   dispatch(getUserData());
  // }, []);`

  return (
    <AppLayout>
      <Toaster />
      <Routes>
        {/* main pages */}
        {/* {MainRoutes} */}
        {/* customer's sign-up */}
        {/* {AuthRoutes} */}
        {/* customer routes */}
        {/* {CustomerRoutes} */}
        {/* seller pages */}
        {/* {SellerRoutes} */}
        {/* 404 page */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </AppLayout>
  );
}

export default App;
