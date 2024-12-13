import { initializeApp } from "firebase/app";
import { getDatabase, ref as dbRef, remove, get } from "firebase/database";
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
function isTwoDaysPassed(dateObject) {
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
  const daysPassed = difference / (1000 * 60);
  // Check if two days have passed
  return daysPassed >= 10;
}

async function addDocumentToFirestore() {
  try {
    const database = getDatabase();
    const storiesRef = dbRef(database, "stories");

    const docs = await get(storiesRef).then((snapShot) => snapShot.val());

    Object.values(docs || {})?.forEach(async (story, i) => {
      try {
        // if (isTwoDaysPassed(story.createdAt)) {
        // ref to content in storage
        const contentRef = ref(storage, story.contentUrl);
        await deleteObject(contentRef);
        // ref to story in firestore
        const slideRef = dbRef(database, `stories/${story.id}`);
        // delete story from firestore
        await remove(slideRef);
        // dispatch delete report
        console.log(
          `${i + 1}st story has been deleted, story created at ${
            story.createdAt
          }`
        );
        // } else {
        //   console.log("wasent from 10 minutes before");
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

addDocumentToFirestore();
