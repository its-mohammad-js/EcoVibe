import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function AppLayout({ children }) {
  const [allowed, setAllowed] = useState(true); // allow display navbar & footer state
  const location = useLocation(); // location hook

  // update allowing state on routes change
  useEffect(() => {
    const pathName = location.pathname
      .split("/")
      .map((name) => name.toLocaleLowerCase());

    setAllowed(!pathName.includes("seller") && !pathName.includes("messages"));
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
