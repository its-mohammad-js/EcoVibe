import Navbar from "./Navbar/Navbar";
import { useRoomsData } from "../../RoomsContext";
import { useRef, useState } from "react";
import MessageList from "./MessageList";
import { AiOutlineDown } from "react-icons/ai";
import TextAlert from "UI/Alerts/TextAlert";
import MessageInput from "./MessageInput/MessageInput";
import { useTouchHandlers } from "../../../hooks/UseRoomInteraction";
import { useResizeListener } from "hooks/useResizeListener";

function RoomLayout({ deleteRoom }) {
  // ref to navbar
  const navRef = useRef();
  // room data
  const { selectedRoom, setSelectedRoom, rooms } = useRoomsData();
  const { appHeight } = useResizeListener();

  // draggable element opacity and rotation
  const [{ opacity, rotate }, setEl] = useState({
    opacity: 0,
    rotate: 0,
  });
  useTouchHandlers(selectedRoom, setSelectedRoom, setEl, navRef); // draggable element main functionality
  // warning alert state
  const [showAlert, setShowAlert] = useState(false);

  // no room selected screen
  if (!selectedRoom)
    return (
      <div className="hidden col-span-9 col-start-4 bg-slate-200 lg:flex items-center justify-center relative">
        <p className="text-lg font-bold bg-gray-50/50 backdrop-blur-sm px-4 py-2 rounded-xl cursor-pointer">
          Please Select A Chat First...
        </p>
      </div>
    );

  // main room layout
  if (selectedRoom)
    return (
      <div
        style={{
          height: appHeight,
        }}
        className={`${
          selectedRoom ? "col-span-9 col-start-4 flex" : "hidden"
        } lg:! flex flex-col lg:w-3/4 !w-full h-full bg-slate-200 items-center justify-center relative`}
      >
        {/* user info nav */}
        <div ref={navRef} className="w-full">
          <Navbar {...{ deleteRoom, setShowAlert }} />
        </div>
        {/* messages list */}
        <MessageList />
        {/* send message input */}
        <MessageInput />
        {/* Draggable element to return to the chat list.  */}
        {/* This element is only visible on mobile devices and when the virtual keyboard is active. */}
        <div
          style={{
            opacity: opacity,
          }}
          className="absolute w-full h-32 -bottom-32 z-50 transition-all flex items-center justify-center gap-x-2"
        >
          <p
            style={{
              rotate: `${rotate}deg`,
            }}
            className="transition-all text-3xl rotate-180 duration-700"
          >
            <AiOutlineDown />
          </p>
          <h4 className="text-xl font-bold">Return to Chats</h4>
        </div>
        {/* warning alert on delete chat room */}
        <div
          className={`${
            showAlert ? "opacity-100 visible" : "opacity-0 invisible"
          } fixed inset-0 z-50 flex justify-center items-center transition-all`}
        >
          <TextAlert
            action={`Delete chat with ${selectedRoom?.receiver?.first_name} ?`}
            closeModal={() => setShowAlert(false)}
            message="Are You Sure You Want To Delete This Chat?, you cannot access messages again..."
            submitCallBack={() => deleteRoom(selectedRoom.roomId, rooms)}
          />
          <div
            onClick={() => setShowAlert(false)}
            className="absolute inset-0 bg-gray-950/50 -z-10"
          ></div>
        </div>
      </div>
    );
}

export default RoomLayout;
