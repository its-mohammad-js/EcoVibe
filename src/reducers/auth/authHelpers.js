import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, gitHubProvider, googleProvider, db } from "src/config/firebase";
import { generateId } from "helpers";

// switch on signUp/signIn method's
export const methodSwitcher = async (payload) => {
  try {
    // store user data info
    let user = {};
    // switch on method's
    switch (payload?.method) {
      // sign up with email
      case "signUpEmail":
        // create new account with email & pass
        await createUserWithEmailAndPassword(
          auth,
          payload.email,
          payload.password
        ).then((res) => (user = res.user));
        break;
      // sign in with email
      case "signInEmail":
        await signInWithEmailAndPassword(
          auth,
          payload.email,
          payload.password
        ).then((res) => (user = res.user));
        break;
      // quick sign up/in method's
      case "gitHub":
        // create new account with github
        await signInWithPopup(auth, gitHubProvider).then(
          ({ user: { uid, photoURL, email } }) =>
            (user = { uid, photoURL, email })
        );
        break;
      case "google":
        // create new account with google
        await signInWithPopup(auth, googleProvider).then(
          ({ user: { uid, photoURL, email } }) =>
            (user = { uid, photoURL, email })
        );
        break;
      default:
        throw new Error("Error : Unknown Sign Up Method !");
    }
    // return user data
    return user;
  } catch (error) {
    throw new Error(error || "an error occurred");
  }
};

// create new cell for user data on data base
export async function createUserDataCell(userId, guestUserData, userType) {
  // create user data cell on data base
  try {
    // sernd request
    await setDoc(doc(db, "users", userId), {
      // if user data is stored in firestore, it means first step (sign up) is passed
      customer_step: "second-step",
      seller_step: "second-step",
      userId: userId,
      personalInformation: guestUserData?.personalInformation || {},
      userType,
    });
  } catch (error) {
    console.log(error);
    // throw error with error message
    throw new Error(error?.message);
  }
}

export function setUseridCookie(userId) {
  const geustUserId = getUserIdCookie() || generateId("guest-user-");

  const date = new Date();
  date.setTime(date.getTime() + 20 * 24 * 60 * 60 * 1000);
  document.cookie = `${userId ? "userId" : "guestUserId"}=${
    userId || geustUserId
  }; expires=${date.toUTCString()}; path=/; SameSite=Lax`;
}

// get guest user id
export function getUserIdCookie(isGuest) {
  const match = document.cookie.match(
    new RegExp(`(^| )${isGuest ? "guestUserId" : "userId"}=([^;]+)`)
  );

  return match ? match[2] : null;
}
