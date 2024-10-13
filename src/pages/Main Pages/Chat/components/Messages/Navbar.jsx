import { useState } from "react";
import {
  AiOutlineInfoCircle,
  AiOutlineLeft,
  AiOutlineUser,
} from "react-icons/ai";
import UserInfo from "../User Info/UserInfo";
import { useRoomsData } from "../RoomsContext";

function Navbar({ selectedRoom }) {
  const [userDetails, setUserDetails] = useState(null);
  const { profilePic, status, first_name } = selectedRoom.reciver;
  const { setSelectedRoom } = useRoomsData();

  return (
    <div className="w-full bg-gray-100 p-2 lg:px-4 flex items-center">
      <button onClick={() => setSelectedRoom(null)} className="text-2xl">
        <AiOutlineLeft />
      </button>
      {/* user profile */}
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
      {/* user info & status */}
      <div className="flex flex-col ml-4 cursor-pointer">
        <h4>{first_name}</h4>
        <p>{status}</p>
      </div>
      {/* user info */}
      <>
        <div className="absolute right-4">
          <button
            onClick={() => setUserDetails(selectedRoom)}
            className="text-4xl mt-1"
          >
            <AiOutlineInfoCircle />
          </button>

          <UserInfo
            modalShow={userDetails}
            onCloseModal={() => setUserDetails(null)}
          />
        </div>
      </>
    </div>
  );
}

export default Navbar;
