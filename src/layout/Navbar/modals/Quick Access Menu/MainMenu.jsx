import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MainMenuLoader } from "UI/Loaders/NavbarMenuLoader";
import CartSummary from "./CartSummary";
import DashboradSummary from "./DashboardSummary";

function QuickAccessMenu({ menuIsShow, onCloseMenu }) {
  // summary (main content of modal) state, cart || dashboard
  const [summaryShow, setSummary] = useState("cart");
  const { loading, auth_status, error } = useSelector(
    (state) => state.userData
  );
  const navigate = useNavigate();

  function onMenuNavigation(path) {
    navigate(path);
    onCloseMenu();
  }

  if (error)
    return (
      <div
        className={`${
          menuIsShow
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-10"
        } absolute top-12 w-72 h-56 -left-64 md:-left-14 xl:-left-8 md:top-[4.25rem] bg-gray-100 rounded-md shadow-2xl shadow-gray-800 transition-all flex flex-col items-center justify-evenly z-50 px-2 py-1`}
      >
        <div className="tooltip absolute -top-1 z-40 bg-gray-300 right-6 md:right-12"></div>
        <h6 className="font-bold text-center">
          Ops!, it seems we cant fetch your data, please refresh the page
        </h6>
      </div>
    );

  // on loading (user data) screen
  if (loading)
    return (
      <div
        className={`${
          menuIsShow
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-10"
        } absolute top-12 w-72 -left-64 md:-left-14 xl:-left-8 md:top-[4.25rem] bg-gray-100 rounded-md shadow-2xl shadow-gray-800 transition-all flex flex-col items-center justify-center z-50 px-2 py-1`}
      >
        <MainMenuLoader />
      </div>
    );

  // main components
  if (!loading && auth_status === 200)
    return (
      <div
        className={`${
          menuIsShow
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-10"
        } absolute top-12 w-72 -left-64 md:-left-14 xl:-left-8 md:top-[4.25rem] bg-gray-100 rounded-md shadow-2xl shadow-gray-800 transition-all flex flex-col items-center justify-center z-50 px-2 py-1`}
      >
        <div className="tooltip absolute -top-1 z-40 bg-gray-300 right-6 md:right-12"></div>
        {/* top action btn's */}
        <div className="flex justify-between w-full items-center py-1">
          <button
            onClick={() => setSummary("cart")}
            className={`${
              summaryShow === "cart" && "bg-gray-200"
            } px-4 py-2 w-1/2 text-center font-semibold hover:text-gray-700 text-gray-950 transition-all rounded-md`}
          >
            Bag
          </button>
          <button
            onClick={() => setSummary("dashboard")}
            className={`${
              summaryShow === "dashboard" && "bg-gray-200"
            } px-4 py-2 w-1/2 text-center font-semibold hover:text-gray-700 text-gray-950 transition-all rounded-md`}
          >
            Dashborad
          </button>
        </div>
        {/* main content */}
        {summaryShow === "cart" ? (
          <CartSummary {...{ onMenuNavigation }} />
        ) : (
          <DashboradSummary {...{ onMenuNavigation }} />
        )}
      </div>
    );
  // on unauthorized user case
  if (!loading && (auth_status === 401 || auth_status === 204))
    return (
      <div
        className={`${
          menuIsShow
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-10"
        } absolute top-12 w-72 h-56 -left-64 md:-left-14 xl:-left-8 md:top-[4.25rem] bg-gray-100 rounded-md shadow-2xl shadow-gray-800 transition-all flex flex-col items-center justify-evenly z-50 px-2 py-1`}
      >
        <div className="tooltip absolute -top-1 z-40 bg-gray-300 right-6 md:right-12"></div>
        <h6 className="font-bold text-center">
          You Need SignIn To Access This Section
        </h6>
        <button
          onClick={() => navigate("/EcoVibe/sign-in")}
          className="px-4 py-2 bg-primary-500 text-gray-50 rounded-md text-sm border border-primary-500 hover:bg-gray-50 hover:text-primary-500 transition-all"
        >
          Sign in
        </button>
        <button
          onClick={() => {
            navigate("/EcoVibe/customers");
          }}
          className="flex items-center gap-x-2 text-sm font-semibold text-gray-950 hover:text-gray-800 transition-all"
        >
          <p>Create New Account</p>
          <FaArrowRight />
        </button>
      </div>
    );
}

export default QuickAccessMenu;
