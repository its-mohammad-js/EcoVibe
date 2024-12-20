import { readFile } from "fs/promises";
import path from "path";
import admin from "firebase-admin";

const serviceAccountPath = path.resolve(
  process.cwd(),
  "src/common/utils/expired/firebaseServiceAccountKey.json" // Updated to match the GitHub Action path
);

try {
  const fileContents = await readFile(serviceAccountPath, "utf8");

  console.log(fileContents.split("***")[1]);

  //   console.log("Raw File Contents:", fileContents); // Add this line to debug
  //   const serviceAccount = JSON.parse(fileContents); // Parse the JSON
  //   console.log("Parsed Service Account:", serviceAccount);

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(fileContents.split("***")[1]),
    });
  }
} catch (error) {
  console.error("Error reading or parsing JSON:", error.message, error.stack);
}
