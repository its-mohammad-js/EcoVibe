import { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useRoomsData } from "../RoomsContext";

const ChatRow = ({ room, mode }) => {
  // reciver data
  const { profilePic, status, first_name, last_name, business_name, userType } =
    room.reciver;
  // last message data
  const { content, createdAt } = room.messageList?.at(-1) || {};
  // date of last message
  const [lastMessageDate, setLastDate] = useState("");
  // necessary data
  const { setSelectedRoom, setSelectedMessage, rooms } = useRoomsData();

  // calculate last meesage date
  useEffect(() => {
    // Create a Date object from the timestamp
    const dateToCheck = new Date(createdAt);

    // Get today's date
    const today = new Date();

    // Compare the year, month, and day of both dates
    if (
      dateToCheck.getFullYear() === today.getFullYear() &&
      dateToCheck.getMonth() === today.getMonth() &&
      dateToCheck.getDate() === today.getDate()
    ) {
      setLastDate(dateToCheck.toLocaleTimeString());
    } else {
      setLastDate(dateToCheck.toDateString());
    }
  }, [createdAt]);

  return (
    <div
      onClick={() => {
        setSelectedMessage(
          mode === "message" ? room.messageList?.at(-1) : null
        );
        const findedRoom = rooms.find(({ roomId }) => roomId === room.roomId);
        setSelectedRoom(findedRoom);
      }}
      className="w-full h-20 lg:h-24 relative rounded-md flex items-center hover:bg-gray-300/30 transition-all cursor-pointer gap-x-2 px-4 py-2"
    >
      {/* user profile */}
      <div className="relative">
        {/* user avatar */}
        {profilePic ? (
          <img src={profilePic} className="size-20 bg-gray-100 rounded-full" />
        ) : (
          <div className="size-16 lg:size-20 flex items-center justify-center group bg-gray-200 text-gray-500 rounded-full">
            <AiOutlineUser className="text-6xl lg:text-7xl mt-3 group-hover:mt-2 transition-all rounded-full" />
          </div>
        )}
        <div
          className={`${
            status === "offline" ? "bg-gray-400" : "bg-green-400"
          } ${
            mode === "message" && "hidden"
          } absolute -bottom-1 size-5 right-1 rounded-full transition-all`}
        ></div>
      </div>
      {/* user info */}
      <div className="flex flex-col mt-2.5 justify-center h-full w-2/3 select-none">
        {/* user name */}
        <h6 className="line-clamp-2 font-bold text-lg text-gray-800">
          {userType === "customer"
            ? first_name + " " + last_name
            : business_name}
        </h6>
        {/* last message */}
        <p className="line-clamp-1 text-gray-700">
          {room?.messageList?.length ? content : "Nothing yet"}
        </p>
        {/* last message date */}
        <p className="absolute top-2 right-2 text-sm text-gray-700">
          {createdAt ? lastMessageDate : ""}
        </p>
      </div>
    </div>
  );
};

export default ChatRow;
