import { BiCart, BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
import { FaArrowRight, FaHeart, FaLaptop, FaSun, FaUser } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { MdClose, MdHealthAndSafety, MdHomeWork, MdMenu } from "react-icons/md";
import { BsBrush } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { routesInfo, supportedCategories } from "../helpers/constants";
import { PiShoppingBagOpenFill } from "react-icons/pi";
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

function Navbar() {
  // detect pathname for desktopn navbar
  const location = useLocation();
  // mobile menu state
  const [menuisShow, setMenuIsShow] = useState(false);

  return (
    <>
      {/* desktop navbar */}
      <div className="hidden md:flex flex-col mx-auto 2xl:max-w-screen-2xl">
        {/* header (only display on home page) */}
        <div
          className={`${
            location.pathname === "/EcoVibe/" ? "flex" : "hidden"
          } w-full border-b border-gray-200 items-center justify-between px-8 py-2`}
        >
          {/* header links */}
          <div className="flex items-center gap-x-2">
            {routesInfo.map(({ title }, index) => (
              <Link
                key={index}
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
          <div className="flex items-center justify-center gap-x-0.5 cursor-pointer">
            <span className="text-xl lg:text-4xl text-primary-600">
              <PiShoppingBagOpenFill />
            </span>
            <span className="lg:text-xl whitespace-nowrap font-bold">
              Eco Vibe
            </span>
          </div>
          {/* search input */}
          <div className="flex items-center flex-1 px-4 lg:px-16 h-12">
            <select
              name=""
              id=""
              className="bg-gray-100 px-4 py-3 w-40 rounded-l-md border border-r-0 border-gray-300 h-full"
            >
              <option value="" className="px-2 py-1">
                All Categories
              </option>
              {supportedCategories.map((category, index) => (
                <option key={index}>{category.title}</option>
              ))}
            </select>

            <input
              type="text"
              className="bg-gray-100 px-4 py-2.5 border border-gray-300 h-full focus:outline-none xl:w-2/3"
              placeholder="Im Shopping For..."
            />

            <span className="bg-primary-400 text-white text-2xl rounded-r-md h-full flex items-center px-4">
              <BiSearch />
            </span>
          </div>
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
          {/* mega menu */}
          <div className="px-4 py-3 group bg-secondary-500 text-white hover:bg-primary-700 transition-all rounded-md cursor-pointer flex items-center gap-x-2">
            {/* menu button */}
            <span className="text-2xl">
              <MdMenu />
            </span>
            <span>All Categories</span>
            <span className="text-2xl">
              <BiChevronDown />
            </span>
            {/* sub menu */}
            <div className="absolute w-40 top-16 bg-slate-100 rounded-md hidden z-20 group-hover:block">
              <div className="flex flex-col gap-y-2 px-4 py-2">
                {supportedCategories.map((category, index) => (
                  <span
                    key={index}
                    className="text-lg relative text-slate-950 group hover:text-primary-300 transition-all"
                  >
                    {category.title}

                    <div className="a"></div>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* sub links */}
          <div className="flex items-center justify-center gap-x-3">
            <Link>Mens</Link>
            <Link>Womens</Link>
            <Link>Kids</Link>
            <Link>Electronics</Link>
            <Link>Kitchen</Link>
            <Link>News</Link>
            <Link>Contact Us</Link>
          </div>
        </div>
      </div>

      {/* mobile navbar */}
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

            <div className="flex items-center justify-center gap-x-2">
              <BiCart className="text-2xl" />

              <FaSun className="text-2xl" />
            </div>
          </div>
          {/* search bar */}
          <div className="flex items-center rounded-xl w-11/12 mx-auto bg-slate-50 border border-slate-300 justify-between px-3 py-2 gap-x-2">
            <BiSearch className="text-2xl" />
            <input
              type="text"
              className="focus:outline-none w-full bg-inherit"
              placeholder="Search something"
            />
          </div>
          {/* categories section */}
          <div className="">
            {/* title */}
            <div className="flex items-center justify-between px-3 py-1">
              <h2 className="font-bold">Categories</h2>
              <Link>
                <span className="text-sm flex text-gray-700 items-center justify-center gap-x-1">
                  Show More <FaArrowRight className="text-xs font-thin" />
                </span>
              </Link>
            </div>
            {/* category icons */}
            <div className="flex items-center sm:justify-center gap-x-4 overflow-auto px-6 py-2">
              <div className="flex flex-col items-center justify-between gap-y-2">
                <span className="bg-primary-100 p-3 rounded-full">
                  <GiClothes className="text-3xl text-primary-500" />
                </span>

                <p className="text-sm line-clamp-1">Fashion</p>
              </div>
              <div className="flex flex-col items-center justify-between gap-y-2">
                <span className="bg-primary-100 p-3 rounded-full">
                  <FaLaptop className="text-3xl text-primary-500" />
                </span>

                <p className="text-sm line-clamp-1">Electronics</p>
              </div>
              <div className="flex flex-col items-center justify-between gap-y-2">
                <span className="bg-primary-100 p-3 rounded-full">
                  <MdHomeWork className="text-3xl text-primary-500" />
                </span>

                <p className="text-sm line-clamp-1">Home Decor</p>
              </div>
              <div className="flex flex-col items-center justify-between gap-y-2">
                <span className="bg-primary-100 p-3 rounded-full">
                  <MdHealthAndSafety className="text-3xl text-primary-500" />
                </span>

                <p className="text-sm line-clamp-1">Health</p>
              </div>
              <div className="flex flex-col items-center justify-between gap-y-2">
                <span className="bg-primary-100 p-3 rounded-full">
                  <BsBrush className="text-3xl text-primary-500" />
                </span>

                <p className="text-sm line-clamp-1">Beauty</p>
              </div>
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
                <button
                  onClick={() => setMenuIsShow(false)}
                  className="text-2xl"
                >
                  <MdClose />
                </button>
              </div>
            </div>
            {/* menu options and links */}
            <div className="max-h-full overflow-auto w-full gap-y-1 mt-1 flex flex-col items-start">
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
    </>
  );
}

export default Navbar;
