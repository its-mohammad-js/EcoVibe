import { initializeApp } from "firebase/app";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// check createAt date
function checkIsExpired(dateObject) {
  if (!dateObject) return false;
  // Convert the date object to a JavaScript Date object
  const date = new Date(
    dateObject.seconds * 1000 + dateObject.nanoseconds / 1000000
  );
  // Calculate the current time
  const now = new Date();
  // Calculate the difference in milliseconds
  const difference = now.getTime() - date.getTime();
  // Convert milliseconds to days
  const daysPassed = difference / (1000 * 60 * 60 * 24);
  // Check if 7 days have passed
  return daysPassed >= 7;
}

const storage = getStorage();

async function removeExpiredProducts() {
  try {
    // 1. Query expired products
    const expiredProductsRef = query(
      collection(db, "Products"),
      where("createdByUser", "==", true)
    );

    const expiredProducts = await getDocs(expiredProductsRef).then(({ docs }) =>
      docs.map((_product) => ({ ..._product.data(), id: _product.id }))
    );

    // 2. Process each expired product
    const deleteOperations = expiredProducts.map(async (item) => {
      try {
        // 3. Remove images from Firebase Storage
        if (item.Images && Array.isArray(item.Images)) {
          const imageDeletionPromises = item.Images.map((imageUrl) => {
            const imageRef = ref(storage, imageUrl);
            return deleteObject(imageRef);
          });

          await Promise.all(imageDeletionPromises);
          console.log(`All images deleted for product ${item.id}`);
        }

        // 4. Delete the product document from Firestore
        await deleteDoc(doc(db, "Products", item.id));
        console.log(`Product ${item.id} deleted successfully.`);
      } catch (error) {
        console.error(`Error processing product ${item.id}:`, error);
        throw error; // Re-throw to ensure any errors stop the process
      }
    });

    // 5. Wait for all delete operations to complete
    await Promise.all(deleteOperations);

    console.log("All expired products processed successfully.");
  } catch (error) {
    console.error("Error during the product cleanup process:", error);
    throw error; // Re-throw for error monitoring
  }
}

removeExpiredProducts();
