import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

// Load the service account key from the JSON file created in the GitHub Action
const serviceAccount = require("./firebaseServiceAccountKey.json");

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

    // for (const user of allUsersData) {
    //   if (checkIsExpired(user.lastActivity)) {
    //     console.log(`User expired: ${user.id}`);

    //     // try {
    //     //   // Delete user data from Firestore
    //     //   const userDocRef = doc(db, "users", user.id);
    //     //   await deleteDoc(userDocRef);
    //     //   console.log(`Deleted Firestore document for user: ${user.id}`);

    //     //   // Optional: Add user ID to a log for manual Firebase Auth cleanup later
    //     //   console.log(
    //     //     `User ${user.id} marked for manual Firebase Authentication deletion.`
    //     //   );
    //     // } catch (error) {
    //     //   console.error(
    //     //     `Failed to delete Firestore document for user: ${user.id}`,
    //     //     error
    //     //   );
    //     // }
    //   } else {
    //     console.log(`User is still active: ${user.id}`);
    //   }
    // }
  } catch (error) {
    console.error("Error during the user cleanup process:", error);
    throw error;
  }
}

// Execute the cleanup process
removeExpiredUsers();
