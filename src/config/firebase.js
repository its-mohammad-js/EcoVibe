import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdnuxel4imeAOVQVogRiHvqvrXb5qVRQw",
  authDomain: "ecovibe-c6720.firebaseapp.com",
  projectId: "ecovibe-c6720",
  storageBucket: "ecovibe-c6720.appspot.com",
  messagingSenderId: "944059551615",
  appId: "1:944059551615:web:2f96d7e9a67d0065e9544a",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
