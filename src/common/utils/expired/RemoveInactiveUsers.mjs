import admin from "firebase-admin";
import fs from "fs";
import path from "path";

// Path to the service account file created during the GitHub Action
const serviceAccountPath = path.join(__dirname, "../../service-account.json");

try {
  if (!admin.apps.length) {
    const serviceAccount = JSON.parse(
      fs.readFileSync(serviceAccountPath, "utf8")
    );
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }
} catch (error) {
  console.error(
    "Error reading or parsing service account file:",
    error.message,
    error.stack
  );
}
