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

// check createAt date
async function checkIsExpired([firstDate, secondDate]) {
  // Get the server time offset
  let serverTimeOffset = await new Promise((resolve) => {
    onValue(
      ref(db, ".info/serverTimeOffset"),
      (snapshot) => {
        resolve(snapshot.val());
      },
      { onlyOnce: true }
    );
  });

  // Calculate the server time
  const serverTime = Date.now() + serverTimeOffset;

  // Check if each date is at least 7 days old
  const isExpired = (date) =>
    Math.floor((serverTime - date) / (24 * 60 * 60 * 1000)) >= 7;

  // Return the result as a boolean
  return isExpired(firstDate) && isExpired(secondDate);
}

async function removeCanceledOrders() {
  try {
    const roomsRef = ref(db, "rooms");

    const allRooms = await get(roomsRef).then((snapshot) => snapshot.val());

    for (const [i, room] of Object.entries(allRooms)) {
      const firstPersonLastSeen = room[room.members[0] || {}]?.last_seen?.date;
      const secondPersonLastSeen = room[room.members[1] || {}]?.last_seen?.date;

      const expired = await checkIsExpired([
        firstPersonLastSeen,
        secondPersonLastSeen,
      ]);
      const isEmpty =
        room?.members?.length <= 0 ||
        !firstPersonLastSeen ||
        !secondPersonLastSeen;

      if (isEmpty) {
        console.log("delete it");
      }

      continue;
    }
  } catch (error) {
    console.error("Error on whole proccess");
    throw error; // Re-throw error for GitHub Action to fail
  }
}

removeCanceledOrders();

removeCanceledOrders();
