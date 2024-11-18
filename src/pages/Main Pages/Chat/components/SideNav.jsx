import { useState } from "react";
import toast from "react-hot-toast";
import {
  AiOutlineHome,
  AiOutlineLeft,
  AiOutlineOrderedList,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineBarChart,
} from "react-icons/ai";
import { RiContactsBook2Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function SideNav({ onCloseNav, navIsShow, openContacts }) {
  // search contacts modal
  const [searchModalShow, setSearchModal] = useState(false);
  // necessary data & hooks
  const { personalInformation, userType, userId } = useSelector(
    (state) => state.userData
  );
  const { auth_status } = useSelector((state) => state.userData);
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`${
          navIsShow
            ? "translate-x-0 opacity-100 visible"
            : "-translate-x-16 opacity-0 invisible"
        } absolute transition-all ease-linear z-50 max-w-20 h-full bg-gray-50 px-4 py-4 flex flex-col items-center gap-y-6 border-r-2 rounded-r-2xl`}
      >
        <button
          onClick={() => onCloseNav()}
          className="px-2 py-2 bg-primary-500 text-gray-50 text-xl rounded-lg"
        >
          <AiOutlineLeft className="text-3xl" />
        </button>
        <div className="flex flex-col h-full relative items-center gap-y-6">
          {/* home page btn */}
          <button
            onClick={() => navigate("/EcoVibe/")}
            className="text-3xl group flex items-center relative hover:bg-gray-200 transition-all px-2 rounded-lg py-2"
          >
            <AiOutlineHome />
            <p className="absolute z-50 left-12 shadow-2xl shadow-gray-400 text-base bg-gray-50 border border-gray-300 px-4 py-1 rounded-xl invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all translate-y-10 group-hover:translate-y-0 text-nowrap">
              Back To Home
            </p>
          </button>
          {/* search messages btn */}
          <button
            disabled={auth_status !== 200}
            onClick={() => {
              onCloseNav();
              openContacts();
            }}
            className="text-3xl disabled:hidden group flex items-center relative hover:bg-gray-200 transition-all px-2 rounded-lg py-2"
          >
            <RiContactsBook2Line />

            <p className="absolute z-50 left-12 shadow-2xl shadow-gray-400 text-base bg-gray-50 border border-gray-300 px-4 py-1 rounded-xl invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all translate-y-10 group-hover:translate-y-0 text-nowrap">
              Search Contacts
            </p>
          </button>
          {/* orders page */}
          <button
            onClick={() =>
              navigate(
                userType === "customer"
                  ? "/EcoVibe/bag/orders"
                  : "/EcoVibe/Dashboard/Orders"
              )
            }
            className="text-3xl group flex items-center relative hover:bg-gray-200 transition-all px-2 rounded-lg py-2"
          >
            <AiOutlineOrderedList />
            <p className="absolute z-50 left-12 shadow-2xl shadow-gray-400 text-base bg-gray-50 border border-gray-300 px-4 py-1 rounded-xl invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all translate-y-10 group-hover:translate-y-0 text-nowrap">
              Check Orders
            </p>
          </button>
          {/* dshboard */}
          <button
            onClick={() => navigate("/EcoVibe/Dashboard")}
            disabled={userType === "customer"}
            className="text-3xl group flex items-center disabled:hidden relative hover:bg-gray-200 transition-all px-2 rounded-lg py-2"
          >
            <AiOutlineBarChart />
            <p className="absolute z-50 left-12 shadow-2xl shadow-gray-400 text-base bg-gray-50 border border-gray-300 px-4 py-1 rounded-xl invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all translate-y-10 group-hover:translate-y-0 text-nowrap">
              Dashboard
            </p>
          </button>

          {/* profile check */}
          <div
            onClick={() =>
              navigate(
                userType === "customer"
                  ? "/EcoVibe/profile"
                  : `/EcoVibe/seller/${userId}`
              )
            }
            className="text-3xl absolute bottom-2 group flex items-center hover:bg-gray-200 transition-all rounded-lg"
          >
            <>
              {personalInformation?.profilePic ? (
                <img
                  src={personalInformation?.profilePic}
                  className="rounded-full size-14 object-cover"
                />
              ) : (
                <p className="p-2">
                  <AiOutlineUser />
                </p>
              )}
            </>
            <p className="absolute z-50 left-12 shadow-2xl shadow-gray-400 text-base bg-gray-50 border border-gray-300 px-4 py-1 rounded-xl invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all translate-y-10 group-hover:translate-y-0 text-nowrap">
              My Profile
            </p>
          </div>
        </div>
      </div>

      <div
        onClick={() => onCloseNav()}
        className={`${
          navIsShow ? "opacity-100 visible" : "opacity-0 invisible"
        } fixed inset-0 z-40 bg-gray-950/50 backdrop-blur-sm`}
      ></div>
    </>
  );
}

export default SideNav;
