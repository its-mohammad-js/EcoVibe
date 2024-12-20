import { outputJson } from "fs-extra";

async function createServiceAccountFile() {
  const secret = process.env.FIREBASE_SECRET;

  if (!secret) {
    console.error("FIREBASE_SECRET is not set.");
    process.exit(1);
  }

  try {
    // Parse the secret to ensure it's valid JSON
    const parsedSecret = JSON.parse(secret);

    // File path where the service account key will be stored
    const filePath =
      "./src/common/utils/expired/firebaseServiceAccountKey.json";

    // Write the parsed JSON to the file
    await outputJson(filePath, parsedSecret, { spaces: 2 });

    console.log(`Service account key successfully written to ${filePath}`);
  } catch (err) {
    console.error(
      "Error parsing or writing Firebase service account key:",
      err.message
    );
    process.exit(1);
  }
}

createServiceAccountFile();
