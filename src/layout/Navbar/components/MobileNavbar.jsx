import { BiCart, BiMenu, BiSearch } from "react-icons/bi";
import { FaArrowRight, FaHeart, FaUser } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { supportedCategories, isInArray } from "constants";
import { useEffect, useRef, useState } from "react";
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
import { IoHomeOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineShopping } from "react-icons/ai";
import { useSelector } from "react-redux";
import QuickAccessMenu from "../modals/QuickAccessMenu";
import useOutSideClick from "src/common/hooks/UseOutsideClick";
import SearchModal from "../modals/SearchModal";

// search modal rendered only on this routes
const allowedSearchRoutes = ["/EcoVibe/", "/EcoVibe/Shop"];

const MobileNavbar = () => {
  // detect pathname for mobile navbar
  const location = useLocation();
  // mobile menu state
  const [sideMenuShow, setSideMenu] = useState(false);
  // search modal state
  const [searchShow, setSearchModal] = useState(false);
  // necessary hooks & data
  const { personalInformation, userId } = useSelector(
    (state) => state.userData
  );
  const navigate = useNavigate();
  const [qucickAccessMenuShow, setAccessMenu] = useState(false);
  const qickMenuRef = useRef();
  useOutSideClick(qickMenuRef, () => setAccessMenu(false));

  useEffect(() => {
    document.body.style.overflow = sideMenuShow ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sideMenuShow]);

  return (
    <>
      {/* header navbar */}
      <div className="flex flex-col gap-y-3 w-full">
        {/* top buttons */}
        <div className="flex items-center bg-gray-50 justify-between shadow-lg px-3 py-4">
          <h2
            onClick={() => setSideMenu(true)}
            className="flex items-center justify-center gap-x-1 cursor-pointer"
          >
            <span>
              <BiMenu className="text-3xl" />
            </span>
            <span className="text-xl font-bold">
              {
                location.pathname
                  .replace("/EcoVibe/", "")
                  .replaceAll("/", " ")
                  .split(" ")[0]
              }
            </span>
          </h2>

          <div
            ref={qickMenuRef}
            className="flex items-center justify-center gap-x-1 relative"
          >
            {/* toggle menu */}
            <button
              onClick={() => setAccessMenu((prev) => !prev)}
              className="open-menu"
            >
              <BiCart className="text-3xl" />
            </button>
            {/* quick access menu */}
            <QuickAccessMenu menuIsShow={qucickAccessMenuShow} />
            {/* wish list btn */}
          </div>
        </div>
        {/* search modal */}
        <>
          {/* fake input */}
          <div
            onClick={() => setSearchModal(true)}
            className={`${
              !isInArray(allowedSearchRoutes, location.pathname) && "hidden"
            } flex items-center rounded-xl w-11/12 mx-auto bg-slate-50 border border-slate-300 justify-between px-3 py-2 gap-x-2`}
          >
            <BiSearch className="text-2xl" />

            <input
              type="text"
              className="focus:outline-none w-full bg-inherit"
              placeholder="I'm Shoppnig For..."
            />
          </div>

          <SearchModal
            modalIsShow={searchShow}
            onCloseModal={() => setSearchModal(false)}
          />
        </>
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
          sideMenuShow ? "opacity-100 visible" : "opacity-0 invisible"
        } fixed h-screen w-full top-0 z-30 transition-all duration-500`}
      >
        {/* main menu */}
        <div
          className={`${
            sideMenuShow ? "translate-x-0" : "-translate-x-96"
          } w-3/5 h-screen bg-gray-50 z-10 transition-all duration-500 flex flex-col items-center`}
        >
          {/* user profile information */}
          <div className="w-full h-20 bg-gray-200 flex items-center justify-between px-4 py-2">
            <div className="flex items-center justify-center gap-x-3">
              <div
                onClick={() => {
                  if (userId) navigate("/EcoVibe/profile");
                }}
                className="size-14 bg-gray-100 rounded-full flex items-center justify-center"
              >
                {personalInformation.profilePic ? (
                  <img
                    src={personalInformation?.profilePic}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <FaUser className="text-2xl" />
                )}
              </div>
              <div className="flex flex-col justify-between items-start">
                <h2>
                  {userId
                    ? personalInformation?.first_name || "Not set!"
                    : "Guest User"}
                </h2>
                {/* <p className="text-sm">+12394595</p> */}
              </div>
            </div>
            <div className="">
              <button onClick={() => setSideMenu(false)} className="text-2xl">
                <MdClose />
              </button>
            </div>
          </div>
          {/* menu options and links */}
          <div className="h-full overflow-auto w-full gap-y-1 mt-1 flex flex-col items-start">
            <div
              onClick={() => navigate("/EcoVibe/")}
              className="flex items-center justify-start gap-x-2 px-4 py-4 w-full"
            >
              <span className="text-3xl">
                <IoHomeOutline />
              </span>
              <h3 className="text-base">Home</h3>
            </div>
            <div
              onClick={() => navigate("/EcoVibe/Shop")}
              className="flex items-center justify-start gap-x-2 px-4 py-4 w-full"
            >
              <span className="text-3xl">
                <FiShoppingCart />
              </span>
              <h3 className="text-base">Shop</h3>
            </div>
            <div
              onClick={() => navigate("/EcoVibe/Explore-Products/")}
              className="flex items-center justify-start gap-x-2 px-4 py-4 w-full"
            >
              <span className="text-3xl">
                <TbCategory />
              </span>
              <h3 className="text-base">Shop By Category</h3>
            </div>
            <div
              onClick={() => navigate("/EcoVibe/orders")}
              className="flex items-center justify-start gap-x-2 px-4 py-4 w-full"
            >
              <span className="text-3xl">
                <TbClock />
              </span>
              <h3 className="text-base">My Orders</h3>
            </div>
            <div
              onClick={() => navigate("/EcoVibe/cart")}
              className="flex items-center justify-start gap-x-2 px-4 py-4 w-full"
            >
              <span className="text-3xl">
                <AiOutlineShopping />
              </span>
              <h3 className="text-base">Cart</h3>
            </div>
            <div
              onClick={() => navigate("/EcoVibe/wish-list")}
              className="flex items-center justify-start gap-x-2 px-4 py-4 w-full"
            >
              <span className="text-3xl">
                <TbHeart />
              </span>
              <h3 className="text-base">Wish List</h3>
            </div>
            <div
              onClick={() => navigate("/EcoVibe/")}
              className="flex items-center justify-start gap-x-2 px-4 py-4 w-full"
            >
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
            {!userId && (
              <div
                onClick={() =>
                  navigate("/EcoVibe/sign-up/first-step/authentication")
                }
                className="flex items-center justify-start gap-x-2 px-4 py-4 w-full"
              >
                <span className="text-3xl">
                  <TbLogin />
                </span>
                <h3 className="text-base">Sign up</h3>
              </div>
            )}
          </div>
        </div>
        {/* menu background */}
        <div
          onClick={() => setSideMenu(false)}
          className="w-full h-full bg-black backdrop-blur-sm bg-opacity-30 -z-10 absolute inset-0"
        ></div>
      </div>
    </>
  );
};

export default MobileNavbar;
