import { useEffect, useRef, useState } from "react";
import { useRoomsData } from "../../RoomsContext";
import { useSelector } from "react-redux";
import useOutSideClick from "hooks/UseOutsideClick";
import OrderTypeMessage from "./OrderTypeMessage";
import LocationTypeMessage from "./LocationTypeMessage";
import ProductTypeMessage from "./ProductTypeMessage";
import toast from "react-hot-toast";

function MessageLayout({
  message,
  setContextMenu,
  contextMenu,
  onDeleteMessage,
}) {
  // last || selected message ref
  const lastMessageRef = useRef();
  // context menu ref
  const contextMenuRef = useRef();
  useOutSideClick(contextMenuRef, () => setContextMenu(null));
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // replied message data
  const [replyTo, setReplyTo] = useState(null);
  // necessary data
  const { selectedMessage, setSelectedMessage, setMode, selectedRoom } =
    useRoomsData();
  const { userId } = useSelector((state) => state.userData);
  const isOwner = (senderId) => senderId === userId;

  useEffect(() => {
    if (message?.replyTo) {
      const repliedMessage = selectedRoom.messageList?.find(
        ({ uiid }) => uiid === message.replyTo
      );

      setReplyTo(repliedMessage);
    }
  }, [message]);

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
  }, [selectedMessage]);

  // display hour & minute of message
  function createMessageTime(stamp) {
    const time = new Date(stamp);

    return time
      .toLocaleDateString("en-US", {
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
      .split(",")[1];
  }

  return (
    <div
      className={`${
        isOwner(message.senderId)
          ? "self-end bg-slate-200"
          : "self-start bg-gray-50 items-end"
      } ${
        selectedMessage?.uiid === message.uiid &&
        "!bg-gray-900 text-gray-50 focused-message_shadow"
      } px-3 py-1.5 w-fit select-none rounded-md flex flex-col items-end gap-y-1 transition-all cursor-pointer max-w-[95%] lg:max-w-[60%]`}
    >
      {/* main message */}
      <div
        ref={lastMessageRef}
        id={message.uiid}
        onContextMenu={(e) => {
          setPosition({ x: e.clientX, y: e.clientY });

          e.preventDefault();
          setContextMenu(message.uiid);
        }}
      >
        {/* reply header */}
        <div
          onClick={() => {
            setSelectedMessage(replyTo);
            setTimeout(() => {
              setSelectedMessage(null);
            }, 1500);
          }}
          className={`${
            replyTo && "!flex"
          } hidden h-16 w-full bg-primary-100/50 flex-col mb-2 mt-1 justify-evenly text-gray-900 rounded-lg border-l-4 border-primary-400/50 px-2 py-1`}
        >
          <h4 className="text-lg font-bold">Reply To</h4>
          <p className="line-clamp-1 text-sm">
            {replyTo?.type === "text"
              ? replyTo?.content.slice(0, replyTo?.content?.length * 10)
              : `${replyTo?.type} message`}
          </p>
        </div>
        {/* message content */}
        {message.type === "text" ? (
          <p className="text-start w-full break-words max-w-96">
            {message.content}
          </p>
        ) : message.type === "order" ? (
          <OrderTypeMessage message={message} />
        ) : message.type === "location" ? (
          <LocationTypeMessage message={message} />
        ) : (
          <ProductTypeMessage message={message} />
        )}
        {/* message info (date & edit sign) */}
        <div className="flex items-center justify-end gap-x-2 w-full">
          <p className="text-xs opacity-80 order-2">
            {createMessageTime(message.createdAt)}
          </p>
          {message?.isEdited && <p className="text-xs opacity-70">Edited</p>}
        </div>
      </div>
      {/* context menu */}
      <div
        ref={contextMenuRef}
        style={{
          top: isOwner(message.senderId) ? position.y - 100 : position.y,
          left: isOwner(message.senderId) ? position.x - 100 : position.x,
        }}
        className={`${
          contextMenu === message.uiid
            ? "visible opacity-100"
            : "invisible opacity-0"
        }
          w-28 h-fit fixed z-50 bg-gray-100 bottom-0 flex flex-col rounded-md transition-all`}
      >
        <button
          onClick={() => {
            setSelectedMessage(message);
            setMode("reply");
          }}
          className="px-4 py-2 text-gray-950 bg-gray-100 rounded-md hover:bg-gray-950 hover:text-gray-50 transition-all border-b border-b-gray-300"
        >
          reply
        </button>
        <button
          disabled={message?.type !== "text"}
          onClick={() => {
            toast("not developed yet:)");
          }}
          className="disabled:hidden px-4 py-2 text-gray-950 bg-gray-100 rounded-md hover:bg-gray-950 hover:text-gray-50 transition-all border-b border-b-gray-300"
        >
          copy
        </button>
        <button
          onClick={() => {
            setSelectedMessage(message);
            setMode("edit");
          }}
          className="px-4 py-2 text-gray-950 disabled:hidden bg-gray-100 rounded-md hover:bg-gray-950 hover:text-gray-50 transition-all border-b border-b-gray-300"
          disabled={!isOwner(message.senderId) || message.type !== "text"}
        >
          edit
        </button>
        <button
          onClick={() => onDeleteMessage(message.uiid)}
          className="px-4 py-2 text-gray-950 bg-gray-100 rounded-md hover:bg-gray-950 hover:text-gray-50 transition-all disabled:hidden"
          disabled={!isOwner(message.senderId)}
        >
          delete
        </button>
      </div>
    </div>
  );
}

export default MessageLayout;
