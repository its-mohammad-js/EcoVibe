import { readFile } from "fs/promises";
import path from "path";
import admin from "firebase-admin";

const serviceAccountPath = path.resolve(
  process.cwd(),
  "src/common/utils/expired/firebaseServiceAccountKey.json" // Updated to match the GitHub Action path
);

try {
  // Read and log the service account JSON contents
  const fileContents = await readFile(serviceAccountPath, "utf8");

  // Parse the JSON
  const serviceAccount = JSON.parse(fileContents);

  // Initialize Firebase Admin SDK
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  console.log("ok admin is stable now...");
} catch (error) {
  console.error("Error reading or parsing service account JSON:", error);
}
