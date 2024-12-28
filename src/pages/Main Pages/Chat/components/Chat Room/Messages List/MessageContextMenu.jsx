import { useEffect, useRef } from "react";
import useOutSideClick from "../../../../../../common/hooks/UseOutsideClick";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useRoomsData } from "../../RoomsContext";

function MessageContextMenu({
  setContextMenu,
  contextMenu,
  message,
  onDeleteMessage,
  position,
}) {
  // context menu ref
  const contextMenuRef = useRef();
  useOutSideClick(contextMenuRef, () => setContextMenu(null));
  const { userId } = useSelector((state) => state.userData);
  const isOwner = (senderId) => senderId === userId;
  const { setSelectedMessage, setMode } = useRoomsData();

  useEffect(() => {}, [message]);

  // copy text message to clipboard
  const copyMessage = async () => {
    try {
      const input = document.createElement("input");
      input.value = message.content;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      toast.success("copied to clipboard");
    } catch (err) {
      toast.remove();
      toast.error("Failed to copy message");
    }
  };

  return (
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
          setContextMenu(false);
        }}
        className="px-4 py-2 text-gray-950 bg-gray-100 rounded-md hover:bg-gray-950 hover:text-gray-50 transition-all border-b border-b-gray-300"
      >
        reply
      </button>
      <button
        disabled={message?.type !== "text"}
        onClick={() => {
          copyMessage();
          setContextMenu(false);
        }}
        className="disabled:hidden px-4 py-2 text-gray-950 bg-gray-100 rounded-md hover:bg-gray-950 hover:text-gray-50 transition-all border-b border-b-gray-300"
      >
        copy
      </button>
      <button
        onClick={() => {
          setSelectedMessage(message);
          setMode("edit");
          setContextMenu(false);
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
  );
}

export default MessageContextMenu;
