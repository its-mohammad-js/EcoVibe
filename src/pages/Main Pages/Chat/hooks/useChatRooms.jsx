import {
  equalTo,
  getDatabase,
  goOffline,
  goOnline,
  onDisconnect,
  onValue,
  orderByChild,
  query,
  ref,
  serverTimestamp,
} from "firebase/database";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function useChatRooms(selectedRoom) {
  // data base ref
  const db = getDatabase();
  // all rooms data
  const [{ status, rooms }, setRooms] = useState({
    rooms: [],
    status: null,
  });
  // necessary data & hooks
  const { userId, auth_status, loading } = useSelector(
    (state) => state.userData
  );
  const navigate = useNavigate();

  // get chat rooms data
  function getRooms() {
    const roomsRef = query(
      ref(db, "rooms"),
      orderByChild(`${userId}/userId`),
      equalTo(userId)
    );

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
        .map((room) => {
          const receiverId =
            room?.members?.find((id) => id !== userId) ||
            Object.keys(room).find(
              (key) =>
                ![userId, "roomId", "messageList", "members"].includes(key)
            );
          const ownerLastSeen = room[userId]?.last_seen;

          if (ownerLastSeen || room?.messageList?.length > 0)
            return {
              roomId: room.roomId,
              messageList: room.messageList || null,
              members: room.members,
              owner: room[userId],
              receiver: {
                ...room[receiverId],
                receiverId,
              },
            };
        });

      setRooms({
        rooms: filteredRooms.filter((room) => room),
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
        date: serverTimestamp(),
        offline: true,
      });
    }
  }, [selectedRoom, userId]);

  // get all chat rooms on app mount
  useEffect(() => {
    if (auth_status === 200) {
      goOnline(db);
      const connectedRef = ref(db, ".info/connected");
      onValue(connectedRef, (snap) => {
        if (snap.val() === true && !loading) {
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

  return {
    status,
    rooms,
  };
}
