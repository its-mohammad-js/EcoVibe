import MessageInput from "./MessageInput";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { useRoomsData } from "../RoomsContext";
import { useEffect, useRef, useState } from "react";
import { getDatabase, ref, update } from "firebase/database";

function Messages() {
  const { selectedRoom } = useRoomsData();

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
        className={`${
          selectedRoom ? "w-full flex" : "hidden"
        } lg:!flex flex-col lg:w-3/4 bg-slate-200 items-center justify-center relative h-screen`}
      >
        <Navbar selectedRoom={selectedRoom} />
        <MessageList selectedRoom={selectedRoom} />
        <MessageInput selectedRoom={selectedRoom} />
      </div>
    );
}

export default Messages;

const MessageList = ({ selectedRoom }) => {
  const { userId } = useSelector((state) => state.userData);
  const isOwner = (senderId) => senderId === userId;
  const [lastRoom, setLastRoom] = useState(null);
  const lastMessageRef = useRef();
  // necessary data
  const { selectedMessage, setSelectedMessage } = useRoomsData();

  // scroll to selected / last message
  useEffect(() => {
    // focus and scroll to selected message
    if (selectedMessage) {
      const selectedMessageEl = document.getElementById(
        `${selectedMessage.uiid}`
      );

      lastMessageRef.current = selectedMessageEl;
    }
    // scroll to last / selected message
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
    // reset selected message
    setTimeout(() => {
      setSelectedMessage(null);
    }, 2000);
  }, [selectedRoom.messageList, selectedMessage]);

  useEffect(() => {
    if (selectedRoom) {
      setLastRoom(selectedRoom);
    }
  }, []);

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

  // display hour & minute of message
  function createMessageTime(stamp) {
    const time = new Date(stamp);

    return `${time.getHours()}:${time.getMinutes()}`;
  }

  if (!selectedRoom?.messageList?.length)
    return (
      <div className="bg-gray-300 w-full flex justify-center items-center flex-1">
        <h4 className="px-4 py-2 bg-gray-200 rounded-md font-semibold">
          Nothing yet
        </h4>
      </div>
    );

  if (selectedRoom?.messageList?.length)
    return (
      <div className="bg-gray-300 w-full overflow-auto  styled-scroll-bar flex-1 px-2 pt-4 pb-2">
        <div className="inline-flex flex-col h-full justify-end gap-y-2 w-full">
          {selectedRoom.messageList.map(
            ({ content, senderId, createdAt, uiid }, index) => (
              <div
                ref={lastMessageRef}
                id={uiid}
                key={index}
                className={`${
                  isOwner(senderId)
                    ? "self-end bg-slate-200"
                    : "self-start bg-gray-50 items-end"
                } ${
                  selectedMessage?.uiid === uiid &&
                  "!bg-gray-900 text-gray-50 focused-message_shadow"
                } px-3 py-1.5 w-fit rounded-md relative flex flex-col gap-y-1 transition-all`}
              >
                <p>{content}</p>
                <p className="text-xs opacity-80">
                  {createMessageTime(createdAt)}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    );
};
