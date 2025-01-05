import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref as dbRef,
  get,
  goOffline,
  query,
} from "firebase/database";

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

// check createAt date
function checkIsExpired(timestamp) {
  if (!timestamp) return false;

  // Ensure timestamp is a number and convert it to UTC time
  const date = new Date(timestamp);
  const now = new Date();

  // Convert both to UTC time to avoid timezone issues
  const utcDate = new Date(date.toUTCString());
  const utcNow = new Date(now.toUTCString());

  // Calculate the difference in milliseconds
  const difference = utcNow.getTime() - utcDate.getTime();

  // Convert milliseconds to hours
  //   const hoursPassed = difference / (1000 * 60 * 60);
  const hoursPassed = difference / (1000 * 60);

  // Check if at least 18 hours have passed (adjust the threshold as needed)
  return hoursPassed >= 5;
}

async function removeExpiredSlides() {
  try {
    // ref to database
    const database = getDatabase();
    // ref to slide's in database
    const storiesRef = query(dbRef(database, "stories"));
    // get all slides data & convert it to array
    const docs = await get(storiesRef).then((snapShot) => snapShot.val());
    const allSlides = Object.values(docs || {}).filter(
      ({ createdByUser }) => !createdByUser
    );
    // Process each story sequentially
    allSlides.map((slide) => {
      try {
        let expiredComments = [];

        if (!slide.comments) return;

        slide.comments.forEach((comment) => {
          if (comment.createdByUser && checkIsExpired(comment.createdAt)) {
            expiredComments.push(comment.commentId);
          }
        });

        console.log(expiredComments);
      } catch (error) {
        console.log(error);
        console.log(`there was an error on cleaning ${slide.id} reviews`);
      }
    });
    // Go offline after processing all slides
    goOffline(database);
    console.log("All slides processed, database connection closed.");
  } catch (error) {
    console.error("Error in the whole process:", error);
    throw error;
  }
}

removeExpiredSlides();
