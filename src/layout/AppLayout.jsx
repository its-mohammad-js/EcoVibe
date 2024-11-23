import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function AppLayout({ children }) {
  const [allowed, setAllowed] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setAllowed(
      !location.pathname.split("/").includes("seller") &&
        !location.pathname.split("/").includes("messages")
    );
  }, [location]);

  return (
    <>
      {allowed && <Navbar />}
      {children}
      {allowed && <Footer />}
    </>
  );
}

export default AppLayout;
