import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useChatRooms from "../hooks/useChatRooms";

const RoomsProvider = createContext();

function RoomsContext({ children }) {
  const [selectedRoom, setSelectedRoom] = useState(null); // selected room state
  const { status, rooms } = useChatRooms(selectedRoom); // all rooms data
  const [selectedMessage, setSelectedMessage] = useState(null); // selected message state
  const [messageMode, setMode] = useState(null); // selected message mode state (edit || reply)
  // necessary data & hooks
  const navigate = useNavigate();
  const location = useLocation();
  const queryRoomId = location?.state?.roomId;

  // reset query state on change selected room
  useEffect(() => {
    if (selectedRoom) {
      navigate(location.pathname, { roomId: null });
    }
  }, [selectedRoom]);

  // update selected room
  useEffect(() => {
    if (queryRoomId) {
      // find selected room from query state
      const findedRoom = rooms.find(
        (chatRoom) => chatRoom.roomId === queryRoomId
      );
      // set selected room
      setSelectedRoom(findedRoom);
    } else if (selectedRoom) {
      setSelectedRoom(
        rooms.find((room) => room.roomId === selectedRoom.roomId)
      );
    }
  }, [queryRoomId, rooms]);

  // reset selected message on close chat room
  useEffect(() => {
    if (!selectedRoom && !queryRoomId) {
      setSelectedMessage(null);
      setMode(null);
    }
  }, [queryRoomId, selectedRoom]);

  return (
    <RoomsProvider.Provider
      value={{
        rooms,
        status,
        selectedRoom,
        setSelectedRoom,
        selectedMessage,
        setSelectedMessage,
        messageMode,
        setMode,
      }}
    >
      {children}
    </RoomsProvider.Provider>
  );
}

export default RoomsContext;

export const useRoomsData = () => {
  return useContext(RoomsProvider);
};
