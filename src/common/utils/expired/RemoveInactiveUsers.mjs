import admin from "firebase-admin";

const serviceAccount = {
  type: "service_account",
  project_id: process.env.ADMIN_PROJECT_ID,
  private_key_id: process.env.ADMIN_private_key_id,
  private_key: process.env.ADMIN_private_key,
  client_email: process.env.ADMIN_client_email,
  client_id: process.env.ADMIN_client_id,
  auth_uri: process.env.ADMIN_auth_uri,
  token_uri: process.env.ADMIN_token_uri,
  auth_provider_x509_cert_url: process.env.ADMIN_auth_provider_x509_cert_url,
  client_x509_cert_url: process.env.ADMIN_client_x509_cert_url,
  universe_domain: process.env.ADMIN_universe_domain,
};

try {
  if (!admin.apps.length) {
    console.log(JSON.stringify(serviceAccount));

    // admin.initializeApp({
    //   credential: admin.credential.cert(JSON.stringify(serviceAccount)),
    // });
  }
} catch (error) {
  console.error("Error reading or parsing JSON:", error.message, error.stack);
}
