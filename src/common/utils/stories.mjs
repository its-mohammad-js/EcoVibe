import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc, collection } from "firebase/firestore";

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
  const daysPassed = difference / (1000 * 60 * 60 * 24);
  // Check if two days have passed
  return daysPassed >= 2;
}

async function addDocumentToFirestore() {
  try {
    const ref = doc(collection(db, "newCollection"), "someId1234a");
    await setDoc(ref, {
      test: true,
      caption: "it nearly to last tests...",
    });

    console.log("successefully added to firebase");
  } catch (error) {
    console.error("Error adding document");
    throw error; // Re-throw error for GitHub Action to fail
  }
}

addDocumentToFirestore();
