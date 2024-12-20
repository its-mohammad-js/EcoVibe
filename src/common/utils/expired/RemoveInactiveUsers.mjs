import fs from "fs-extra";
import path from "path";

const serviceAccountPath = path.resolve(
  "src/common/utils/expired/firebaseServiceAccountKey.json"
);

async function initializeFirebaseAdmin() {
  try {
    // Read the raw file content
    let rawContent = await fs.readFile(serviceAccountPath, "utf8");

    // Step 1: Remove `***` markers
    rawContent = rawContent.replace(/^\*\*\*|\*\*\*$/g, "").trim();

    // Step 2: Clean up keys and fix formatting
    rawContent = rawContent
      .replace(/(\w+):/g, '"$1":') // Add quotes around keys
      .replace(/,\s*}/g, "}") // Remove trailing commas
      .replace(/-----BEGIN PRIVATE KEY-----/g, "-----BEGIN PRIVATE KEY-----\\n")
      .replace(/-----END PRIVATE KEY-----/g, "\\n-----END PRIVATE KEY-----") // Escape private key for JSON
      .replace(/\n/g, "\\n") // Escape all newline characters
      .replace(/https":/g, "https:"); // Fix malformed URLs

    console.log(rawContent);

    // // Step 3: Parse the cleaned-up content as JSON
    // const serviceAccountConfig = JSON.parse(rawContent);

    // console.log(
    //   "Parsed Firebase Service Account Config:",
    //   serviceAccountConfig
    // );

    // // Step 4: Initialize Firebase Admin
    // const admin = await import("firebase-admin");
    // admin.initializeApp({
    //   credential: admin.credential.cert(serviceAccountConfig),
    // });

    // console.log("Firebase Admin initialized successfully!");
  } catch (error) {
    console.error("Error reading or parsing service account JSON:", error);
  }
}

initializeFirebaseAdmin();
