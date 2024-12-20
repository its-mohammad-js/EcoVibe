import { readFile } from "fs/promises";
import path from "path";

const serviceAccountPath = path.resolve(
  process.cwd(),
  "src/common/utils/expired/firebaseServiceAccountKey.json" // Updated to match the GitHub Action path
);

try {
  const fileContents = await readFile(serviceAccountPath, "utf8");

  console.log(fileContents.slice("***"));

  //   console.log("Raw File Contents:", fileContents); // Add this line to debug
  //   const serviceAccount = JSON.parse(fileContents); // Parse the JSON
  //   console.log("Parsed Service Account:", serviceAccount);
} catch (error) {
  console.error("Error reading or parsing JSON:", error.message, error.stack);
}
