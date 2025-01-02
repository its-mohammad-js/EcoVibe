import { AiOutlineLeft, AiOutlineUser } from "react-icons/ai";
import { useRoomsData } from "../../../RoomsContext";

function UserSummary({ setUserDetails, lastStatus }) {
  const { setSelectedRoom, selectedRoom } = useRoomsData();
  const { profilePic, status, first_name, business_name, userType } =
    selectedRoom?.receiver || {};

  return (
    <div className="flex items-center">
      {/* close rom btn */}
      <button
        onClick={() => {
          setSelectedRoom(null);
        }}
        className="text-2xl"
      >
        <AiOutlineLeft />
      </button>
      {/* user summary info */}
      <div onClick={() => setUserDetails(true)} className="cursor-pointer">
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
      </div>
      {/* user info & status */}
      <div
        onClick={() => setUserDetails(true)}
        className="flex flex-col ml-4 cursor-pointer"
      >
        <h4 className={userType === "customer" ? "" : "flex flex-col gap-y-1"}>
          <p className="text-lg font-bold">
            {userType === "customer" ? first_name : business_name}
          </p>
          <p className="-mt-1 text-sm line-clamp-1 break-words lg:text-base">
            {lastStatus.current}
          </p>
        </h4>

        <p>{status}</p>
      </div>
    </div>
  );
}

export default UserSummary;
