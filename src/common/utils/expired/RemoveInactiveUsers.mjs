import { readFile } from "fs/promises";
import path from "path";
import admin from "firebase-admin";

// Function to initialize Firebase Admin SDK
const initializeFirebaseAdmin = async () => {
  try {
    const serviceAccountPath = path.resolve(
      process.cwd(),
      "src/common/utils/expired/firebaseServiceAccountKey.json" // Updated to match the GitHub Action path
    );

    // Read and parse the service account JSON file
    const fileContents = await readFile(serviceAccountPath, "utf8");
    const serviceAccount = JSON.parse(fileContents);

    // Initialize Firebase Admin
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });

    console.log("Firebase Admin initialized successfully.");
  } catch (error) {
    console.error("Error initializing Firebase Admin:", error);
    process.exit(1); // Exit the process if Firebase Admin fails to initialize
  }
};

// Function to fetch and log all users from Firestore
const fetchAndLogUsers = async () => {
  try {
    const db = admin.firestore();
    const usersSnapshot = await db.collection("users").get();

    if (usersSnapshot.empty) {
      console.log("No users found in targeted collection.");
    } else {
      usersSnapshot.forEach((doc) => {
        const userData = doc.data();
        checkIsExpired(userData?.lastActivity);
      });
    }
  } catch (error) {
    console.error("Error fetching users from Firestore:", error);
  }
};

function checkIsExpired(dateObject) {
  if (!dateObject || !dateObject.seconds || !dateObject.nanoseconds) {
    console.log("user haven't any activity");
    return false;
  }
  // Convert the date object to a JavaScript Date object
  const date = new Date(
    dateObject.seconds * 1000 + dateObject.nanoseconds / 1000000
  );
  // Calculate the current time
  const now = new Date();
  // Calculate the difference in milliseconds
  const difference = now.getTime() - date.getTime();
  // Convert milliseconds to days
  // const daysPassed = difference / (1000 * 60);
  const daysPassed = difference / (1000 * 60 * 60 * 24);
  // Check if two days have passed
  // return daysPassed >= 10;
  if (daysPassed >= 1) {
    console.log("user has been offline for more than limitation");
  } else {
    console.log("user has valid time activity");
  }
}

// Main execution block
(async () => {
  await initializeFirebaseAdmin();
  await fetchAndLogUsers();
})();
