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

// check createAt date (for comments)
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
  // Convert milliseconds to hours
  const daysPassed = difference / (1000 * 60 * 60 * 24);
  // Check if 6 day have passed
  return daysPassed >= 6;
}

// chect createdAt date (for replies)
function checkReplyIsExpired(timestamp) {
  if (!timestamp) return true;

  // Ensure timestamp is a number and convert it to UTC time
  const date = new Date(timestamp);
  const now = new Date();

  // Convert both to UTC time to avoid timezone issues
  const utcDate = new Date(date.toUTCString());
  const utcNow = new Date(now.toUTCString());

  // Calculate the difference in milliseconds
  const difference = utcNow.getTime() - utcDate.getTime();

  // Convert milliseconds to hours
  //   const hoursPassed = difference / (1000 * 60 * 60);
  const hoursPassed = difference / (1000 * 60);

  // Check if at least 18 hours have passed (adjust the threshold as needed)
  return hoursPassed >= 5;
}

async function removeExpiredProducts() {
  try {
    const primarySellersIdList = [
      "mWtCSkEAvVe5M8uQA5yLQWx9bDm2",
      "ZGDo1gsVt1fAR7gYPfO34YDmYaS2",
      "DEZeusIbtogG9uzaej5Eqk3QWf12",
      "xTEewnD5JIROizBBCyCrpN7cysm2",
      "U9vnsssDB7T8GuqdSdfcjWb7EGp2",
    ];

    const commentsRef = collection(db, "comments");
    const allComments = await getDocs(commentsRef).then(({ docs }) =>
      docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );

    allComments.forEach(async (comment) => {
      // list of expired replies id
      let expiredReplies = [];
      // get expired reply id list (from primary user comments)
      if (primarySellersIdList.includes(comment.authorId)) {
        if (!comment.replies || !comment.replies.length) return;
        comment.replies.forEach(
          ({ commentId, createdAt }) =>
            checkReplyIsExpired(createdAt) && expiredReplies.push(commentId)
        );
      }
      // clean epxired comments (secondary users)
      else if (checkIsExpired(comment.createdAt)) {
        const commentRef = doc(db, "comments", comment.id);
        deleteDoc(commentRef);
        console.log(`${comment.id} was expired`);
      }
      // clean comment replies
      if (expiredReplies.length > 0) {
        const commentRef = doc(db, "comments", comment.commentId);
        await updateDoc(commentRef, {
          replies: comment.replies.filter(
            ({ commentId }) => !expiredReplies.includes(commentId)
          ),
        });
        console.log(`${expiredReplies.length} replies removed`);
      }
    });

    console.log("All expired products processed successfully.");
  } catch (error) {
    console.error("Error during the product cleanup process:", error);
    throw error; // Re-throw for error monitoring
  }
}

removeExpiredProducts();
