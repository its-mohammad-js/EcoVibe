import MessageInput from "./MessageInput";
import Navbar from "./Navbar";
import { useRoomsData } from "../RoomsContext";
import { useEffect, useRef, useState } from "react";
import MessageList from "./MessageList";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import TextAlert from "../../../../../common/UI elements/Alerts/TextAlert";
import { getDatabase, ref, serverTimestamp, update } from "firebase/database";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

function MessagesRoom({ deleteRoom }) {
  // search bar state
  const [searchBar, setSearchBar] = useState({
    barIsShow: false,
    searchQuery: "",
  });
  const {
    selectedRoom,
    setSelectedMessage,
    messageMode,
    setSelectedRoom,
    rooms,
  } = useRoomsData();
  const [{ results, selectedIndex }, setResults] = useState({
    selectedIndex: 0,
    results: [],
  });
  // page height state
  const [roomHeight, setHeight] = useState(null);
  // draggable element opacity and rotation
  const [{ opacity, rotate }, setEl] = useState({
    opacity: 0,
    rotate: 0,
  });
  const [inputIsFocused, setFocus] = useState(false);
  // ref to navbar
  const navRef = useRef();
  // warning alert state
  const [showAlert, setShowAlert] = useState(false);
  const { userId } = useSelector((state) => state.userData);

  // set room height on resizes
  // note: This effect is used because of the unexpected screen resize behavior, particularly when focusing on the message input and the keyboard is displayed on Android devices.
  useEffect(() => {
    function getHeight() {
      setHeight(window.visualViewport.height);
    }

    window.addEventListener("resize", getHeight);

    return () => {
      window.removeEventListener("resize", getHeight);
    };
  }, []);

  // This effect handles the touch interactions for the draggable element.
  useEffect(() => {
    // Handle touchmove event
    const onMove = (e) => {
      // Get the first touch point
      const touch = e.touches[0];

      // Calculate the difference between viewport and screen Y coordinates
      const viewportTop = touch.pageY;
      const deltaY = touch.screenY - viewportTop;

      // Calculate opacity (of container) and rotation (of chevron) based on the deltaY
      const opacity = (viewportTop - touch.screenY).toFixed() / 50 + 1.5;
      const deg = (opacity * 85).toFixed();

      // If the deltaY is less than 87, update the element's state
      if (deltaY.toFixed() < 87) {
        setEl({
          opacity: opacity / 3,
          rotate: Math.min(Math.max(deg, 0), 180),
        });
      }
    };

    // Handle touchend event
    const onEnd = (e) => {
      // Get the changed touch point
      const touch = e.changedTouches[0];

      // Calculate the difference between viewport and screen Y coordinates
      const viewportTop = touch.pageY;
      const deltaY = touch.screenY - viewportTop;

      // If the deltaY is negative, clear the selected room
      if (deltaY.toFixed() < -20) {
        setSelectedRoom(null);
      }

      // If the deltaY is less than 87, scroll to the element and reset its state
      if (deltaY.toFixed() < 87) {
        navRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
        setEl({ rotate: 0, opacity: 0 });
      }
    };

    // Add event listeners
    window.addEventListener("touchmove", onMove);
    window.addEventListener("touchend", onEnd);

    // Clean up event listeners on close room
    if (!selectedRoom) {
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
    }

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
    };
  }, [inputIsFocused, selectedRoom]);

  // disable room search bar on replieng
  useEffect(() => {
    if (messageMode) {
      setSearchBar({ barIsShow: false, searchQuery: "" });
    }
  }, [messageMode]);

  // set results on search action
  useEffect(() => {
    // reset reeach bar states
    if (!searchBar.barIsShow) {
      setSearchBar({ barIsShow: false, searchQuery: "" });
    }
    // find messages based on search query
    if (searchBar.searchQuery.length > 0) {
      const filteredMessages = selectedRoom?.messageList.filter(
        ({ content, type }) =>
          type === "text" &&
          content.toLowerCase().includes(searchBar.searchQuery.toLowerCase())
      );
      setResults((prev) => ({ ...prev, results: filteredMessages.reverse() }));
    } else setResults((prev) => ({ ...prev, results: [] }));
  }, [searchBar.searchQuery, searchBar.barIsShow]);

  // scroll to navigated message based on selected index
  useEffect(() => {
    if (searchBar.barIsShow) setSelectedMessage(results[selectedIndex]);
  }, [selectedIndex, results]);

  // set selected message on navigate buttons
  function scrollToMessage(payload) {
    if (payload === "up") {
      setResults((prev) => ({
        ...prev,
        selectedIndex: prev.selectedIndex + 1,
      }));
    } else {
      setResults((prev) => ({
        ...prev,
        selectedIndex: prev.selectedIndex - 1,
      }));
    }
  }

  if (!selectedRoom)
    return (
      <div className="hidden w-3/4 bg-slate-200 lg:flex items-center justify-center relative">
        <p className="text-lg font-bold bg-gray-50/50 backdrop-blur-sm px-4 py-2 rounded-xl cursor-pointer">
          Please Select A Chat First...
        </p>
      </div>
    );

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
          <Navbar {...{ searchBar, setSearchBar, deleteRoom, setShowAlert }} />
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
                : `Search Between ${selectedRoom.messageList?.length} Messages`}
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
          <MessageInput setFocus={setFocus} />
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

export default MessagesRoom;
