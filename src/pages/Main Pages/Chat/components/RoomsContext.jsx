import { getDatabase, onValue, ref } from "firebase/database";
import { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { find } from "lodash";

const RoomsProvider = createContext();

function RoomsContext({ children }) {
  // all rooms data
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);
  // necessary data & hooks
  const params = useParams();
  const { userId } = useSelector((state) => state.userData);

  // get all chat rooms
  useEffect(() => {
    const db = getDatabase();
    const roomsRef = ref(db, "rooms");

    onValue(roomsRef, (snapshot) => {
      const allRooms = Object.entries(snapshot.val()).map(([k, val]) => ({
        ...val,
        roomId: k,
      }));

      const filteredRooms = allRooms
        .filter(({ roomId }) => roomId.includes(userId))
        .map((room) => ({
          roomId: room.roomId,
          messageList: room.messageList,
          owner: room[userId],
          reciver: {
            ...find(
              room,
              (v, key) =>
                key !== userId && key !== "roomId" && key !== "messageList"
            ),
            reciverId: Object.keys(room).find(
              (key) =>
                key !== userId && key !== "roomId" && key !== "messageList"
            ),
          },
        }));

      setRooms(filteredRooms);
    });
  }, [userId]);

  // reset selected message on close chat room
  useEffect(() => {
    if (!selectedRoom) {
      setSelectedMessage(null);
    }
  }, [selectedRoom]);

  // set selected room from params
  useEffect(() => {
    if (params?.roomId && rooms.length) {
      const findedRoom = rooms.find(({ roomId }) => roomId === params.roomId);

      setSelectedRoom(findedRoom);
    } else if (selectedRoom) {
      const findedRoom = rooms.find(
        ({ roomId }) => roomId === selectedRoom.roomId
      );

      setSelectedRoom(findedRoom);
    }
  }, [params, rooms]);

  return (
    <RoomsProvider.Provider
      value={{
        rooms,
        selectedRoom,
        setSelectedRoom,
        selectedMessage,
        setSelectedMessage,
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
