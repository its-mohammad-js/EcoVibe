import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { BsShopWindow } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import SearchModal from "../../modals/Search Modal/SearchModal";
import { BiSearch } from "react-icons/bi";
import useOutSideClick from "hooks/UseOutsideClick";
import QuickAccessMenu from "../../modals/Quick Access Menu/MainMenu";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { getUserIdCookie } from "src/reducers/auth/authHelpers";
import { LuShoppingCart } from "react-icons/lu";

function MainNavbar() {
  const navigate = useNavigate();
  // search menu modal state & hooks
  const [searchShow, setSearchModal] = useState(false);
  const searchModalRef = useRef();
  useOutSideClick(searchModalRef, () => setSearchModal(false));
  // quick access menu state & hooks
  const [qucickAccessMenuShow, setAccessMenu] = useState(false);
  const quickMenuRef = useRef();
  useOutSideClick(quickMenuRef, () => setAccessMenu(false));
  // current user info
  const { personalInformation, cartData, auth_status } = useSelector(
    (state) => state.userData
  );
  const isGuestUser = getUserIdCookie(true);

  return (
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
          location.pathname.includes("Explore-Products") && "hidden"
        } h-12 w-7/12 relative`}
      >
        {/* fake input (just opens search modal) */}
        <div className="flex items-center relative h-full px-4 lg:pl-8">
          <input
            disabled
            type="text"
            className="bg-gray-100 px-4 rounded-l-md py-2.5 border border-gray-300 h-full focus:outline-none xl:w-full"
            placeholder="Im Shopping For..."
          />
          <button className="bg-primary-500 text-white text-2xl rounded-r-md h-full flex items-center px-4">
            <BiSearch />
          </button>

          <div
            onClick={() => setSearchModal(true)}
            className="absolute inset-0"
          ></div>
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
            navigate(
              auth_status === 200 || !isGuestUser
                ? "/EcoVibe/profile"
                : "/EcoVibe/Sign-in/"
            )
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
              <FaRegUser className="text-2xl" />
            </div>
          )}
        </button>
        {/* messages btn */}
        <button
          onClick={() => navigate("/EcoVibe/Messages")}
          className="p-3 relative hover:bg-gray-300 transition-all rounded-full bg-gray-200 text-gray-800 text-2xl"
        >
          <FaRegMessage />
        </button>
        {/* wish list btn */}
        <button
          onClick={() => navigate("/EcoVibe/bag/wish-list")}
          className="p-3 hover:bg-gray-300 transition-all rounded-full bg-gray-200 text-gray-800 text-2xl"
        >
          <FaRegHeart />
        </button>
        {/* access menu btn & access menu */}
        <div ref={quickMenuRef}>
          <button
            onClick={() => setAccessMenu((prev) => !prev)}
            className="p-3 relative hover:bg-gray-300 transition-all rounded-full bg-gray-200 text-gray-800 text-2xl"
          >
            <LuShoppingCart />

            {/* cart items count */}
            <p
              className={`${
                cartData?.length <= 0 && "hidden"
              } absolute text-sm bg-primary-500 rounded-full text-gray-50 size-6 flex items-center justify-center left-0 -bottom-2 font-medium`}
            >
              {cartData?.length}
            </p>
          </button>

          <QuickAccessMenu
            menuIsShow={qucickAccessMenuShow}
            onCloseMenu={() => setAccessMenu(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default MainNavbar;
