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
    const usersSnapshot = await db.collection("Users").get();

    if (usersSnapshot.empty) {
      console.log("No users found in the 'Users' collection.");
    } else {
      usersSnapshot.forEach((doc) => {
        console.log(`User ID: ${doc.id}, Data:`, doc.data());
      });
    }
  } catch (error) {
    console.error("Error fetching users from Firestore:", error);
  }
};

// Main execution block
(async () => {
  await initializeFirebaseAdmin();
  await fetchAndLogUsers();
})();
