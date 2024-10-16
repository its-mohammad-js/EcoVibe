import { useRef, useState } from "react";
import {
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineInfoCircle,
  AiOutlineLeft,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import UserInfo from "../Modals/User Info/UserInfo";
import { useRoomsData } from "../RoomsContext";
import { HiDotsVertical } from "react-icons/hi";
import useOutSideClick from "../../../../../common/hooks/UseOutsideClick";
import toast from "react-hot-toast";

function Navbar({ searchBar, setSearchBar, deleteRoom }) {
  // user info modal state
  const [userDetails, setUserDetails] = useState(null);
  // context menu state
  const [contextMenu, setContextMenu] = useState(false);
  const contextMenuRef = useRef();
  useOutSideClick(contextMenuRef, () =>
    setContextMenu(() => setContextMenu(false))
  );
  // necessary data
  const { barIsShow } = searchBar || {};
  const { setSelectedRoom, selectedRoom, rooms } = useRoomsData();
  const {
    profilePic,
    status,
    first_name,
    last_name,
    business_name,
    userType,
    career_title,
  } = selectedRoom?.reciver || {};

  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        setContextMenu(true);
      }}
      className="w-full bg-gray-100 p-2 lg:px-4 flex items-center justify-between relative"
    >
      {/* user summary info & close room btn */}
      <div className="flex items-center">
        {/* close rom btn */}
        <button onClick={() => setSelectedRoom(null)} className="text-2xl">
          <AiOutlineLeft />
        </button>
        {/* user summary info */}
        <>
          {profilePic ? (
            <img
              src={profilePic}
              className="size-14 rounded-full"
              alt="user-profile"
            />
          ) : (
            <div className="size-12 lg:size-16 flex items-center justify-center bg-gray-200 rounded-full">
              <AiOutlineUser className="text-4xl lg:text-6xl mt-3 rounded-full" />
            </div>
          )}
        </>
        {/* user info & status */}
        <div className="flex flex-col ml-4 cursor-pointer">
          <h4
            className={userType === "customer" ? "" : "flex flex-col gap-y-1"}
          >
            <p className="text-lg font-bold">
              {userType === "customer" ? first_name : business_name}
            </p>
            <p className="-mt-1">
              {userType === "customer" ? last_name : career_title}
            </p>
          </h4>

          <p>{status}</p>
        </div>
      </div>
      {/* context menu */}
      <div ref={contextMenuRef} className="flex items-center gap-x-2">
        <div className="relative">
          <button
            onClick={() => setContextMenu(!contextMenu)}
            className="text-3xl"
          >
            <HiDotsVertical />
          </button>

          <div
            className={`${
              contextMenu ? "opacity-100 visible" : "opacity-0 invisible"
            } absolute transition-all w-60 overflow-hidden bg-gray-50 z-50 right-0 shadow-2xl rounded-sm flex flex-col`}
          >
            <button
              onClick={() => {
                setContextMenu(false);
                setSearchBar((prev) => ({ ...prev, barIsShow: true }));
              }}
              className="px-4 py-4 text-lg hover:bg-gray-200 transition-all flex items-center gap-x-3"
            >
              <AiOutlineSearch className="text-2xl" /> Search bar
            </button>
            <button
              onClick={() => {
                setContextMenu(false);
                setUserDetails(selectedRoom);
              }}
              className="px-4 py-4 text-lg hover:bg-gray-200 transition-all flex items-center gap-x-3"
            >
              <AiOutlineInfoCircle className="text-2xl" /> User info
            </button>
            <button
              onClick={() => {
                setContextMenu(false);
                setSelectedRoom(null);
              }}
              className="px-4 py-4 text-lg hover:bg-gray-200 transition-all flex items-center gap-x-3"
            >
              <AiOutlineClose className="text-2xl" />
              Close chat
            </button>
            <button
              onClick={() => deleteRoom(selectedRoom.roomId, rooms)}
              className="px-4 py-4 text-lg text-red-600 hover:bg-gray-200 transition-all flex items-center gap-x-3"
            >
              <AiOutlineDelete className="text-2xl " />
              Delete chat
            </button>
          </div>
        </div>
      </div>
      {/* user info modal */}
      <UserInfo
        modalShow={userDetails}
        onCloseModal={() => setUserDetails(null)}
      />
      {/* search bar */}
      <div
        className={`${
          barIsShow
            ? "visible opacity-100 translate-y-0"
            : "opacity-0 invisible translate-y-10"
        } absolute inset-0 bg-gray-100 transition-all flex items-center justify-center px-4`}
      >
        <button
          onClick={() =>
            setSearchBar((prev) => ({ ...prev, barIsShow: false }))
          }
          className="text-3xl"
        >
          <AiOutlineLeft />
        </button>
        <input
          onChange={(e) =>
            setSearchBar((prev) => ({
              ...prev,
              searchQuery: e.target.value,
            }))
          }
          value={searchBar.searchQuery}
          type="text"
          placeholder="search messages"
          className="flex-1 px-4 py-2 bg-transparent outline-none text-lg"
        />
        <button className="text-3xl">
          <AiOutlineSearch />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
