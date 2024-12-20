import fs from "fs-extra";
import path from "path";
import admin from "firebase-admin";

const serviceAccountPath = path.resolve(
  process.cwd(),
  "src/common/utils/expired/firebaseServiceAccountKey.json" // Update with the correct path
);

async function initializeFirebase() {
  try {
    // Use fs-extra to read and parse the JSON
    const serviceAccount = await fs.readJson(serviceAccountPath);
    console.log(serviceAccount);

    // Initialize Firebase Admin SDK
    // admin.initializeApp({
    //   credential: admin.credential.cert(serviceAccount),
    // });

    // console.log("Firebase Admin SDK initialized successfully!");
  } catch (error) {
    console.error("Error initializing Firebase Admin SDK:", error);
  }
}

initializeFirebase();
