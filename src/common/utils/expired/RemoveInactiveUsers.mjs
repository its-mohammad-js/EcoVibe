import { initializeApp } from "firebase/app";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";

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
const db = getFirestore(app);

// check createAt date
function checkIsExpired(dateObject) {
  console.log(dateObject ? "it has activity" : "no date object");

  //   if (!dateObject) return false;
  //   // Convert the date object to a JavaScript Date object
  //   const date = new Date(
  //     dateObject.seconds * 1000 + dateObject.nanoseconds / 1000000
  //   );
  //   // Calculate the current time
  //   const now = new Date();
  //   // Calculate the difference in milliseconds
  //   const difference = now.getTime() - date.getTime();
  //   // Convert milliseconds to hours
  //   const hoursPassed = difference / (1000 * 60 * 60);
  //   // Check if 12 hours have passed
  //   return hoursPassed >= 12;
}

async function removeExpiredProducts() {
  try {
    const usersRef = collection(db, "users");

    const allUsersData = await getDocs(usersRef).then(({ docs }) =>
      docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );

    allUsersData.forEach((user, i) => {
      checkIsExpired(user.lastActivity);
    });
  } catch (error) {
    console.error("Error during the user cleanup process:", error);
    throw error; // Re-throw for error monitoring
  }
}

removeExpiredProducts();
