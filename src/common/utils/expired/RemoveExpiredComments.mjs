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
  // Convert milliseconds to hours
  const hoursPassed = difference / (1000 * 60 * 60);
  // Check if 12 hours have passed
  return hoursPassed >= 12;
}

async function removeExpiredProducts() {
  try {
    const primarySellersIdList = [
      "mWtCSkEAvVe5M8uQA5yLQWx9bDm2",
      "ZGDo1gsVt1fAR7gYPfO34YDmYaS2",
      "DEZeusIbtogG9uzaej5Eqk3QWf12",
      "xTEewnD5JIROizBBCyCrpN7cysm2",
      "U9vnsssDB7T8GuqdSdfcjWb7EGp2",
    ];

    const commentsRef = collection(db, "comments");
    const allComments = await getDocs(commentsRef).then(({ docs }) =>
      docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );

    allComments.forEach((comment) => {
      if (primarySellersIdList.includes(comment.authorId)) {
        console.log("clean replies");
      } else {
        console.log("clean secondary comment");
      }
    });

    console.log("All expired products processed successfully.");
  } catch (error) {
    console.error("Error during the product cleanup process:", error);
    throw error; // Re-throw for error monitoring
  }
}

removeExpiredProducts();
