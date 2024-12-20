import { readFile } from "fs/promises";
import path from "path";

const serviceAccountPath = path.resolve(
  process.cwd(),
  "src/common/utils/expired/firebaseServiceAccountKey.json" // Updated to match the GitHub Action path
);

try {
  // Read and log the service account JSON contents
  const fileContents = await readFile(serviceAccountPath, "utf8");
  // Remove the *** markers using a regular expression
  const cleanedContents = fileContents.split("***")[1];
  console.log(cleanedContents);

  // Parse the JSON
  const serviceAccount = JSON.parse(`{${cleanedContents}}`);
  //   console.log("Parsed Service Account Object: ", serviceAccount);
} catch (error) {
  console.error("Error reading or parsing service account JSON:", error);
}
