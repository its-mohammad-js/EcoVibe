import admin from "firebase-admin";

// Parse the service account JSON from the environment variable
const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT);

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
