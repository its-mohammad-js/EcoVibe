import fs from "fs-extra";
import path from "path";

// Path to the service account key
const serviceAccountPath = path.resolve(
  "src/common/utils/expired/firebaseServiceAccountKey.json"
);

async function initializeFirebaseAdmin() {
  try {
    // Read the raw file content
    let rawContent = await fs.readFile(serviceAccountPath, "utf8");

    // Remove `***` markers
    rawContent = rawContent.replace(/^\*\*\*|\*\*\*$/g, "").trim();

    // Convert invalid JSON to valid JSON
    const validJSON = rawContent
      .replace(/(\w+):/g, '"$1":')
      .replace(/,\s*}/g, "}"); // Wrap keys in quotes

    // Parse the cleaned-up JSON
    const serviceAccountConfig = JSON.parse(validJSON);

    console.log("Firebase Service Account Config:", serviceAccountConfig);

    // Initialize Firebase Admin with the parsed JSON
    const admin = await import("firebase-admin");
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccountConfig),
    });

    console.log("Firebase Admin initialized successfully!");
  } catch (error) {
    console.error("Error reading or parsing service account JSON:", error);
  }
}

initializeFirebaseAdmin();
