import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useMediaQuery from "hooks/useMediaQuery";
import MobileNavbar from "./Navbar/components/Mobile Navbar/MobileNavbar";
import DesktopNavbar from "./Navbar/components/Desktop Navbar/NavbarFrame";
import { useResizeListener } from "hooks/useResizeListener";

function AppLayout({ children }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [allowed, setAllowed] = useState(true); // allow display navbar & footer state
  const location = useLocation(); // location hook
  const { appHeight } = useResizeListener();

  // update allowing state on routes change
  useEffect(() => {
    const pathName = location.pathname
      .split("/")
      .map((name) => name.toLocaleLowerCase());

    setAllowed(!pathName.includes("seller") && !pathName.includes("messages"));
  }, [location]);

  return (
    <div
      style={{
        height: appHeight,
      }}
    >
      {allowed && (
        <div className="relative">
          {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
        </div>
      )}
      {children}
      {allowed && <Footer />}
    </div>
  );
}

export default AppLayout;
