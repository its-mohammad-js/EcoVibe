import MessageInput from "./MessageInput";
import Navbar from "./Navbar";
import { useRoomsData } from "../RoomsContext";
import { useEffect, useRef, useState } from "react";
import MessageList from "./MessageList";
import { AiOutlineRight } from "react-icons/ai";
import useDisableScroll from "../../../../../common/hooks/UseDisableScroll";
import toast from "react-hot-toast";

function MessagesRoom({ deleteRoom }) {
  const [lastRoom, setLastRoom] = useState(null);
  // search bar state
  const [searchBar, setSearchBar] = useState({
    barIsShow: false,
    searchQuery: "",
  });
  const { selectedRoom, setSelectedMessage, messageMode } = useRoomsData();
  const [{ results, selectedIndex }, setResults] = useState({
    selectedIndex: 0,
    results: [],
  });
  // page height state
  const [roomHeight, setHeight] = useState(null);

  // set room height on resizes
  // note: This hook is used because of the unexpected screen resize behavior, particularly when focusing on the message input and the keyboard is displayed on Android devices.
  useEffect(() => {
    if (!roomHeight) {
      setHeight(window.visualViewport.height);
    }
    function getHeight() {
      setHeight(window.visualViewport.height);
    }

    window.addEventListener("resize", getHeight);

    return () => {
      window.removeEventListener("resize", getHeight);
    };
  }, []);

  // update last room
  useEffect(() => {
    if (selectedRoom) {
      setLastRoom(selectedRoom);
    }
  }, []);

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

  // set last seen
  // useEffect(() => {
  //   if (!lastRoom) {
  //     return;
  //   }

  //   const db = getDatabase();
  //   const roomsRef = ref(db, `rooms/${lastRoom.roomId}`);

  //   update(roomsRef, {
  //     [userId]: { ...lastRoom?.owner, status: "online" },
  //   });

  //   return () => {
  //     update(roomsRef, {
  //       [userId]: { ...lastRoom?.owner, status: "offline" },
  //     });
  //   };
  // }, [lastRoom]);

  // if (!selectedRoom)
  //   return (
  //     <div className="hidden w-3/4 bg-slate-200 lg:flex items-center justify-center relative">
  //       <p className="text-lg font-bold bg-gray-50/50 backdrop-blur-sm px-4 py-2 rounded-xl cursor-pointer">
  //         Please Select A Chat First...
  //       </p>
  //     </div>
  //   );

  // if (selectedRoom)
  return (
    <div
      style={{ height: roomHeight || window.visualViewport.height }}
      className={`${
        selectedRoom ? "w-full flex" : "hi dden"
      } lg:! flex flex-col lg:w-3/4 !w-full h-full bg-slate-400 items-center justify-between relative`}
    >
      <Navbar {...{ searchBar, setSearchBar, deleteRoom }} />

      <div className="bg-yellow-100 flex-1 w-full"></div>

      {/* <MessageList /> */}
      {searchBar.barIsShow ? (
        <div className="w-full h-16 bg-gray-50 flex items-center px-4 py-2 relative">
          <h4 className="text-lg font-bold">
            {searchBar.searchQuery?.length
              ? selectedIndex
                ? `${selectedIndex + 1} of ${results?.length}`
                : `${results?.length} Messages Find`
              : `Search Between ${selectedRoom.messageList?.length} Messages`}
          </h4>

          <div className="flex flex-col absolute bg-gray-50/40 rounded-3xl backdrop-blur-sm right-8 gap-y-2 -top-28">
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
    </div>
  );
}

export default MessagesRoom;
