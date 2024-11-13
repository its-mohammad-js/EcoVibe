import {
  getDatabase,
  onValue,
  ref,
  set,
  onDisconnect,
  goOffline,
  goOnline,
  serverTimestamp,
} from "firebase/database";
import { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { find } from "lodash";
import toast from "react-hot-toast";

const RoomsProvider = createContext();

function RoomsContext({ children }) {
  // all rooms data
  const [{ status, rooms }, setRooms] = useState({
    rooms: [],
    status: null,
  });
  // selected room state
  const [selectedRoom, setSelectedRoom] = useState(null);
  // selected message state
  const [selectedMessage, setSelectedMessage] = useState(null);
  // selected message mode state (edit || reply)
  const [messageMode, setMode] = useState(null);
  // necessary data & hooks
  const params = useParams();
  const {
    userId,
    personalInformation,
    businessInformation,
    userType,
    auth_status,
  } = useSelector((state) => state.userData);
  const navigate = useNavigate();
  // data base ref
  const db = getDatabase();
  const location = useLocation();
  const queryRoomId = location?.state?.roomId;

  useEffect(() => {
    if (queryRoomId) {
      const findedRoom = rooms.find(
        (chatRoom) => chatRoom.roomId === queryRoomId
      );
      console.log(findedRoom);
      setSelectedRoom(findedRoom);
    }
  }, [queryRoomId, rooms]);

  // get chat rooms data
  function getRooms() {
    const roomsRef = ref(db, "rooms");

    onValue(roomsRef, (snapshot) => {
      if (!snapshot.exists()) {
        setRooms({
          rooms: [],
          status: "No Conversations Yet...",
        });
        return;
      }
      const allRooms = Object.entries(snapshot.val()).map(([k, val]) => ({
        ...val,
        roomId: k,
      }));
      const filteredRooms = allRooms
        .filter(({ members }) => members.includes(userId))
        .map((room) => ({
          roomId: room.roomId,
          messageList: room.messageList || null,
          members: room.members,
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
      setRooms({
        rooms: filteredRooms,
        status: filteredRooms.length ? null : "No Conversations Yet...",
      });
    });
  }

  // set last seen on disconnect
  useEffect(() => {
    if (selectedRoom && userId) {
      onDisconnect(
        ref(db, `rooms/${selectedRoom.roomId}/${userId}/last_seen`)
      ).set({
        status: "offline",
        date: serverTimestamp(),
      });
    }
  }, [selectedRoom, userId]);

  // get all chat rooms on app mount
  useEffect(() => {
    if (auth_status === 200) {
      goOnline(db);
      const connectedRef = ref(db, ".info/connected");
      onValue(connectedRef, (snap) => {
        if (snap.val() === true) {
          getRooms();
        } else {
          setRooms({
            rooms: [],
            status: "loading...",
          });
        }
      });
    } else if (auth_status === 401) {
      toast("Create an account to join the chat!");
      navigate("/EcoVibe/Customers/sign-up");
    }
    // disconnect from data base on component on mount
    return () => {
      goOffline(db);
      setRooms({ rooms: [], status: null });
    };
  }, [userId]);

  // reset selected message on close chat room
  useEffect(() => {
    if (!selectedRoom && !location?.state?.roomId) {
      setSelectedMessage(null);
      setMode(null);
    }
  }, [selectedRoom]);

  // on create new chat room
  const createNewChatRoom = async (contact) => {
    // check there is any room between these users before or not
    const findedRoom = rooms.find(
      ({ members }) =>
        members.includes(userId) && members.includes(contact.userId)
    );
    // create new chat room
    if (!findedRoom) {
      try {
        const roomId = `FROM:${userId}&TO:${contact.userId}`;
        await set(ref(db, `rooms/${roomId}`), {
          roomId,
          // customer data
          [userId]: {
            ...personalInformation,
            ...businessInformation,
            userType,
          },
          // seller data
          [contact.userId]: {
            ...contact.personalInformation,
            ...contact.businessInformation,
            userType: contact.userType,
          },
          members: [userId, contact.userId],
        });
        console.log(rooms);

        setSelectedRoom(rooms.find((room) => room.roomId === roomId));
      } catch (error) {
        console.log(error);
        toast.error("There was an error, please try again later");
      }
    }
    // navigate to exited room
    else {
      setSelectedRoom(findedRoom);
    }
  };

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
        createNewChatRoom,
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
