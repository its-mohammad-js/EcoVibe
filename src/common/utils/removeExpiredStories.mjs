import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, getDocs } from "firebase/firestore";

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

async function addDocumentToFirestore() {
  try {
    const time = await fetch(
      "http://worldtimeapi.org/api/timezone/America/New_York",
      {
        method: "GET",
      }
    ).then((time) => time.json());

    const stamp = time?.unixtime;

    const ref = query(collection(db, "Stories"));

    const docs = await getDocs(ref).then(({ docs }) =>
      docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );

    docs.forEach((doc) => {
      console.log(doc.createdAt, stamp);
    });
  } catch (error) {
    console.error("Error on whole proccess");
    throw error; // Re-throw error for GitHub Action to fail
  }
}

addDocumentToFirestore();
