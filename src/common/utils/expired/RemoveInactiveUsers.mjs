import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { readFile } from "fs/promises";
import path from "path";

// Resolve the path of the service account key
const serviceAccountPath = path.resolve(
  process.cwd(),
  "firebaseServiceAccountKey.json"
);

// Load the service account key from the JSON file created in the GitHub Action
const serviceAccount = JSON.parse(await readFile(serviceAccountPath));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount), // Use the loaded JSON key
  });
}

const db = getFirestore();

// Function to check if a user is expired based on the "lastActivity" timestamp
function checkIsExpired(dateObject) {
  if (!dateObject) {
    return true;
  }

  const date = new Date(dateObject.seconds * 1000); // Convert Firestore Timestamp to JavaScript Date
  const now = new Date();
  const difference = now.getTime() - date.getTime(); // Difference in milliseconds
  const hoursPassed = difference / (1000 * 60 * 60); // Convert milliseconds to hours

  return hoursPassed >= 240; // Check if 10 days (240 hours) have passed
}

// Function to remove expired users
async function removeExpiredUsers() {
  try {
    const usersRef = db.collection("users"); // Use Firestore instance to reference the "users" collection

    // Fetch all user documents from Firestore
    const snapshot = await usersRef.get();
    const allUsersData = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    console.log(allUsersData);

    // Here you can implement your logic to handle expired users
  } catch (error) {
    console.error("Error during the user cleanup process:", error);
    throw error;
  }
}

// Execute the cleanup process
removeExpiredUsers();
