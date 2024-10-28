import { initializeApp } from "firebase/app";
import {
  getFirestore,
  setDoc,
  doc,
  collection,
  query,
  where,
  getDocs,
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
  const daysPassed = difference / (1000 * 60 * 60 * 24);
  // Check if two days have passed
  return daysPassed >= 2;
}

async function addDocumentToFirestore() {
  try {
    const fiveMinutesAgo = new Date();
    console.log(fiveMinutesAgo.toDateString());

    // fiveMinutesAgo.setMinutes(fiveMinutesAgo.getMinutes() - 5);

    // const ref = query(
    //   collection(db, "Stories")
    //   // where("createdAt", ">=", fiveMinutesAgo),
    //   // where("createdAt", "<", new Date())
    // );

    // const docs = await getDocs(ref).then(({ docs }) =>
    //   docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    // );

    // // docs.map(async (data, i) => {
    // //   try {
    // //     const docRef = doc(collection(db, "newCollection"), data.id);
    // //     await setDoc(docRef, {
    // //       ...data,
    // //       addedField: {
    // //         test: true,
    // //         message: "test is successfully done",
    // //       },
    // //     });
    // //     console.log(`${i + 1}st doc has changed`);
    // //   } catch (error) {
    // //     console.log("error on updating doc", error);
    // //   }
    // // });

    // console.log(`successefully finded ${docs?.length} stories`);
  } catch (error) {
    console.error("Error on whole proccess");
    throw error; // Re-throw error for GitHub Action to fail
  }
}

addDocumentToFirestore();
