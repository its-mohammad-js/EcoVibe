import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GithubAuthProvider, GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
//   databaseURL: import.meta.env.VITE_DATABASEURL,
// };

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialization app
export const app = initializeApp(firebaseConfig);
// export data base reference
export const db = getFirestore(app);
// epxort auth reference
export const auth = getAuth(app);
// export google auth provider
export const googleProvider = new GoogleAuthProvider();
// export git hub auth provider
export const gitHubProvider = new GithubAuthProvider();
// export storage reference
export const storage = getStorage(app);
