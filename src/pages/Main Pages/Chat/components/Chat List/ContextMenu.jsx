import { useRef, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { CiChat1 } from "react-icons/ci";
import useOutSideClick from "hooks/UseOutsideClick";
import { useRoomsData } from "../RoomsContext";
import TextAlert from "UI/Alerts/TextAlert";

function ContextMenu({
  deleteRoom,
  room,
  position,
  setContextMenu,
  contextMenu,
}) {
  const contextMenuRef = useRef();
  useOutSideClick(contextMenuRef, () => setContextMenu(false)); // close context menu on outside click
  const { setSelectedRoom, rooms } = useRoomsData();
  // warning alert state
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      {/* context menu */}
      <div
        style={{
          top: position.y || 0,
          left: position.x / 1.7 || 0,
        }}
        ref={contextMenuRef}
        className={`${
          contextMenu ? "opacity-100 visible" : "opacity-0 invisible"
        } fixed rounded-md transition-all overflow-hidden z-50 top-24 flex flex-col`}
      >
        <button
          onClick={() => {
            const findedRoom = rooms.find(
              ({ roomId }) => roomId === room.roomId
            );
            setSelectedRoom(findedRoom);
            setContextMenu(false);
          }}
          className="p-4 bg-gray-100 hover:bg-gray-200 transition-all flex items-center gap-x-2"
        >
          <CiChat1 className="text-2xl" />
          open Chat
        </button>
        <button
          onClick={() => {
            setShowAlert(true);
            setContextMenu(false);
          }}
          className="p-4 bg-gray-100 hover:bg-gray-200 transition-all flex items-center gap-x-2 text-red-500"
        >
          <AiOutlineDelete className="text-2xl" />
          delete chat
        </button>
      </div>
      {/* warning alert on delete chat room */}
      <div
        className={`${
          showAlert ? "opacity-100 visible" : "opacity-0 invisible"
        } fixed inset-0 z-50 flex justify-center items-center transition-all`}
      >
        <TextAlert
          action="Delete Chat Room"
          closeModal={() => setShowAlert(false)}
          message="Are You Sure You Want To Delete This Chat?, you cannot access messages again..."
          submitCallBack={() => deleteRoom(room.roomId, rooms)}
        />
        <div
          onClick={() => setShowAlert(false)}
          className="absolute inset-0 bg-gray-950/50 -z-10"
        ></div>
      </div>
    </>
  );
}

export default ContextMenu;
