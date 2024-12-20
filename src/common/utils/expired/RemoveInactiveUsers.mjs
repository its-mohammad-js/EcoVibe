import { readFile } from "fs/promises";
import path from "path";

const serviceAccountPath = path.resolve(
  process.cwd(),
  "src/common/utils/expired/firebaseServiceAccountKey.json"
);

try {
  const fileContents = await readFile(serviceAccountPath, "utf8");
  console.log("Raw File Contents:", fileContents); // Debugging line
  const serviceAccount = JSON.parse(fileContents); // Parse JSON
  console.log("Parsed Service Account:", serviceAccount); // Debugging line
} catch (error) {
  console.error("Error reading or parsing JSON:", error.message, error.stack);
}
