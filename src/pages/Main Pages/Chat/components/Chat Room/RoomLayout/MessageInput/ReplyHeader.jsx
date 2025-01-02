import { MdModeEdit } from "react-icons/md";
import { VscReply } from "react-icons/vsc";
import { useRoomsData } from "../../../RoomsContext";
import { AiOutlineClose } from "react-icons/ai";

function ReplyHeader() {
  const {
    setSelectedMessage,
    selectedMessage,
    messageMode,
    setMode,
    selectedRoom,
  } = useRoomsData();
  const { first_name, last_name, business_name, userType } =
    selectedRoom?.receiver || {};

  return (
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
  );
}

export default ReplyHeader;
