import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { MdMenu } from "react-icons/md";
import { BsShopWindow } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { routesInfo, supportedCategories } from "constants";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BiCart, BiChevronDown, BiSearch } from "react-icons/bi";
import { FaHeart, FaUser } from "react-icons/fa";
import useOutSideClick from "../../../common/hooks/UseOutsideClick";
import QuickAccessMenu from "../modals/QuickAccessMenu";
import { FaMessage } from "react-icons/fa6";
import SearchModal from "../modals/SearchModal";

// search modal isn't render in this route
const notAllowedSearchRoute = "/EcoVibe/Explore-Products/";
// navbar change poition on this routes
const stickyRoutes = ["/EcoVibe/sellers-solutions"];

const DesktopNavbar = () => {
  // quick access menu state & hooks
  const [qucickAccessMenuShow, setAccessMenu] = useState(false);
  const quickMenuRef = useRef();
  useOutSideClick(quickMenuRef, () => setAccessMenu(false));
  // search menu modal state & hooks
  const [searchShow, setSearchModal] = useState(false);
  const searchModalRef = useRef();
  useOutSideClick(searchModalRef, () => setSearchModal(false));
  // sub menu content state
  const [subMenu, setSubMenu] = useState(0);
  // current user info
  const { personalInformation, userId } = useSelector(
    (state) => state.userData
  );
  // necessary data & hooks
  const navigate = useNavigate();
  const location = useLocation();
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
          {routesInfo.map(({ title, path }, index) => (
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
      <div className="w-full flex items-center justify-between px-8 py-4 border-b border-gray-200">
        {/* logo */}
        <div
          onClick={() => {
            navigate("/EcoVibe/");
          }}
          className="flex items-end mb-1.5 justify-center gap-x-1.5 cursor-pointer"
        >
          <motion.p
            initial={{ y: 10 }}
            whileInView={{ y: 0 }}
            className="text-xl md:text-2xl lg:text-4xl text-primary-600 mb-1"
          >
            <BsShopWindow />
          </motion.p>
          <motion.p
            initial={{ x: -40 }}
            whileInView={{ x: 0 }}
            className="lg:text-3xl md:text-xl whitespace-nowrap font-bold"
          >
            Eco Vibe
          </motion.p>
        </div>
        {/* quick access links */}
        <div
          className={`${
            location.pathname === "/EcoVibe/" ? "!hidden" : "flex-1"
          } hidden lg:flex items-center justify-center gap-x-4 xl:gap-x-8 px-4`}
        >
          <Link
            to="/EcoVibe/"
            className="text-xl font-medium text-nowrap hover:text-primary-600 transition-all"
          >
            Home
          </Link>
          <Link
            to="/EcoVibe/Shop"
            className="text-xl font-medium text-nowrap hover:text-primary-600 transition-all"
          >
            Shop
          </Link>
          <Link
            to="/EcoVibe/Explore-products/"
            className="text-xl font-medium text-nowrap hover:text-primary-600 transition-all"
          >
            Explore
          </Link>
          <Link
            to="/EcoVibe/"
            className="text-xl font-medium text-nowrap hover:text-primary-600 transition-all"
          >
            Contact
          </Link>

          <Link
            to="/EcoVibe/"
            className="text-lg font-medium text-nowrap hover:text-primary-600 transition-all"
          >
            About Me
          </Link>
        </div>
        {/* search modal */}
        <div
          ref={searchModalRef}
          className={`${
            location.pathname === notAllowedSearchRoute && "hidden"
          } h-12 w-7/12 relative`}
        >
          {/* fake input (just opens search modal) */}
          <div
            onClick={() => setSearchModal(true)}
            className="flex items-center h-full px-4 lg:pl-8"
          >
            <input
              type="text"
              className="bg-gray-100 px-4 rounded-l-md py-2.5 border border-gray-300 h-full focus:outline-none xl:w-full"
              placeholder="Im Shopping For..."
            />
            <button className="bg-primary-500 text-white text-2xl rounded-r-md h-full flex items-center px-4">
              <BiSearch />
            </button>
          </div>
          {/* search modal */}
          <SearchModal
            modalIsShow={searchShow}
            onCloseModal={() => setSearchModal(false)}
          />
        </div>
        {/* side buttons & quick access menu */}
        <div className="flex items-center justify-center gap-x-2 xl:gap-x-4 relative">
          {/* customer profile / sign-in btn */}
          <button
            onClick={() =>
              navigate(userId ? "/EcoVibe/profile" : "/EcoVibe/Sign-in/")
            }
            className="w-12 h-12 hover:bg-gray-300 transition-all rounded-full bg-gray-200 text-gray-800 text-2xl"
          >
            {personalInformation?.profilePic ? (
              <img
                src={personalInformation?.profilePic}
                loading="lazy"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div className="p-3 flex items-center justify-center">
                <FaUser className="text-2xl" />
              </div>
            )}
          </button>
          {/* messages btn */}
          <button
            onClick={() => navigate("/EcoVibe/Messages")}
            className="p-3 relative hover:bg-gray-300 transition-all rounded-full bg-gray-200 text-gray-800 text-2xl"
          >
            <FaMessage />
          </button>
          {/* wish list btn */}
          <button
            onClick={() => navigate("/EcoVibe/bag/wish-list")}
            className="p-3 hover:bg-gray-300 transition-all rounded-full bg-gray-200 text-gray-800 text-2xl"
          >
            <FaHeart />
          </button>
          {/* access menu btn & access menu */}
          <div ref={quickMenuRef}>
            <button
              onClick={() => setAccessMenu((prev) => !prev)}
              className="p-3 hover:bg-gray-300 transition-all rounded-full bg-gray-200 text-gray-800 text-2xl"
            >
              <BiCart />
            </button>

            <QuickAccessMenu menuIsShow={qucickAccessMenuShow} />
          </div>
        </div>
      </div>
      {/* sub menu (only dispaly on home page) */}
      <div
        className={`${
          location.pathname === "/EcoVibe/" ? "flex" : "hidden"
        } items-center justify-between px-8 py-4 relative`}
      >
        {/* mega menu button */}
        <button className="px-4 py-3 bg-secondary-500 text-white hover:bg-primary-700 transition-all rounded-md cursor-pointer flex items-center gap-x-2 group peer">
          {/* menu button */}
          <span className="text-2xl">
            <MdMenu />
          </span>
          <span>All Categories</span>
          <span
            className={`group-hover:rotate-180 text-3xl transition-all duration-300`}
          >
            <BiChevronDown />
          </span>
        </button>
        {/* mega menu (categories & product types) */}
        <div
          className={`invisible opacity-0 peer-hover:visible peer-hover:opacity-100 hover:visible hover:opacity-100 duration-[600ms] absolute top-[5.2rem] z-20`}
        >
          <div className="flex flex-col gap-y-2 px-4 py-2 w-72 rounded-md bg-slate-100 tooltip relative">
            {/* categories */}
            {supportedCategories.map((category, index) => (
              <button
                onClick={() => setSubMenu(index)}
                key={index}
                className="text-lg group cursor-pointer peer focus:text-primary-400 text-slate-950 group hover:text-primary-400 transition-all flex items-center justify-between"
              >
                <span>{category.title}</span>
                <span className="text-xl">
                  <IoIosArrowForward />
                </span>
              </button>
            ))}
            {/* product types menu (sub menu) */}
            <div className="absolute left-72 rounded-md top-0 mx-2 w-[50rem] h-72 bg-slate-100 hidden peer-focus:flex hover:flex items-center justify-between gap-x-5 px-4 py-2">
              <ul className="h-full w-1/3 flex flex-col gap-y-2 justify-evenly">
                <h4 className="text-2xl font-bold">New Arrivals</h4>
                {supportedCategories[subMenu].productTypes.map(
                  ({ title }, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        navigate(
                          `/EcoVibe/Explore-Products/productTypes=${title.toLocaleLowerCase()}`
                        );
                      }}
                      className="text-lg cursor-pointer hover:text-accent-200 w-fit"
                    >
                      {title}
                    </li>
                  )
                )}
                <button
                  onClick={() =>
                    navigate(
                      `/EcoVibe/Explore-Products/category=${supportedCategories[
                        subMenu
                      ].title.toLocaleLowerCase()}`
                    )
                  }
                  className="px-4 py-2 bg-primary-400 hover:bg-primary-600 transition-all text-white text-lg rounded-md justify-self-end"
                >
                  See More ...
                </button>
              </ul>

              <ul className="h-full w-1/3 flex flex-col gap-y-2 justify-evenly">
                <h4 className="text-2xl font-bold">Trend's</h4>
                {supportedCategories[subMenu].collections.map(
                  ({ title }, index) =>
                    index < 4 && (
                      <li
                        onClick={() => {
                          navigate(
                            `/EcoVibe/Explore-Products/collections=${title.toLocaleLowerCase()}`
                          );
                        }}
                        key={index}
                        className="text-lg cursor-pointer hover:text-accent-200 w-fit"
                      >
                        {title}
                      </li>
                    )
                )}
                <button
                  onClick={() => navigate("/EcoVibe/Explore-Products/")}
                  className="px-4 py-1.5 transition-all border-2 border-primary-300 text-primary-300 hover:bg-primary-300 hover:text-white text-lg rounded-md justify-self-end"
                >
                  Explore
                </button>
              </ul>

              <div className="w-1/3 h-5/6 relative">
                <div className="absolute inset-0 rounded-md bg-primary-300/60 flex flex-col items-center justify-center gap-y-6">
                  <h6 className="font-bold text-center text-white">
                    {/* its just index of supported categories :) */}
                    <span className="text-5xl">{subMenu + 1}0%</span>
                    <br />
                    <span className="text-2xl">Discount !</span>
                  </h6>
                  <button className="px-4 py-2 bg-primary-400 hover:bg-primary-600 transition-all text-white text-lg rounded-md">
                    Shop Now
                  </button>
                </div>
                {/* main pic */}
                <img
                  src={supportedCategories[subMenu].bannerUrl}
                  alt="sub menu banner"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        {/* sub links */}
        <div className="flex items-center justify-center gap-x-3 text-lg">
          <Link
            to="EcoVibe/Explore-Products/collections=men"
            className="hover:text-primary-400 transition-all"
          >
            Mens
          </Link>
          <Link
            to="EcoVibe/Explore-Products/collections=women"
            className="hover:text-primary-400 transition-all"
          >
            Womens
          </Link>
          <Link
            to="EcoVibe/Explore-Products/collections=Kids"
            className="hover:text-primary-400 transition-all"
          >
            Kids
          </Link>
          <Link
            to="EcoVibe/Explore-Products/category=electronics"
            className="hover:text-primary-400 transition-all"
          >
            Electronics
          </Link>
          <Link
            to="EcoVibe/Explore-Products/collections=kitchen"
            className="hover:text-primary-400 transition-all"
          >
            Kitchen
          </Link>
          <Link className="hover:text-primary-400 transition-all">News</Link>
          <Link className="hover:text-primary-400 transition-all">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
