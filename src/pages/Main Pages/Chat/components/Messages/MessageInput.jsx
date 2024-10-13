import { useEffect, useState } from "react";
import { AiOutlineMail, AiOutlineSend } from "react-icons/ai";
import { getDatabase, ref, update, serverTimestamp } from "firebase/database";
import { useSelector } from "react-redux";
import { findIndex } from "lodash";
import { generateId } from "constants";
import { useRoomsData } from "../RoomsContext";

function MessageInput({ selectedRoom }) {
  // message content state
  const [message, setMessage] = useState("");
  // text area rows state
  const [inputRows, setRows] = useState(1);
  // necessary data
  const { userId } = useSelector((state) => state.userData);
  const { setSelectedMessage } = useRoomsData();

  // set message input rows
  useEffect(() => {
    const messageLength = message?.length;

    const rowLengths = [180, 260, 350, 440];
    setRows(
      findIndex(rowLengths, (length) => messageLength <= length) + 1 || 10
    );
  }, [message]);

  const sendMessage = () => {
    // message data
    const messageData = {
      content: message,
      senderId: userId,
      createdAt: serverTimestamp(),
      uiid: generateId(userId),
    };
    // ref to selectedRoom
    const db = getDatabase();
    const roomsRef = ref(db, `rooms/${selectedRoom.roomId}`);
    // update message list
    update(roomsRef, {
      messageList: [...(selectedRoom?.messageList || []), messageData],
    });
    // reset states
    setSelectedMessage(null);
    setMessage("");
  };

  return (
    <div className="w-full bg-gray-50 px-4 pb-2 pt-1 flex items-end justify-between">
      <p className="text-4xl text-gray-900 py-2 rounded-md">
        <AiOutlineMail />
      </p>
      <textarea
        rows={inputRows}
        value={message}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            sendMessage();
          }
        }}
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        placeholder="write new message"
        className="px-4 py-2.5 resize-none transition-all min-h-12 flex-1 outline-none text-lg text-wrap bg-transparent styled-scroll-bar"
      />
      <button
        disabled={!message.length}
        onClick={sendMessage}
        className="text-4xl disabled:text-primary-950 disabled:opacity-50 text-primary-500 hover:text-primary-700 p-2 rounded-md"
      >
        <AiOutlineSend />
      </button>
    </div>
  );
}

export default MessageInput;
