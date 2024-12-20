import admin from "firebase-admin";
import { readFile } from "fs/promises";
import path from "path";

const serviceAccountPath = path.resolve(
  process.cwd(),
  "src/common/utils/expired/firebaseServiceAccountKey.json" // Updated to match the GitHub Action path
);

try {
  // Log the resolved path for debugging
  //   console.log("Resolved Service Account Path: ", serviceAccountPath);

  // Read and log the service account JSON contents
  const fileContents = await readFile(serviceAccountPath, "utf8");
  //   console.log("Service Account File Contents: ", fileContents);

  console.log(typeof fileContents);

  // Parse the JSON
  //   const serviceAccount = JSON.parse(fileContents);
  //   console.log("Parsed Service Account Object: ", serviceAccount);

  // Initialize Firebase Admin SDK
  //   admin.initializeApp({
  //     credential: admin.credential.cert(serviceAccount),
  //   });

  console.log("Firebase Admin Initialized Successfully");

  // Add your cleanup logic here (e.g., deleting inactive users)
  console.log("Performing cleanup operation...");
} catch (error) {
  console.error("Error reading or parsing service account JSON:", error);
}
