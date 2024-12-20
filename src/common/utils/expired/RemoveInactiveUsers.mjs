import admin from "firebase-admin";

// Decode the base64 encoded service account string and parse it into a JSON object
const serviceAccount = JSON.parse(
  Buffer.from(process.env.SERVICE_ACCOUNT, "base64").toString("utf8")
);

try {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }
} catch (error) {
  console.error(
    "Error initializing Firebase Admin SDK:",
    error.message,
    error.stack
  );
}
