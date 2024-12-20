import { initializeApp } from "firebase/app";
import { deleteUser, getAuth } from "firebase/auth";
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
const auth = getAuth(app);

// check createAt date
function checkIsExpired(dateObject) {
  if (!dateObject) {
    return true;
  } else {
    // Convert the date object to a JavaScript Date object
    const date = new Date(
      dateObject.seconds * 1000 + dateObject.nanoseconds / 1000000
    );
    // Calculate the current time
    const now = new Date();
    // Calculate the difference in milliseconds
    const difference = now.getTime() - date.getTime();
    // Convert milliseconds to hours
    const hoursPassed = difference / (1000 * 60 * 60);
    // Check if 12 hours have passed
    return hoursPassed >= 10;
  }
}

async function removeExpiredProducts() {
  try {
    const usersRef = collection(db, "users");

    const allUsersData = await getDocs(usersRef).then(({ docs }) =>
      docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );

    allUsersData.forEach(async (user, i) => {
      if (checkIsExpired(user.lastActivity)) {
        await deleteUser(user.userId);
        const userDocRef = doc(db, "users", user.id);
        await deleteDoc(userDocRef);
        console.log(`${user.userId} deleted`);
      } else {
        console.log("isn't expired yet", user);
      }
    });
  } catch (error) {
    console.error("Error during the user cleanup process:", error);
    throw error; // Re-throw for error monitoring
  }
}

removeExpiredProducts();
