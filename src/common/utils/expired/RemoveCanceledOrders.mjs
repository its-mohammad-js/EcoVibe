import { initializeApp } from "firebase/app";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

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

async function removeCanceledOrders() {
  try {
    const ordersRef = query(
      collection(db, "Orders"),
      where("createdByUser", "==", true)
    );

    const ordersList = await getDocs(ordersRef).then(({ docs }) =>
      docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );

    ordersList.forEach(async (order, i) => {
      try {
        if (checkIsExpired(order.createdAt)) {
          // Step 1: Convert the `orders` property (object) into an array of entries
          const ordersArray = Object.entries(order.orders); // [sellerId, orderData]

          // Step 2: Filter the orders based on `delivery_status`
          const filteredOrders = ordersArray.filter(([sellerId, orderData]) => {
            return orderData.delivery_status !== 900;
          });

          // Step 3: Map the filtered orders back to an object
          const updatedOrders = Object.fromEntries(filteredOrders);

          // Step 4: Update the `sellers` array to exclude seller IDs of removed orders
          const removedSellerIds = ordersArray
            .filter(
              ([sellerId, orderData]) => orderData.delivery_status === 900
            ) // Get removed orders
            .map(([sellerId]) => sellerId); // Extract seller IDs

          const updatedSellers = order.sellers.filter(
            (sellerId) => !removedSellerIds.includes(sellerId)
          );

          const orderDocRef = doc(db, "Orders", order.id); // `order.id` is assumed to be the document ID

          // remove order if it was the last ordered items
          if (Object.values(updatedSellers).length <= 0) {
            deleteDoc(orderDocRef);
          } else {
            // update order data with new values
            await updateDoc(orderDocRef, {
              orders: updatedOrders,
              sellers: updatedSellers,
            });
          }

          console.log(`Successfully updated Order ${i + 1}st in Firestore.`);
        } else {
          console.log("order isn't expired yet");
        }
      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
    console.error("Error on whole proccess");
    throw error; // Re-throw error for GitHub Action to fail
  }
}

removeCanceledOrders();
