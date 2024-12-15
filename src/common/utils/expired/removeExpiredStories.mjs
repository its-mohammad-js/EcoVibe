import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref as dbRef,
  remove,
  get,
  goOffline,
} from "firebase/database";
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
const storage = getStorage(app);

// check createAt date
function checkIsExpired(timestamp) {
  if (!timestamp) return false;

  // Ensure timestamp is a number
  const date = new Date(timestamp);
  const now = new Date();

  // Calculate the difference in milliseconds
  const difference = now.getTime() - date.getTime();

  // Convert milliseconds to hours
  const hoursPassed = difference / (1000 * 60 * 60);

  // Check if at least two days have passed
  return hoursPassed >= 18; // Adjust the number if you want a different threshold
}

async function removeExpiredSlides() {
  try {
    // ref to database
    const database = getDatabase();
    // ref to slide's in database
    const storiesRef = dbRef(database, "stories");
    // get all slides data & convert it to array
    const docs = await get(storiesRef).then((snapShot) => snapShot.val());
    const allSlides = Object.values(docs || {});
    // Process each story sequentially
    for (const [i, story] of allSlides.entries()) {
      try {
        // remove slide content and cell if is expired
        // if (checkIsExpired(story.createdAt)) {
          const contentRef = ref(storage, story.contentUrl);
          await deleteObject(contentRef);

          const slideRef = dbRef(database, `stories/${story.id}`);
          await remove(slideRef);

          console.log(
            `${i + 1}st story has been deleted, story created at ${
              story.createdAt
            }`
          );
        // } else {
        //   console.log("wasn't expired yet");
        //   return;
        // }
      } catch (error) {
        console.error(`Error deleting story ${i + 1}:`, error);
      }
    }
    // Go offline after processing all slides
    goOffline(database);
    console.log("All slides processed, database connection closed.");
  } catch (error) {
    console.error("Error in the whole process:", error);
    throw error;
  }
}

removeExpiredSlides();
