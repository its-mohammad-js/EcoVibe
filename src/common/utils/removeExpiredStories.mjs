import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

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
const db = getFirestore(app);

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
    // const time = await fetch(
    //   "http://worldtimeapi.org/api/timezone/America/New_York",
    //   {
    //     method: "GET",
    //   }
    // ).then((time) => time.json());

    // const stamp = time?.unixtime;
    const now = new Date();
    console.log(now.getTime());
    const ref = query(collection(db, "Stories"));

    const docs = await getDocs(ref).then(({ docs }) =>
      docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );

    docs.forEach(async (story, i) => {
      try {
        if (isTwoDaysPassed(story.createdAt)) {
          const storyRef = doc(collection(db, "Stories"), story.id);

          await deleteDoc(storyRef);

          console.log(
            `${i + 1}st story has been deleted, story created at ${
              story.createdAt
            }`
          );
        } else {
          console.log("wasent from 10 minutes before");
        }
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
