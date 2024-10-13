import { useMediaQuery } from "react-responsive";
import MobileNavbar from "./components/MobileNavbar";
import DesktopNavbar from "./components/DesktopNavbar";

function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <div className="relative">
        {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
      </div>

      <div className=""></div>
    </>
  );
}

export default Navbar;
