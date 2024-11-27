import { BiCart, BiMenu, BiSearch } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import { isInArray } from "constants";
import { useEffect, useRef, useState } from "react";
import {
  TbCards,
  TbCategory,
  TbChartHistogram,
  TbClock,
  TbCreditCard,
  TbEyeQuestion,
  TbHeart,
  TbHome,
  TbLogin,
  TbShoppingBag,
  TbShoppingCart,
  TbUser,
} from "react-icons/tb";
import { useSelector } from "react-redux";
import QuickAccessMenu from "../modals/QuickAccessMenu";
import useOutSideClick from "src/common/hooks/UseOutsideClick";
import SearchModal from "../modals/SearchModal";
import SideMenuProfileLoader from "UI/Loaders/SideMenuProfileLoader";

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
  const { personalInformation, loading, auth_status, userType, cartData } =
    useSelector((state) => state.userData);
  const navigate = useNavigate();
  const [qucickAccessMenuShow, setAccessMenu] = useState(false);
  const qickMenuRef = useRef();
  useOutSideClick(qickMenuRef, () => setAccessMenu(false));

  // disable scroll on menu open
  useEffect(() => {
    document.body.style.overflow = sideMenuShow ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sideMenuShow]);

  function sideMenuNavigate(path) {
    if (sideMenuShow) {
      navigate(path);
      setSideMenu(false);
    }
  }

  return (
    <>
      {/* header navbar */}
      <div className="flex flex-col gap-y-3">
        {/* top buttons */}
        <div className="flex items-center bg-gray-50 justify-between shadow-lg px-3 py-3">
          <button onClick={() => setSideMenu(true)} className="text-3xl">
            <BiMenu />
          </button>

          <div ref={qickMenuRef} className="relative">
            {/* toggle menu */}
            <button
              onClick={() => setAccessMenu((prev) => !prev)}
              className="open-menu relative"
            >
              <BiCart className="text-3xl" />

              <p className="absolute text-sm size-5 -bottom-3 bg-primary-500 text-gray-50 rounded-full flex items-center justify-center">
                {cartData?.length}
              </p>
            </button>
            {/* quick access menu */}
            <QuickAccessMenu menuIsShow={qucickAccessMenuShow} />
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
      </div>

      {/* side menu */}
      <div
        className={`${
          sideMenuShow ? "opacity-100 visible" : "opacity-0 invisible"
        } fixed inset-0 z-[60] transition-all duration-500`}
      >
        {/* main menu */}
        <div
          className={`${
            sideMenuShow ? "translate-x-0" : "-translate-x-44"
          } w-3/4 bg-gray-50 z-10 relative h-screen transition-all duration-500 flex flex-col items-center`}
        >
          {/* user profile information */}
          {loading ? (
            <SideMenuProfileLoader />
          ) : (
            <div
              onClick={() => {
                sideMenuNavigate(
                  auth_status === 200
                    ? "/EcoVibe/profile"
                    : "/EcoVibe/Customers/sign-up"
                );
              }}
              className="w-full shadow-md flex items-center justify-between p-2"
            >
              <div className="flex items-center justify-center gap-x-3">
                <div className="size-16 pt-2 bg-gray-200 rounded-full overflow-hidden flex items-center justify-between">
                  {auth_status === 200 ? (
                    <img
                      src={personalInformation?.profilePic}
                      loading="lazy"
                      className="size-full object-cover"
                    />
                  ) : (
                    <TbUser className="size-full text-gray-600 mt-2" />
                  )}
                </div>
                <div className="max-w-[70%] flex flex-col justify-between items-start">
                  <h2 className="text-lg font-medium line-clamp-1 w-full break-words">
                    {auth_status === 200
                      ? personalInformation?.first_name || ""
                      : "Guest user"}{" "}
                  </h2>
                  <p className="text-sm">
                    {auth_status === 200
                      ? personalInformation?.email || ""
                      : "Click to sign-up"}
                  </p>
                </div>
              </div>
            </div>
          )}
          {/* menu options and links */}
          <div className="overflow-auto w-full h-[90%]">
            <div className="flex flex-col gap-y-2">
              <div
                onClick={() => sideMenuNavigate("/EcoVibe/")}
                className="flex items-center justify-start gap-x-2 px-4 py-4 w-full flex-none"
              >
                <span className="text-3xl">
                  <TbHome />
                </span>
                <h3 className="text-base">Home</h3>
              </div>
              <div
                onClick={() => sideMenuNavigate("/EcoVibe/Shop")}
                className="flex items-center justify-start gap-x-2 px-4 py-4 w-full flex-none"
              >
                <span className="text-3xl">
                  <TbShoppingCart />
                </span>
                <h3 className="text-base">Shop</h3>
              </div>
              <div
                onClick={() => sideMenuNavigate("/EcoVibe/Explore-Products/")}
                className="flex items-center justify-start gap-x-2 px-4 py-4 w-full flex-none"
              >
                <span className="text-3xl">
                  <TbCategory />
                </span>
                <h3 className="text-base">Shop By Category</h3>
              </div>
              <div
                onClick={() => sideMenuNavigate("/EcoVibe/bag/orders")}
                className="flex items-center justify-start gap-x-2 px-4 py-4 w-full flex-none"
              >
                <span className="text-3xl">
                  <TbClock />
                </span>
                <h3 className="text-base">My Orders</h3>
              </div>
              <div
                onClick={() => sideMenuNavigate("/EcoVibe/bag/cart")}
                className="flex items-center justify-start gap-x-2 px-4 py-4 w-full flex-none"
              >
                <span className="text-3xl">
                  <TbShoppingBag />
                </span>
                <h3 className="text-base">Cart</h3>
              </div>
              <div
                onClick={() => sideMenuNavigate("/EcoVibe/bag/wish-list")}
                className="flex items-center justify-start gap-x-2 px-4 py-4 w-full flex-none"
              >
                <span className="text-3xl">
                  <TbHeart />
                </span>
                <h3 className="text-base">Wish List</h3>
              </div>
              <div
                onClick={() => sideMenuNavigate("/EcoVibe/dashboard")}
                className={`${
                  (auth_status !== 200 || userType === "customer") && "!hidden"
                } flex items-center justify-start gap-x-2 px-4 py-4 w-full flex-none`}
              >
                <span className="text-3xl">
                  <TbChartHistogram />
                </span>
                <h3 className="text-base">Dashboard</h3>
              </div>
              <div
                onClick={() => sideMenuNavigate("/EcoVibe/sellers-solutions")}
                className="flex items-center justify-start gap-x-2 px-4 py-4 w-full flex-none"
              >
                <span className="text-3xl">
                  <TbCreditCard />
                </span>
                <h3 className="text-base">Seller Solutions</h3>
              </div>
              <div
                onClick={() => sideMenuNavigate("/EcoVibe/")}
                className="flex items-center justify-start gap-x-2 px-4 py-4 w-full flex-none"
              >
                <span className="text-3xl">
                  <TbCards />
                </span>
                <h3 className="text-base">About Developer</h3>
              </div>
              <div
                onClick={() =>
                  sideMenuNavigate(
                    auth_status === 200
                      ? "/EcoVibe/profile"
                      : "/EcoVibe/sign-in"
                  )
                }
                className="flex items-center justify-start gap-x-2 px-4 py-4 w-full flex-none"
              >
                <span className="text-3xl">
                  <TbLogin />
                </span>
                <h3 className="text-base">
                  {auth_status === 200 ? "My Profile" : "Sign-in"}
                </h3>
              </div>
              <div
                onClick={() => sideMenuNavigate("/EcoVibe/")}
                className="flex items-center justify-start gap-x-2 px-4 py-4 w-full flex-none"
              >
                <span className="text-3xl">
                  <TbEyeQuestion />
                </span>
                <h3 className="text-base">FAQs</h3>
              </div>
            </div>
          </div>
        </div>
        {/* menu background */}
        <div
          onClick={() => setSideMenu(false)}
          className="size-full bg-black backdrop-blur-sm bg-opacity-30 absolute inset-0"
        ></div>
      </div>
    </>
  );
};

export default MobileNavbar;
