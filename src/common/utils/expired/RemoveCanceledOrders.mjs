import { initializeApp } from "firebase/app";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
} from "firebase/firestore";

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
  if (!dateObject) return false;
  // Convert the date object to a JavaScript Date object
  const date = new Date(
    dateObject.seconds * 1000 + dateObject.nanoseconds / 1000000
  );
  // Calculate the current time
  const now = new Date();
  // Calculate the difference in milliseconds
  const difference = now.getTime() - date.getTime();
  // Convert milliseconds to days
  const daysPassed = difference / (1000 * 60 * 60 * 24);
  // Check if two days have passed
  return daysPassed >= 3;
}

async function removeCanceledOrders() {
  try {
    const storiesRef = query(collection(db, "Orders"));

    const docs = await getDocs(storiesRef).then(({ docs }) =>
      docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );

    docs.forEach(async (order, i) => {
      try {
        console.log(checkIsExpired(order.createdAt));

        // if (checkIsExpired(order.createdAt)) {
        //   // ref to order in firestore
        //   const storyRef = doc(collection(db, "Orders"), order.id);
        //   // delete story from firestore
        //   await deleteDoc(storyRef);
        //   // dispatch delete report
        //   console.log(
        //     `${i + 1}st order has been deleted, order created at ${
        //       order.createdAt
        //     }`
        //   );
        // } else {
        //   console.log("orders wasen't expired yet");
        // }
      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
    console.error("Error on whole proccess");
    throw error; // Re-throw error for GitHub Action to fail
  }
}

removeCanceledOrders();
