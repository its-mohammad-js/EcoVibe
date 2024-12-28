import { useState } from "react";
import { getDatabase, ref, set, get } from "firebase/database";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const useCreateChatRoom = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const currentUser = useSelector((state) => state.userData);

  const createRoom = async (contactData, callback) => {
    setIsLoading(true);
    setError(null);
    try {
      const db = getDatabase();
      const roomId = `FROM:${currentUser.userId}&TO:${contactData.userId}`;
      // Check if room already exists
      const roomsSnapshot = await get(ref(db, "rooms"));
      const rooms = roomsSnapshot.val() || {};
      const existingRoom = Object.entries(rooms).find(
        ([, room]) =>
          room.members?.includes(currentUser.userId) &&
          room.members?.includes(contactData.userId)
      );
      if (existingRoom) {
        // Room already exists
        callback(existingRoom[1]);
      } else {
        // Create new room
        const newRoom = {
          roomId,
          // Current user data
          [currentUser.userId]: {
            ...currentUser.personalInformation,
            ...currentUser.businessInformation,
            userId: currentUser.userId,
          },
          // Contact user data
          [contactData.userId]: {
            ...contactData,
            userType: contactData.userType,
            userId: contactData.userId,
          },
          members: [currentUser.userId, contactData.userId],
        };
        await set(ref(db, `rooms/${roomId}`), newRoom);
        // Return new room via callback
        callback(newRoom);
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
      toast.error("There was an error creating the chat room.");
    } finally {
      setIsLoading(false);
    }
  };

  return { createRoom, isLoading, error };
};

export default useCreateChatRoom;
