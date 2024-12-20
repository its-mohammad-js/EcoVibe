import admin from "firebase-admin";
import { readFile } from "fs/promises";
import path from "path";

// Resolve the path of the service account key
const serviceAccountPath = path.resolve(
  process.cwd(),
  "firebaseServiceAccountKey.json"
);

try {
  // Log the contents of the file before parsing
  const fileContents = await readFile(serviceAccountPath, "utf8");
  console.log("Service Account File Contents: ", fileContents); // Debugging line

  // Parse the service account JSON
  const serviceAccount = JSON.parse(fileContents);
} catch (error) {
  console.error("Error reading or parsing service account JSON:", error);
}
