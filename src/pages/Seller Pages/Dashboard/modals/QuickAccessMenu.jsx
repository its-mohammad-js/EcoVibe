import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { SiSimpleanalytics } from "react-icons/si";
import { FaBox, FaPlusCircle, FaThList, FaUser } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { RiFileAddFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import useOutSideClick from "hooks/UseOutsideClick";
import { FaMessage } from "react-icons/fa6";

function QuickAccessMenu({ onModalChange }) {
  const [openMenu, setMenu] = useState(false);
  const navigate = useNavigate();
  const [screenDimensions, setScreenDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const { userId, loading, auth_status } = useSelector(
    (state) => state.userData
  );
  // ref to menu
  const menuRef = useRef();
  // close menu on outside click event
  useOutSideClick(menuRef, () => setMenu(false));

  // get window size on change size event
  useEffect(() => {
    const handleResize = () => {
      setScreenDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        ref={menuRef}
        className={`${
          openMenu ? "translate-x-0" : "-translate-x-24"
        } fixed shadow-xl shadow-gray-800 top-10 lg:top-20 h-[35rem] xl:h-[40rem] px-2 py-2 border-y-4 border-primary-500 rounded-r-lg bg-gray-50 z-50 transition-all duration-500 flex flex-col justify-between`}
      >
        {/* quick access to dashboard tabs */}
        <div className="flex flex-col transition-all">
          <button
            onClick={() => navigate("Analytics")}
            className="flex flex-col items-center justify-center gap-y-1 text-primary-500 group"
          >
            <p className="p-2 text-xl rounded-full border border-gray-50 group-hover:border-primary-500">
              <SiSimpleanalytics />
            </p>
            <p className="text-xs opacity-0 group-hover:opacity-100 transition-all text-center w-full">
              Analytics
            </p>
          </button>
          <button
            onClick={() => navigate("Products")}
            className="flex flex-col items-center justify-center gap-y-1 text-primary-500 group"
          >
            <p className="p-2 text-xl rounded-full border border-gray-50 group-hover:border-primary-500">
              <FaBox />
            </p>
            <p className="text-xs opacity-0 group-hover:opacity-100 transition-all text-center w-full">
              Products
            </p>
          </button>
          <button
            onClick={() => navigate("Orders")}
            className="flex flex-col items-center justify-center gap-y-1 text-primary-500 group"
          >
            <p className="p-2 text-xl rounded-full border border-gray-50 group-hover:border-primary-500">
              <FaThList />
            </p>
            <p className="text-xs opacity-0 group-hover:opacity-100 transition-all text-center w-full">
              Orders
            </p>
          </button>
          <button
            onClick={() => navigate("/EcoVibe/")}
            className="flex flex-col items-center justify-center gap-y-1 text-primary-500 group"
          >
            <p className="p-2 text-2xl rounded-full border border-gray-50 group-hover:border-primary-500">
              <IoHome />
            </p>
            <p className="text-xs opacity-0 group-hover:opacity-100 transition-all text-center w-full">
              Home
            </p>
          </button>
          <button
            onClick={() => navigate("/EcoVibe/")}
            className="flex flex-col items-center justify-center gap-y-1 text-primary-500 group"
          >
            <p className="p-2 text-2xl rounded-full border border-gray-50 group-hover:border-primary-500">
              <FaMessage />
            </p>
            <p className="text-xs opacity-0 group-hover:opacity-100 transition-all text-center w-full">
              Message
            </p>
          </button>
        </div>
        {/* qucik actions */}
        <div className="flex flex-col">
          <button
            onClick={() => onModalChange("add-product")}
            className="flex flex-col items-center justify-center gap-y-1 text-primary-500 group"
          >
            <p className="p-2 text-2xl rounded-full border border-gray-50 group-hover:border-primary-500">
              <FaPlusCircle />
            </p>
            <p className="text-xs opacity-0 group-hover:opacity-100 transition-all text-center w-full">
              Add Item
            </p>
          </button>
          <button
            onClick={() => onModalChange("add-story")}
            className="flex flex-col items-center justify-center gap-y-1 text-primary-500 group"
          >
            <p className="p-2 text-2xl rounded-full border border-gray-50 group-hover:border-primary-500">
              <RiFileAddFill />
            </p>
            <p className="text-xs opacity-0 group-hover:opacity-100 transition-all text-center w-full">
              Add Story
            </p>
          </button>
          <button
            onClick={() => navigate(`/EcoVibe/seller/${userId}`)}
            className="flex flex-col items-center justify-center gap-y-1 text-primary-500 group"
          >
            <p className="p-2 text-2xl rounded-full border border-gray-50 group-hover:border-primary-500">
              <FaUser />
            </p>
            <p className="text-xs opacity-0 group-hover:opacity-100 transition-all text-center w-full">
              Profile
            </p>
          </button>
        </div>

        {/* dragable btn (open close menu) */}
        <motion.div
          drag={!openMenu && "y"}
          dragConstraints={{
            top: -113,
            bottom: screenDimensions.height - 320, // Adjust elementHeight as needed
          }}
          className="fixed z-50 left-0 top-1/4"
        >
          {/* open menu button */}
          <button
            disabled={loading || auth_status !== 200}
            onClick={() => setMenu((prev) => !prev)}
            className={`${
              openMenu ? "translate-x-[4.25rem]" : "translate-x-24"
            } bg-primary-500 z-10 absolute top-2 transition-all duration-500 p-1 rounded-r-lg disabled:-translate-x-48`}
          >
            <p
              className={`${
                openMenu && "rotate-180"
              } text-4xl text-gray-50 transition-all`}
            >
              <BiChevronLeft />
            </p>
          </button>
        </motion.div>
      </div>
    </>
  );
}

export default QuickAccessMenu;
