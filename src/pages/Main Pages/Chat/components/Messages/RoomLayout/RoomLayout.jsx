import MessageInput from "./MessageInput";
import Navbar from "./Navbar";
import { useRoomsData } from "../../RoomsContext";
import { useEffect, useRef, useState } from "react";
import MessageList from "./MessageList";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import TextAlert from "UI/Alerts/TextAlert";
import {
  useResizeListener,
  useSearchBar,
  useTouchHandlers,
} from "./RoomLayout.hooks";

function RoomLayout({ deleteRoom }) {
  // ref to navbar
  const navRef = useRef();
  // room data
  const {
    selectedRoom,
    setSelectedMessage,
    messageMode,
    setSelectedRoom,
    rooms,
  } = useRoomsData();
  // search bar data & hook
  const {
    searchBar, // main state (query & bar is show)
    results, // results on search bar actions
    selectedIndex, // selected message index
    updateSearchBar, // update search bar
    scrollToMessage, // scroll to selected message
  } = useSearchBar(selectedRoom);
  const roomHeight = useResizeListener(); // room height
  // draggable element opacity and rotation
  const [{ opacity, rotate }, setEl] = useState({
    opacity: 0,
    rotate: 0,
  });
  useTouchHandlers(selectedRoom, setSelectedRoom, setEl, navRef); // draggable element main functionality
  // warning alert state
  const [showAlert, setShowAlert] = useState(false);

  // close search bar on change room
  useEffect(() => {
    updateSearchBar({ searchQuery: "", barIsShow: false });
  }, [selectedRoom]);

  // disable room search bar on replieng
  useEffect(() => {
    if (messageMode) {
      updateSearchBar({ barIsShow: false, searchQuery: "" });
    }
  }, [messageMode]);

  // scroll to navigated message based on selected index
  useEffect(() => {
    if (searchBar.barIsShow) setSelectedMessage(results[selectedIndex]);
  }, [selectedIndex, results]);

  // no room selected screen
  if (!selectedRoom)
    return (
      <div className="hidden w-3/4 bg-slate-200 lg:flex items-center justify-center relative">
        <p className="text-lg font-bold bg-gray-50/50 backdrop-blur-sm px-4 py-2 rounded-xl cursor-pointer">
          Please Select A Chat First...
        </p>
      </div>
    );

  // main room layout
  if (selectedRoom)
    return (
      <div
        style={{ height: roomHeight }}
        className={`${
          selectedRoom ? "w-full flex" : "hid den"
        } lg:! flex flex-col lg:w-3/4 !w-full h-full bg-slate-200 items-center justify-center relative`}
      >
        {/* user info nav */}
        <div ref={navRef} className="w-full">
          <Navbar
            {...{
              searchBar,
              setSearchBar: updateSearchBar,
              deleteRoom,
              setShowAlert,
            }}
          />
        </div>
        {/* messages list */}
        <MessageList />
        {/* search navigator || send message input */}
        {searchBar.barIsShow ? (
          <div className="w-full h-16 bg-gray-50 flex items-center px-4 py-2 relative opacity-80 hover:opacity-100 transition-all lg:opacity-100">
            <h4 className="text-lg font-bold">
              {searchBar.searchQuery?.length
                ? selectedIndex
                  ? `${selectedIndex + 1} of ${results?.length}`
                  : `${results?.length} Messages Find`
                : `Search Between ${
                    selectedRoom.messageList?.length
                      ? selectedRoom.messageList?.length
                      : 0
                  } Messages`}
            </h4>

            <div
              className={`${
                results.length <= 0 && "hidden"
              } flex flex-col absolute bg-gray-50/40 rounded-3xl backdrop-blur-sm right-8 gap-y-2 -top-28`}
            >
              <button
                disabled={selectedIndex === results.length - 1}
                onClick={() => scrollToMessage("up")}
                className="p-2.5 text-2xl rounded-full bg-gray-100 -rotate-90 disabled:opacity-50 transition-all"
              >
                <AiOutlineRight />
              </button>
              <button
                disabled={!selectedIndex}
                onClick={() => scrollToMessage("down")}
                className="p-2.5 text-2xl rounded-full bg-gray-100 rotate-90 disabled:opacity-50 transition-all"
              >
                <AiOutlineRight />
              </button>
            </div>
          </div>
        ) : (
          <MessageInput />
        )}
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
            action={`Delete chat with ${selectedRoom?.reciver?.first_name} ?`}
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
