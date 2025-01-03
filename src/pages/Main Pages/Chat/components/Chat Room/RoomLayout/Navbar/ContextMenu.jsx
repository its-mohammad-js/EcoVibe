import {
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineInfoCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";
import useOutSideClick from "../../../../../../../common/hooks/UseOutsideClick";
import { useRef } from "react";
import { useRoomsData } from "../../../RoomsContext";

function ContextMenu(props) {
  const {
    setContextMenu,
    contextMenu,
    setShowAlert,
    setUserDetails,
    setBarIsShow,
  } = props;
  const contextMenuRef = useRef();
  useOutSideClick(contextMenuRef, () =>
    setContextMenu(() => setContextMenu(false))
  );
  const { setSelectedRoom } = useRoomsData();

  return (
    <div
      ref={contextMenuRef}
      className="flex items-center gap-x-2 px-0.5 pt-1.5"
    >
      <div className="relative">
        <button
          onClick={() => setContextMenu(!contextMenu)}
          className="text-3xl"
        >
          <HiDotsVertical />
        </button>

        <div
          className={`${
            contextMenu ? "opacity-100 visible" : "opacity-0 invisible"
          } absolute transition-all w-60 overflow-hidden bg-gray-50 z-50 right-0 shadow-2xl rounded-sm flex flex-col`}
        >
          <button
            onClick={() => {
              setContextMenu(false);
              setBarIsShow(true);
            }}
            className="px-4 py-4 text-lg hover:bg-gray-200 transition-all flex items-center gap-x-3"
          >
            <AiOutlineSearch className="text-2xl" /> Search bar
          </button>
          <button
            onClick={() => {
              setUserDetails(true);
              setContextMenu(false);
            }}
            className="px-4 py-4 text-lg hover:bg-gray-200 transition-all flex items-center gap-x-3"
          >
            <AiOutlineInfoCircle className="text-2xl" /> User info
          </button>
          <button
            onClick={() => {
              setSelectedRoom(null);
              setContextMenu(false);
            }}
            className="px-4 py-4 text-lg hover:bg-gray-200 transition-all flex items-center gap-x-3"
          >
            <AiOutlineClose className="text-2xl" />
            Close chat
          </button>
          <button
            onClick={() => {
              setShowAlert(true);
              setContextMenu(false);
            }}
            className="px-4 py-4 text-lg text-red-600 hover:bg-gray-200 transition-all flex items-center gap-x-3"
          >
            <AiOutlineDelete className="text-2xl " />
            Delete chat
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContextMenu;
