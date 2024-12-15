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
  apiKey: "AIzaSyCdnuxel4imeAOVQVogRiHvqvrXb5qVRQw",
  authDomain: "ecovibe-c6720.firebaseapp.com",
  databaseURL: "https://ecovibe-c6720-default-rtdb.firebaseio.com",
  projectId: "ecovibe-c6720",
  storageBucket: "ecovibe-c6720.appspot.com",
  messagingSenderId: "944059551615",
  appId: "1:944059551615:web:2f96d7e9a67d0065e9544a",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// check createAt date
// Check if two days (or a custom duration) have passed since a given timestamp
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
    const database = getDatabase();
    const storiesRef = dbRef(database, "stories");

    const docs = await get(storiesRef).then((snapShot) => snapShot.val());
    const allSlides = Object.values(docs || {});

    // Process each story sequentially
    for (const [i, story] of allSlides.entries()) {
      try {
        console.log(checkIsExpired(story.createdAt));
        return;
        // if (isTwoDaysPassed(story.createdAt)) {
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
        //   console.log("wasent from 10 minutes before");
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
