import { useEffect, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { getDatabase, ref, update, serverTimestamp } from "firebase/database";
import { useSelector } from "react-redux";
import { findIndex } from "lodash";
import { generateId } from "constants";
import { useRoomsData } from "../../RoomsContext";
import ReplyHeader from "./MessageInput/ReplyHeader";
import ShareContentMenu from "./MessageInput/ShareContentMenu";

function MessageInput() {
  // message content state
  const [message, setMessage] = useState("");
  // text area rows state
  const [inputRows, setRows] = useState(1);
  // necessary data
  const { userId } = useSelector((state) => state.userData);
  const {
    setSelectedMessage,
    selectedMessage,
    messageMode,
    setMode,
    selectedRoom,
  } = useRoomsData();

  // set message input rows
  useEffect(() => {
    const messageLength = message?.length;

    const rowLengths = [180, 260, 350, 440];
    setRows(
      findIndex(rowLengths, (length) => messageLength <= length) + 1 || 10
    );
  }, [message]);

  // change message content on reply mode
  useEffect(() => {
    if (messageMode === "edit") {
      setMessage(selectedMessage?.content);
    }
  }, [messageMode]);

  // send message | reply handler
  const sendMessage = () => {
    // message data
    const messageData = {
      content: message,
      senderId: userId,
      createdAt: serverTimestamp(),
      uiid: generateId(userId),
      replyTo: messageMode === "reply" ? selectedMessage.uiid : null,
      type: "text",
      visibleTo: [userId, selectedRoom.reciver.reciverId],
    };
    // ref to selectedRoom
    const db = getDatabase();
    const roomsRef = ref(db, `rooms/${selectedRoom.roomId}`);
    // update message list
    update(roomsRef, {
      messageList: [...(selectedRoom?.messageList || []), messageData],
      members: [userId, selectedRoom.reciver.reciverId],
    });
    // reset states
    setSelectedMessage(null);
    setMode(null);
    setMessage("");
  };

  // edit message handler
  const editMessage = () => {
    // take a copy from messages list
    const listClone = [...selectedRoom?.messageList];
    // find selected message index
    const messageindex = listClone.findIndex(
      ({ uiid }) => uiid === selectedMessage.uiid
    );
    // update copy list
    listClone[messageindex] = {
      ...listClone[messageindex],
      content: message,
      isEdited: true,
    };
    // ref to selectedRoom
    const db = getDatabase();
    const roomsRef = ref(db, `rooms/${selectedRoom.roomId}`);
    // update message list
    update(roomsRef, {
      messageList: listClone,
    });
    // reset states
    setSelectedMessage(null);
    setMode(null);
    setMessage("");
  };

  return (
    <div
      id="input_message"
      className={`${
        messageMode && "min-h-36 flex flex-col"
      } w-full transition-all`}
    >
      {/* reply | edit header */}
      <ReplyHeader />
      {/* main input & context menu */}
      <div className="w-full bg-gray-50 px-4 pb-2 pt-1 flex items-end justify-between relative">
        {/* share content menu (share other type messages) */}
        <ShareContentMenu />
        {/* main input (send text type message) */}
        <textarea
          rows={inputRows}
          value={message}
          onKeyDown={(e) => {
            if (e.key === "Enter" && message.length) {
              e.preventDefault();
              messageMode === "edit" ? editMessage() : sendMessage();
            }
          }}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          type="text"
          placeholder="write new message"
          className="px-4 py-2.5 resize-none transition-all min-h-12 flex-1 outline-none text-lg text-wrap bg-transparent styled-scroll-bar"
        />
        {/* send message btn */}
        <button
          disabled={!message.length}
          onClick={() =>
            messageMode === "edit" ? editMessage() : sendMessage()
          }
          className="text-4xl disabled:text-primary-950 disabled:opacity-50 text-primary-500 hover:text-primary-700 p-2 rounded-md"
        >
          <AiOutlineSend />
        </button>
      </div>
    </div>
  );
}

export default MessageInput;
