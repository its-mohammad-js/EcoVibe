import { BiCart, BiMenu, BiSearch } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { isInArray } from "helpers";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import QuickAccessMenu from "../../modals/Quick Access Menu/MainMenu";
import useOutSideClick from "hooks/UseOutsideClick";
import SearchModal from "../../modals/Search Modal/SearchModal";
import SideMenu from "./SideMenu";

// search modal rendered only on this routes
const allowedSearchRoutes = ["/EcoVibe/", "/EcoVibe/Shop"];

const MobileNavbar = () => {
  const [sideMenuShow, setSideMenu] = useState(false); // mobile menu state
  const location = useLocation(); // detect pathname for mobile navbar
  const [searchShow, setSearchModal] = useState(false); // search modal state
  const { cartData } = useSelector((state) => state.userData); // current user cart data
  // quick menu state & functionalities
  const [qucickAccessMenuShow, setAccessMenu] = useState(false);
  const qickMenuRef = useRef(); // ref to quick menu
  useOutSideClick(qickMenuRef, () => setAccessMenu(false)); // outside click events on quick menu open

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
      <SideMenu {...{ sideMenuShow, setSideMenu }} />
    </>
  );
};

export default MobileNavbar;
