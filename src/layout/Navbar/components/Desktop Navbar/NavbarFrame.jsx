import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import MainNavbar from "./MainNavbar";
import SubMenu from "./MegaMenu";
import { mainRoutesInfo } from "../../../mainRoutesInfo";

// navbar change poition on this routes
const stickyRoutes = ["/EcoVibe/sellers-solutions"];

const NavbarFrame = () => {
  const location = useLocation(); // detect location path name
  const navbarRef = useRef(); // ref to navbar

  // change navbar posiotion on window scroll
  useEffect(() => {
    // destructure navbar from ref
    const navbarEl = navbarRef?.current;

    // reset navbar style & remove handle scroll event in other routes
    if (!stickyRoutes.includes(location.pathname)) {
      navbarEl.style.opacity = 1;
      navbarEl.style.transform = "none";
      navbarEl.style.position = "relative";
      window.removeEventListener("scroll", handleScroll);
      return;
    }

    // change navbar position functionality
    function handleScroll() {
      // define window scroll
      const scrollY = window.scrollY;
      // hidden scroll bar
      if (scrollY <= 100) {
        navbarEl.style.position = "fixed";
        navbarEl.style.opacity = 0;
        navbarEl.style.transform = "translateY(-50%)";
      }
      // diplay on user scroll
      else {
        navbarEl.style.opacity = 1;
        navbarEl.style.position = "fixed";
        navbarEl.style.transform = "translateY(0)";
      }
      // hidden after hero section
      if (scrollY >= 700) {
        navbarEl.style.opacity = 0;
      }
    }

    // set handle scroll to navbar (only in allowed routes)
    window.addEventListener("scroll", handleScroll);
    // call handle scroll to change navbar position on mount
    handleScroll();

    // reset events on um-mount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <div
      ref={navbarRef}
      className={`${
        stickyRoutes.includes(location.pathname) &&
        "fixed opacity-0 z-50 bg-gray-50 [&>div]:border-b-0 w-full"
      } flex flex-col transition-all mx-auto 2xl:max-w-screen-2xl`}
    >
      {/* header links (only display on home page) */}
      <div
        className={`${
          location.pathname === "/EcoVibe/" ? "flex" : "hidden"
        } w-full border-b border-gray-200 items-center justify-between px-8 py-2`}
      >
        {/* header links */}
        <div className="flex items-center gap-x-5">
          {mainRoutesInfo.map(({ title, path }, index) => (
            <Link
              key={index}
              to={path}
              className="text-gray-600 line-clamp-1 hover:text-primary-500 transition-all duration-300"
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
      {/* main navbar */}
      <MainNavbar />
      {/* sub menu (only dispaly on home page) */}
      <SubMenu />
    </div>
  );
};

export default NavbarFrame;
