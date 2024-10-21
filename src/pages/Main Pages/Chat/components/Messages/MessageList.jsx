import { useEffect, useRef, useState } from "react";
import { getDatabase, ref, update } from "firebase/database";
import MessageLayout from "./MessageRow/MessageLayout";
import { useRoomsData } from "../RoomsContext";
import { useSelector } from "react-redux";
import TextAlert from "../../../../../common/UI elements/Alerts/TextAlert";

const MessageList = () => {
  // context menu state
  const [contextMenu, setContextMenu] = useState(null);
  // warning alert state
  const [{ alertIsShow, messageId }, setAlert] = useState({
    alertIsShow: "",
    messageId: null,
  });
  // message wrapper ref
  const messagesWrapperRef = useRef();
  const { selectedRoom, messageMode } = useRoomsData();
  const { userId } = useSelector((state) => state.userData);

  // disable scroll on display context menu
  useEffect(() => {
    if (messagesWrapperRef.current) {
      if (contextMenu) messagesWrapperRef.current.style.overflow = "hidden";
      else messagesWrapperRef.current.style.overflow = "auto";
    }
  }, [contextMenu]);

  // on delete message
  function onDeleteMessage(id) {
    if (!alertIsShow) {
      setAlert({ messageId: id, alertIsShow: true });
    } else {
      // ref to selectedRoom
      const db = getDatabase();
      const roomsRef = ref(db, `rooms/${selectedRoom.roomId}`);
      // update message list
      update(roomsRef, {
        messageList: [
          ...selectedRoom.messageList.filter(({ uiid }) => uiid !== messageId),
        ],
      });
      // close alert
      setAlert({ messageId: null, alertIsShow: false });
    }
  }

  // if (!selectedRoom?.messageList?.length)
  //   return (
  //     <div className="bg-gray-300 w-full flex justify-center items-center flex-1">
  //       <h4 className="px-4 py-2 bg-gray-200 rounded-md font-semibold">
  //         Nothing yet
  //       </h4>
  //     </div>
  //   );

  // if (selectedRoom?.messageList?.length)
  return (
    <>
      {/* main message's list */}
      <div
        ref={messagesWrapperRef}
        onContextMenu={(e) => e.preventDefault()}
        className={`${
          messageMode ? "pb-[9.25rem]" : "pb-[4.25rem]"
        } flex relative flex-col gap-y-2 w-full overflow-auto px-2 lg:!pb-1 pt-20 lg:pt-2 bg-gray-300 flex-1 styled-scroll-bar`}
      >
        {/* {selectedRoom.messageList.map(
            (message, index) =>
              message?.visibleTo?.includes(userId) && (
                <MessageLayout
                  message={message}
                  key={index}
                  setContextMenu={setContextMenu}
                  contextMenu={contextMenu}
                  onDeleteMessage={onDeleteMessage}
                />
              )
          )} */}
      </div>
      {/* warning alert */}
      <div
        className={`${
          alertIsShow ? "opacity-100 visible" : "opacity-0 invisible"
        } fixed inset-0 z-50 flex justify-center items-center transition-all`}
      >
        <TextAlert
          action="Delete Message"
          closeModal={() => setAlert({ messageId: null, alertIsShow: false })}
          message="Do you want to delete this message ?"
          submitCallBack={() => onDeleteMessage()}
          sureTitle="Delete"
        />
        <div
          onClick={() => setAlert({ alertIsShow: false, messageId: null })}
          className="absolute inset-0 bg-gray-950/50 backdrop-blur-sm -z-10"
        ></div>
      </div>
    </>
  );
};

export default MessageList;
