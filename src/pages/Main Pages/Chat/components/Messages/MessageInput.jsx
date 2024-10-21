import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineSend } from "react-icons/ai";
import { getDatabase, ref, update, serverTimestamp } from "firebase/database";
import { useSelector } from "react-redux";
import { findIndex } from "lodash";
import { generateId } from "constants";
import { useRoomsData } from "../RoomsContext";
import { VscListOrdered, VscReply } from "react-icons/vsc";
import { MdModeEdit } from "react-icons/md";
import { FiPaperclip } from "react-icons/fi";
import { GoPin } from "react-icons/go";
import { BsBox } from "react-icons/bs";
import ShareContentModal from "../Modals/Share Content/ShareContentModal";
import toast from "react-hot-toast";

function MessageInput() {
  // message content state
  const [message, setMessage] = useState("");
  // text area rows state
  const [inputRows, setRows] = useState(1);
  // share content modal state
  const [{ modalIsShow, type }, setContentModal] = useState({
    modalIsShow: false,
    type: null,
  });
  // necessary data
  const { userId } = useSelector((state) => state.userData);
  const {
    setSelectedMessage,
    selectedMessage,
    messageMode,
    setMode,
    selectedRoom,
  } = useRoomsData();
  const { first_name, last_name, business_name, userType } =
    selectedRoom?.reciver || {};
  const testRef = useRef();
  const [virtualKeyboard, setVirtualKeyboard] = useState(false);

  // useEffect(() => {
  //   console.log(testRef.current);

  //   function disableTouch(e) {
  //     if (testRef.current && !testRef.current.contains(e.target)) {
  //       console.log("ok");
  //       e.preventDefault();
  //     }
  //   }

  //   window.addEventListener("touchmove", disableTouch);
  //   window.addEventListener("touchstart", disableTouch);
  //   window.addEventListener("touchend", disableTouch);

  //   return () => {
  //     window.removeEventListener("touchmove", disableTouch);
  //     window.removeEventListener("touchstart", disableTouch);
  //     window.removeEventListener("touchend", disableTouch);
  //   };
  // }, []);

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
      ref={testRef}
      className={`${
        messageMode && "min-h-36 flex flex-col"
      } w-full transition-all`}
    >
      {/* reply header */}
      <div className={`${!messageMode ? "hidden" : "block"} w-full h-20`}>
        <div className="size-full bg-gray-50 flex items-center gap-x-4 px-4 py-2">
          <p className="text-3xl">
            {messageMode === "reply" ? <VscReply /> : <MdModeEdit />}
          </p>
          <div className="w-full h-full flex flex-col justify-evenly">
            <h4 className="text-xl font-bold line-clamp-1">
              {messageMode === "edit"
                ? "Edit Message..."
                : `Reply To ${
                    userType === "customer"
                      ? first_name + " " + last_name
                      : business_name
                  } `}
              {`${selectedMessage?.type} Message`}
            </h4>

            <p className="text-sm line-clamp-2">
              {selectedMessage?.type === "text"
                ? selectedMessage?.content
                : selectedMessage?.type}
            </p>
          </div>
          <button
            onClick={() => {
              setSelectedMessage(null);
              setMode(null);
            }}
            className="text-3xl"
          >
            <AiOutlineClose />
          </button>
        </div>
      </div>
      {/* main input & context menu */}
      <div className="w-full bg-gray-50 px-4 pb-2 pt-1 flex items-end justify-between relative">
        {/* share content menu */}
        <>
          {/* share content btn */}
          <button className="text-3xl text-gray-900 py-2 rounded-md peer">
            <FiPaperclip />
          </button>
          {/* share content menu */}
          <div className="w-72 z-50 flex flex-col absolute bg-gray-100 -top-44 left-2 rounded-md opacity-0 invisible peer-hover:visible peer-hover:opacity-100 hover:visible hover:opacity-100 transition-all">
            <button
              onClick={() =>
                setContentModal({ modalIsShow: true, type: "order" })
              }
              className="px-4 py-4 hover:bg-gray-200 transition-all rounded-md flex items-center justify-start gap-x-2"
            >
              <span>
                <VscListOrdered />
              </span>
              <p>Share Order</p>
            </button>
            <button
              onClick={() =>
                setContentModal({ modalIsShow: true, type: "location" })
              }
              className="px-4 py-4 hover:bg-gray-200 transition-all rounded-md flex items-center justify-start gap-x-2"
            >
              <span>
                <GoPin />
              </span>
              <p>Send Location</p>
            </button>
            <button
              onClick={() =>
                setContentModal({ modalIsShow: true, type: "product" })
              }
              className="px-4 py-4 hover:bg-gray-200 transition-all rounded-md flex items-center justify-start gap-x-2"
            >
              <span>
                <BsBox />
              </span>
              <p>Send Product</p>
            </button>
          </div>
          {/* share content modals */}
          <div
            className={`${
              modalIsShow ? "opacity-100 visible" : "opacity-0 invisible"
            } fixed inset-0 z-50 flex items-center justify-center transition-all`}
          >
            <ShareContentModal
              type={type}
              onCloseModal={() =>
                setContentModal({ modalIsShow: false, type: null })
              }
            />
            <div
              onClick={() =>
                setContentModal({ modalIsShow: false, type: null })
              }
              className="absolute inset-0 bg-gray-950/50 -z-10"
            ></div>
          </div>
        </>
        {/* main input */}
        <textarea
          rows={inputRows}
          value={message}
          // onClick={(e) => e.preventDefault()}
          // onFocus={(e) => e.preventDefault()}
          // onTouchStart={(e) => e.preventDefault()}
          onTouchEnd={(e) => {
            setVirtualKeyboard(true);
            e.preventDefault();
          }}
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

      <div
        className={`${
          virtualKeyboard ? "block" : "hidden"
        } w-full h-44 bg-gray-100 flex items-center justify-center`}
      >
        virtual keyboard
      </div>
    </div>
  );
}

export default MessageInput;
