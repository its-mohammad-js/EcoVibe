import { useEffect, useRef, useState } from "react";
import { AiOutlineDelete, AiOutlineUser } from "react-icons/ai";
import { useRoomsData } from "../RoomsContext";
import { CiChat1 } from "react-icons/ci";
import useOutSideClick from "hooks/UseOutsideClick";
import TextAlert from "UI/Alerts/TextAlert";
import { getDatabase, onValue, ref } from "firebase/database";

const ChatColumn = ({ room, mode, deleteRoom }) => {
  // reciver data
  const {
    profilePic,
    last_seen,
    first_name,
    last_name,
    business_name,
    userType,
  } = room.reciver;
  // context menu state
  const [contextMenu, setContextMenu] = useState(false);
  const contextMenuRef = useRef();
  useOutSideClick(contextMenuRef, () => setContextMenu(false)); // close context menu on outside click
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // warning alert state
  const [showAlert, setShowAlert] = useState(false);
  // last message data
  const { content, createdAt, type } = room.messageList?.at(-1) || {};
  // date of last message
  const [lastMessageDate, setLastDate] = useState("");
  // necessary data
  const { selectedRoom, setSelectedRoom, setSelectedMessage, rooms } =
    useRoomsData();
  const [userStatus, setUserStatus] = useState(false);

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
      setLastDate(
        dateToCheck.toLocaleTimeString("en-us", {
          month: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    } else {
      setLastDate(dateToCheck.toDateString());
    }
  }, [createdAt]);

  function openChateMessageHandler() {
    setSelectedMessage(mode === "message" ? room.messageList?.at(-1) : null);
    if (mode === "message") {
      // reset selected message
      setTimeout(() => {
        setSelectedMessage(null);
      }, 2000);
    }
    const findedRoom = rooms.find(({ roomId }) => roomId === room.roomId);
    setSelectedRoom(findedRoom);
  }

  // update last status of user (online / offline)
  useEffect(() => {
    if (!last_seen) {
      userStatus.current = false;
      return;
    }

    const db = getDatabase();

    const updateUserStatus = onValue(
      ref(db, ".info/serverTimeOffset"),
      (snapshot) => {
        // Get the current server time
        const serverTime = Date.now() + snapshot.val();

        const timeDifference = serverTime - last_seen?.date;
        const timeDifferenceInSeconds = Math.floor(timeDifference / 1000);

        setUserStatus(timeDifferenceInSeconds >= 30);
      }
    );

    // Cleanup the listener when the component unmounts
    return () => updateUserStatus();
  }, [last_seen, selectedRoom]);

  return (
    <>
      {/* chat column */}
      <div
        onContextMenu={(e) => {
          e.preventDefault();
          setPosition({ x: e.clientX, y: e.clientY });
          setContextMenu(!contextMenu);
        }}
        onClick={() => openChateMessageHandler()}
        className="w-full h-24 relative select-none rounded-md flex items-center hover:bg-gray-300/30 transition-all cursor-pointer gap-x-2 px-4 py-2"
      >
        {/* user profile */}
        <div className="relative">
          {/* user avatar */}
          {profilePic ? (
            <img
              src={profilePic}
              className="size-20 bg-gray-100 rounded-full"
            />
          ) : (
            <div className="size-16 lg:size-20 flex items-center justify-center group bg-gray-200 text-gray-500 rounded-full">
              <AiOutlineUser className="text-6xl lg:text-7xl mt-3 group-hover:mt-2 transition-all rounded-full" />
            </div>
          )}
          <div
            className={`
              ${userStatus ? "bg-gray-400" : "bg-green-400"} ${
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
          <p className="line-clamp-1 text-gray-700 break-words max-w-56">
            {room?.messageList?.length
              ? type === "text"
                ? content
                : type
              : "Nothing yet"}
          </p>
          {/* last message date */}
          <p className="absolute top-2 right-2 text-sm text-gray-700">
            {createdAt ? lastMessageDate : ""}
          </p>
        </div>
      </div>
      {/* context menu */}
      <div
        style={{
          top: position.y,
          left: position.x / 1.7,
        }}
        ref={contextMenuRef}
        className={`${
          contextMenu ? "opacity-100 visible" : "opacity-0 invisible"
        } fixed rounded-md transition-all overflow-hidden z-50 top-24 flex flex-col`}
      >
        <button
          onClick={() => {
            const findedRoom = rooms.find(
              ({ roomId }) => roomId === room.roomId
            );
            setSelectedRoom(findedRoom);
            setContextMenu(false);
          }}
          className="p-4 bg-gray-100 hover:bg-gray-200 transition-all flex items-center gap-x-2"
        >
          <CiChat1 className="text-2xl" />
          open Chat
        </button>
        <button
          onClick={() => {
            setShowAlert(true);
            setContextMenu(false);
          }}
          className="p-4 bg-gray-100 hover:bg-gray-200 transition-all flex items-center gap-x-2 text-red-500"
        >
          <AiOutlineDelete className="text-2xl" />
          delete chat
        </button>
      </div>
      {/* warning alert on delete chat room */}
      <div
        className={`${
          showAlert ? "opacity-100 visible" : "opacity-0 invisible"
        } fixed inset-0 z-50 flex justify-center items-center transition-all`}
      >
        <TextAlert
          action="Delete Chat Room"
          closeModal={() => setShowAlert(false)}
          message="Are You Sure You Want To Delete This Chat?, you cannot access messages again..."
          submitCallBack={() => deleteRoom(room.roomId, rooms)}
        />
        <div
          onClick={() => setShowAlert(false)}
          className="absolute inset-0 bg-gray-950/50 -z-10"
        ></div>
      </div>
    </>
  );
};

export default ChatColumn;
