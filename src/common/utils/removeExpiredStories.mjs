import { collection, query, getDocs } from "firebase/firestore";
import { db } from "/src/config/firebase";

async function addDocumentToFirestore() {
  try {
    const time = await fetch(
      "http://worldtimeapi.org/api/timezone/America/New_York",
      {
        method: "GET",
      }
    ).then((time) => time.json());

    const ref = query(collection(db, "Stories"));

    const docs = await getDocs(ref).then(({ docs }) =>
      docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );

    docs.forEach((doc, i) => {
      console.log(doc.createdAt, time.unixTime);
    });
  } catch (error) {
    console.error("Error on whole proccess");
    throw error; // Re-throw error for GitHub Action to fail
  }
}

addDocumentToFirestore();
