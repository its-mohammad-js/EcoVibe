import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useMediaQuery from "../common/hooks/useMediaQuery";
import MobileNavbar from "./Navbar/components/Mobile Navbar/MobileNavbar";
import DesktopNavbar from "./Navbar/components/Desktop Navbar/NavbarFrame";

function AppLayout({ children }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
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
      {allowed && (
        <div className="relative">
          {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
        </div>
      )}
      {children}
      {allowed && <Footer />}
    </>
  );
}

export default AppLayout;
