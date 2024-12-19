import { initializeApp } from "firebase/app";
import { get, getDatabase, onValue, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Check if a date is expired
async function checkIsExpired([firstDate, secondDate]) {
  // Get the server time offset
  let serverTimeOffset = await new Promise((resolve, reject) => {
    const offsetRef = ref(db, ".info/serverTimeOffset");
    const unsubscribe = onValue(
      offsetRef,
      (snapshot) => {
        resolve(snapshot.val());
        unsubscribe(); // Clean up the listener
      },
      { onlyOnce: true }
    );
  });

  // Calculate server time
  const serverTime = Date.now() + serverTimeOffset;

  // Helper to check expiration
  const isExpired = (date) =>
    Math.floor((serverTime - date) / (24 * 60 * 60 * 1000)) >= 7;

  // Return the result
  return isExpired(firstDate) && isExpired(secondDate);
}

// Remove expired rooms
async function removeExpiredRooms() {
  try {
    const roomsRef = ref(db, "rooms");
    const snapshot = await get(roomsRef);

    if (!snapshot.exists()) {
      console.log("No rooms found.");
      return;
    }

    const allRooms = snapshot.val();

    // Loop through all rooms and process them
    for (const [roomId, room] of Object.entries(allRooms)) {
      const firstPersonLastSeen = room?.[room.members?.[0]]?.last_seen?.date;
      const secondPersonLastSeen = room?.[room.members?.[1]]?.last_seen?.date;

      const expired = await checkIsExpired([
        firstPersonLastSeen,
        secondPersonLastSeen,
      ]);
      const isEmpty = !room?.members?.length;

      if (expired || isEmpty) {
        console.log(`Removing room ${roomId}`);
        // Remove the room if necessary
        // await ref(db, `rooms/${roomId}`).remove();
      }
    }

    console.log("All expired rooms have been processed.");
  } catch (error) {
    console.error("Error during room cleanup:", error);
    throw error; // Re-throw error for GitHub Action to fail
  }
}

// Execute the action
removeExpiredRooms()
  .then(() => {
    console.log("Action completed successfully.");
    process.exit(0); // Ensure the script exits
  })
  .catch((error) => {
    console.error("Action failed with error:", error);
    process.exit(1); // Exit with failure
  });
