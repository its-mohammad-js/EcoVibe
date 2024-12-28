import { useEffect, useRef, useState } from "react";
import {
  getDatabase,
  ref,
  serverTimestamp,
  set,
  update,
} from "firebase/database";
import MessageLayout from "../Messages List/MessageLayout";
import { useSelector } from "react-redux";
import TextAlert from "UI/Alerts/TextAlert";
import { useRoomsData } from "../../RoomsContext";

const MessageList = () => {
  // context menu state
  const [contextMenu, setContextMenu] = useState(null);
  // warning alert state
  const [{ alertIsShow, messageId }, setAlert] = useState({
    alertIsShow: "",
    messageId: null,
  });
  const [lastRoom, setLastRoom] = useState(null);
  const { selectedRoom } = useRoomsData();
  const { userId } = useSelector((state) => state.userData);
  const messagesWrapperRef = useRef();

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

  // update last room
  useEffect(() => {
    if (selectedRoom) {
      setLastRoom(selectedRoom);
    }
  }, []);

  // set last seen
  useEffect(() => {
    if (!lastRoom) {
      return;
    }
    // db ref
    const db = getDatabase();
    const roomsRef = ref(db, `rooms/${lastRoom.roomId}/${userId}/last_seen`);
    // set user status online
    if (selectedRoom) {
      set(roomsRef, {
        date: serverTimestamp(),
      });

      const interval = setInterval(() => {
        set(roomsRef, {
          date: serverTimestamp(),
        });
      }, 45000); // Adjust interval as needed

      return () => {
        update(roomsRef, {
          date: serverTimestamp(),
          offline: true,
        });
        clearInterval(interval);
      };
    }
    // set user status offline
    return () => {
      update(roomsRef, {
        date: serverTimestamp(),
        offline: true,
      });
    };
  }, [lastRoom]);

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
      <>
        {/* main message's list */}
        <div
          ref={messagesWrapperRef}
          onContextMenu={(e) => e.preventDefault()}
          className={`flex relative flex-col gap-y-2 w-full overflow-auto px-2 pb-1 pt-2 bg-gray-300 flex-1 styled-scroll-bar`}
        >
          {selectedRoom.messageList.map(
            (message, index) =>
              message?.visibleTo?.includes(userId) && (
                <MessageLayout
                  key={index}
                  message={message}
                  onDeleteMessage={onDeleteMessage}
                  contextMenu={contextMenu}
                  setContextMenu={setContextMenu}
                />
              )
          )}
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
