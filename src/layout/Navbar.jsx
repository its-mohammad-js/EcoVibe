import { BiCart, BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
import {
  FaArrowRight,
  FaCheck,
  FaHeart,
  FaHome,
  FaShoppingBag,
  FaUser,
} from "react-icons/fa";
import { MdClose, MdMenu } from "react-icons/md";
import { BsShopWindow } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { routesInfo, supportedCategories } from "../helpers/constants";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  TbCards,
  TbCategory,
  TbClock,
  TbCreditCard,
  TbEyeQuestion,
  TbHeart,
  TbLocation,
  TbLockBolt,
  TbLogin,
} from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: 480 });

  return <>{isMobile ? <MobileNavbar /> : <DesktopNavbar />}</>;
}

export default Navbar;

const MobileNavbar = () => {
  // detect pathname for mobile navbar
  const location = useLocation();
  // mobile menu state
  const [menuisShow, setMenuIsShow] = useState(false);
  const [searchQuery, setQuery] = useState("");
  const navigate = useNavigate();

  return (
    <div className="md:hidden">
      {/* header navbar */}
      <div className="flex flex-col gap-y-3 w-full">
        {/* top buttons */}
        <div className="flex items-center bg-white justify-between shadow-lg px-2 py-4">
          <h2
            onClick={() => setMenuIsShow(true)}
            className="flex items-center justify-center gap-x-1 cursor-pointer"
          >
            <span>
              <BiMenu className="text-2xl" />
            </span>
            <span className="text-xl font-bold">Home</span>
          </h2>

          <div className="flex items-center justify-center gap-x-2.5">
            <BiCart className="text-3xl" />

            <FaHeart className="text-2xl" />
          </div>
        </div>
        {/* search bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/EcoVibe/Explore-Products/searchQuery=${searchQuery}`);
          }}
          className={`${
            location.pathname !== "/EcoVibe/" && "hidden"
          } flex items-center rounded-xl w-11/12 mx-auto bg-slate-50 border border-slate-300 justify-between px-3 py-2 gap-x-2`}
        >
          <BiSearch className="text-2xl" />

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setQuery(e.target.value)}
            className="focus:outline-none w-full bg-inherit"
            placeholder="I'm Shoppnig For..."
          />
        </form>
        {/* categories section */}
        <div className={`${location.pathname !== "/EcoVibe/" && "hidden"} `}>
          {/* title */}
          <div className="flex items-center justify-between px-3 py-1">
            <h2 className="font-bold">Categories</h2>
            <Link to="/EcoVibe/Explore-Products">
              <span className="text-sm flex text-gray-700 items-center justify-center gap-x-1">
                Show More <FaArrowRight className="text-xs font-thin" />
              </span>
            </Link>
          </div>
          {/* category icons */}
          <div className="flex items-center sm:justify-center gap-x-4 overflow-auto px-6 py-2">
            {supportedCategories.map((cat, index) => (
              <button
                onClick={() => {
                  navigate(
                    `/EcoVibe/Explore-Products/category=${cat.title.toLocaleLowerCase()}`
                  );
                }}
                key={index}
                className="flex flex-col items-center justify-between gap-y-2"
              >
                <span className="bg-primary-100 p-3 rounded-full w-16 h-16">
                  <img
                    src={cat.iconURl}
                    alt={cat.title}
                    className="w-full h-full"
                  />
                </span>

                <p className="text-sm line-clamp-1">{cat.title}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* side menu */}
      <div
        className={`${
          menuisShow ? "opacity-100 visible" : "opacity-0 invisible"
        } fixed inset-0 z-30 transition-all duration-500`}
      >
        {/* main menu */}
        <div
          className={`${
            menuisShow ? "translate-x-0" : "-translate-x-96"
          } w-3/4 h-full bg-gray-100 z-10 transition-all duration-500 flex flex-col items-center`}
        >
          {/* user profile information */}
          <div className="w-full h-20 bg-gray-200 flex items-center justify-between px-4">
            <div className="flex items-center justify-center gap-x-3">
              <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                <FaUser className="text-2xl" />
              </div>
              <div className="flex flex-col justify-between items-start">
                <h2>Guest User</h2>
                <p className="text-sm">+12394595</p>
              </div>
            </div>
            <div className="">
              <button onClick={() => setMenuIsShow(false)} className="text-2xl">
                <MdClose />
              </button>
            </div>
          </div>
          {/* menu options and links */}
          <div className="max-h-full overflow-auto w-full gap-y-1 mt-1 flex flex-col items-start">
            <div
              onClick={() => navigate("/EcoVibe/")}
              className="flex items-center justify-start gap-x-2 px-4 py-4 w-full"
            >
              <span className="text-3xl">
                <FaHome />
              </span>
              <h3 className="text-base">Home</h3>
            </div>
            <div
              onClick={() => navigate("/EcoVibe/Shop")}
              className="flex items-center justify-start gap-x-2 px-4 py-4 w-full"
            >
              <span className="text-3xl">
                <FaShoppingBag />
              </span>
              <h3 className="text-base">Shop</h3>
            </div>
            <div className="flex items-center justify-start gap-x-2 px-4 py-4 w-full">
              <span className="text-3xl">
                <TbCategory />
              </span>
              <h3 className="text-base">Shop By Category</h3>
            </div>
            <div className="flex items-center justify-start gap-x-2 px-4 py-4 w-full">
              <span className="text-3xl">
                <TbClock />
              </span>
              <h3 className="text-base">My Orders</h3>
            </div>
            <div className="flex items-center justify-start gap-x-2 px-4 py-4 w-full">
              <span className="text-3xl">
                <TbHeart />
              </span>
              <h3 className="text-base">Favorites</h3>
            </div>
            <div className="flex items-center justify-start gap-x-2 px-4 py-4 w-full">
              <span className="text-3xl">
                <TbEyeQuestion />
              </span>
              <h3 className="text-base">FAQs</h3>
            </div>
            <div className="flex items-center justify-start gap-x-2 px-4 py-4 w-full">
              <span className="text-3xl">
                <TbLocation />
              </span>
              <h3 className="text-base">Addresses</h3>
            </div>
            <div className="flex items-center justify-start gap-x-2 px-4 py-4 w-full">
              <span className="text-3xl">
                <TbCreditCard />
              </span>
              <h3 className="text-base">Terms & Conditions</h3>
            </div>
            <div className="flex items-center justify-start gap-x-2 px-4 py-4 w-full">
              <span className="text-3xl">
                <TbCards />
              </span>
              <h3 className="text-base">Terms & Conditions</h3>
            </div>
            <div className="flex items-center justify-start gap-x-2 px-4 py-4 w-full">
              <span className="text-3xl">
                <TbLockBolt />
              </span>
              <h3 className="text-base">Privacy Policy</h3>
            </div>
            <div className="flex items-center justify-start gap-x-2 px-4 py-4 w-full">
              <span className="text-3xl">
                <TbLogin />
              </span>
              <h3 className="text-base">Sign In</h3>
            </div>
          </div>
        </div>
        {/* menu background */}
        <div
          onClick={() => setMenuIsShow(false)}
          className="w-full h-full bg-black bg-opacity-30 -z-10 absolute inset-0"
        ></div>
      </div>
    </div>
  );
};

const DesktopNavbar = () => {
  // detect pathname for desktop navbar
  const location = useLocation();
  // sub menu content state
  const [subMenu, setSubMenu] = useState(0);
  const navigate = useNavigate();
  // search query state
  const [searchQuery, setSearchQuery] = useState({
    category: "",
    searchText: "",
  });

  // change categories list in search query
  function changeCategoryHandler(cat) {
    // if user is in home page add change categories list
    if (location.pathname === "/EcoVibe/") {
      setSearchQuery((prev) => ({
        ...prev,
        category: prev.category === cat ? "" : cat,
      }));
    }
    // else if user in other page redirect to filtered ptoducts page
    else {
      setSearchQuery({
        category: "",
        searchText: "",
      });
      navigate(`/EcoVibe/Explore-Products/category=${cat.toLocaleLowerCase()}`);
    }
  }

  return (
    <div className="flex flex-col mx-auto 2xl:max-w-screen-2xl">
      {/* header (only display on home page) */}
      <div
        className={`${
          location.pathname === "/EcoVibe/" ? "flex" : "hidden"
        } w-full border-b border-gray-200 items-center justify-between px-8 py-2`}
      >
        {/* header links */}
        <div className="flex items-center gap-x-2">
          {routesInfo.map(({ title, path }, index) => (
            <Link
              key={index}
              to={path}
              className="text-gray-600 hover:text-primary-500 transition-all duration-300"
            >
              {title}
            </Link>
          ))}
        </div>

        {/* side options */}
        <div className="flex gap-x-4">
          <div className="text-gray-600">USD</div>
          <div className="text-gray-600">Englsih</div>
        </div>
      </div>
      {/* main navbar */}
      <div className="w-full flex items-center justify-between px-8 py-4 border-b border-gray-200">
        {/* logo */}
        <div
          onClick={() => {
            navigate("/EcoVibe/");
          }}
          className="flex items-end justify-center gap-x-1.5 cursor-pointer"
        >
          <motion.p
            initial={{ y: 10 }}
            whileInView={{ y: 0 }}
            className="text-xl md:text-4xl text-primary-600 mb-1"
          >
            <BsShopWindow />
          </motion.p>
          <motion.p
            initial={{ x: -40 }}
            whileInView={{ x: 0 }}
            className="md:text-3xl whitespace-nowrap font-bold"
          >
            Eco Vibe
          </motion.p>
        </div>
        {/* search input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate(
              `/EcoVibe/Explore-Products/category=${searchQuery.category.toLocaleLowerCase()}&searchQuery=${
                searchQuery.searchText
              }`
            );
          }}
          className="flex items-center flex-1 px-4 lg:px-16 h-12"
        >
          {/* categories menu */}
          <div
            className={`${
              location.pathname === "/EcoVibe/"
                ? "border-r-0 rounded-l-md"
                : "rounded-md"
            } px-4 py-2 relative bg-gray-100 border-gray-200 border-2 group`}
          >
            <button
              className="flex items-center gap-x-2 cursor-pointer peer group"
              type="button"
            >
              <span
                className={`${
                  location.pathname !== "/EcoVibe/" && "order-1"
                } text-2xl`}
              >
                {location.pathname !== "/EcoVibe/" ? (
                  <BiChevronDown className="rotate-180 group-hover:rotate-0 transition-all" />
                ) : (
                  <TbCategory />
                )}
              </span>
              <span className="text-lg line-clamp-1">All Categories</span>
            </button>
            {/* categories list */}
            <div
              className={`absolute w-48 invisible opacity-0 peer-hover:visible peer-hover:opacity-100 hover:visible hover:opacity-100 duration-500 transition-all px-4 py-2 left-0 top-12 z-50 shadow-md bg-gray-100 rounded-md`}
            >
              <ul>
                {supportedCategories.map((category, index) => (
                  <li
                    key={index}
                    onClick={() => changeCategoryHandler(category.title)}
                    className="py-1 cursor-pointer text-lg flex items-center gap-x-2 "
                  >
                    <span
                      className={`${
                        searchQuery.category === category.title
                          ? "visible"
                          : "invisible"
                      }`}
                    >
                      <FaCheck />
                    </span>
                    <span className="line-clamp-1 hover:text-primary-400 transition-all">
                      {category.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* search input */}
          <input
            type="text"
            value={searchQuery.searchText}
            onChange={(e) =>
              setSearchQuery((prev) => ({
                ...prev,
                searchText: e.target.value,
              }))
            }
            className={`${
              location.pathname === "/EcoVibe/" ? "block" : "hidden"
            } bg-gray-100 px-4 py-2.5 border border-gray-300 h-full focus:outline-none xl:w-2/3`}
            placeholder="Im Shopping For..."
          />
          {/* search button */}
          <button
            type="submit"
            className={` ${
              location.pathname === "/EcoVibe/" ? "block" : "hidden"
            } bg-primary-500 text-white text-2xl rounded-r-md h-full flex items-center px-4`}
          >
            <BiSearch />
          </button>
        </form>

        {/* side buttons */}
        <div className="flex items-center justify-center gap-x-2 xl:gap-x-4">
          <div className=" hidden xl:flex flex-col items-start px-4 text-gray-600">
            <span>Need Help ?</span>
            <span>+123456789</span>
          </div>
          <div className="p-3 hover:bg-gray-300 transition-all rounded-full bg-gray-200 text-gray-800 text-2xl">
            <FaUser />
          </div>
          <div className="p-3 hover:bg-gray-300 transition-all rounded-full bg-gray-200 text-gray-800 text-2xl">
            <FaHeart />
          </div>
          <div className="p-3 hover:bg-gray-300 transition-all rounded-full bg-gray-200 text-gray-800 text-2xl">
            <BiCart />
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
