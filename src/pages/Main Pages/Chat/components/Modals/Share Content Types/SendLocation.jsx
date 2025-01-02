import { getDatabase, ref, serverTimestamp, update } from "firebase/database";
import { Map, Marker } from "pigeon-maps";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { generateId } from "helpers";
import { useRoomsData } from "../../RoomsContext";

function SendLocation({ onCloseModal }) {
  const [location, setLocation] = useState(null); // location state
  const { userId } = useSelector((state) => state.userData); // current user id
  // chat room data
  const {
    messageMode,
    selectedMessage,
    setSelectedMessage,
    setMode,
    selectedRoom,
  } = useRoomsData();

  // send location as a message
  function shareLocation() {
    // message data
    const messageData = {
      location,
      senderId: userId,
      createdAt: serverTimestamp(),
      uiid: generateId(userId),
      type: "location",
      replyTo: messageMode === "reply" ? selectedMessage.uiid : null,
      visibleTo: [userId, selectedRoom.receiver.receiverId],
    };
    // ref to selectedRoom
    const db = getDatabase();
    const roomsRef = ref(db, `rooms/${selectedRoom.roomId}`);
    // update message list
    update(roomsRef, {
      messageList: [...(selectedRoom?.messageList || []), messageData],
      members: [userId, selectedRoom.receiver.receiverId],
    });
    // close modal & reset states
    onCloseModal();
    setSelectedMessage(null);
    setMode(null);
  }

  return (
    <div className="size-full bg-gray-50 rounded-md relative">
      {/* map component */}
      <div className="w-full h-full rounded-t-md overflow-hidden">
        <Map
          onClick={(e) => setLocation(e.latLng)}
          defaultCenter={[35.77142984637282, 51.46089654722849]}
          defaultZoom={11}
          minZoom={3}
          maxZoom={10}
        >
          {location && <Marker color="#1632e9" width={50} anchor={location} />}
        </Map>
      </div>
      {/* action btns */}
      <button
        disabled={!location}
        onClick={shareLocation}
        className="px-4 py-2 bg-primary-500 rounded-2xl text-gray-50 disabled:bg-gray-400 transition-all absolute bottom-2 right-2"
      >
        Send Location
      </button>
      <button
        onClick={() => onCloseModal()}
        className="absolute top-1 right-1 bg-gray-100 p-1.5 text-xl rounded-full"
      >
        <AiOutlineClose />
      </button>
    </div>
  );
}

export default SendLocation;
