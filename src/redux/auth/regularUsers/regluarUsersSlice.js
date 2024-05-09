import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import {
  auth,
  db,
  gitHubProvider,
  googleProvider,
} from "../../../config/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { avatarsUrl } from "../../../helpers/constants";

// create new cell for user data on data base
async function createUserDataCell(userId, guestUserData) {
  // user collection object model :
  const newUserCollection = {
    cartData: [],
    interests: [],
    orders: [],
    wishlist: guestUserData?.wishlist || [],
    notifications: [],
    personalInformation: guestUserData?.personalInformation || {},
    userId: userId,
    currentStep: guestUserData?.currentStep || "second-step",
  };
  try {
    // create new cell on data base for user
    await setDoc(doc(db, "users", userId), newUserCollection);
  } catch (error) {
    // throw error with error message
    throw new Error(error?.message);
  }
}

// sign in user
export const signInUser = createAsyncThunk(
  "userData/getUserData",
  async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      let user = {};
      // sign in methods
      switch (payload.method) {
        // sign in with email & password
        case "emailPass":
          await signInWithEmailAndPassword(
            auth,
            payload.email,
            payload.password
          ).then((res) => (user = res.user));
          break;
        // sign in with google account
        case "google":
          await signInWithPopup(auth, googleProvider).then(
            ({ user: { uid, photoURL, email, displayName } }) =>
              (user = { uid, photoURL, name: displayName || email })
          );
          break;
        // sign in with github account
        case "github":
          await signInWithPopup(auth, gitHubProvider).then(
            ({ user: { uid, photoURL, email, displayName } }) =>
              (user = { uid, photoURL, name: displayName || email })
          );
          break;
        default:
          throw new Error("Unknown Sign In Action Method...");
      }
      // reference to user data on data base
      const userDataRef = doc(db, "users", user?.uid);
      // check user is existing or not
      // get user data from database
      const userStoredData = await getDoc(userDataRef);
      // read wishlist data ofguest user from local storage
      const geustUserWishlist =
        JSON.parse(localStorage.getItem("userData"))?.wishlist || [];
      // create new cell on data base for new users (who signed-in with social media account's)
      if (!userStoredData.data()) {
        // combine authenticate data with guest user data
        const finalUserData = {
          uid: user?.uid,
          wishlist: geustUserWishlist,
          cartData: [],
          personalInformation: {
            profilePic: user.photoURL || avatarsUrl[2],
            first_name: user?.name || "not set",
          },
          orders: [],
          notifications: [],
          interests: [],
          currentStep: "second-step",
        };
        // create new cell on data base with gue
        await createUserDataCell(user?.uid, {
          wishlist: finalUserData?.wishlist,
          personalInformation: finalUserData?.personalInformation,
          currentStep: finalUserData?.currentStep,
        });
        // store user data in local storage
        localStorage.setItem("userData", JSON.stringify(finalUserData));
        // dispatch success
        return fulfillWithValue(finalUserData);
      }
      // if user is already authenticated (existing users)
      else {
        const finalUserData = {
          ...userStoredData.data(),
          uid: user?.uid,
          currentStep: "completed",
        };
        // store user data to local storage
        localStorage.setItem("userData", JSON.stringify(finalUserData));
        // dispatch success
        return fulfillWithValue(finalUserData);
      }
    } catch (error) {
      console.log(error);
      // dispatch failure
      return rejectWithValue(error.message);
    }
  }
);

// create new account on different method's
export const signUp = createAsyncThunk(
  "userData/signInEmail",
  async (payload, { fulfillWithValue, rejectWithValue }) => {
    // read geust user wish list from local storage
    const localWishList = JSON.parse(
      localStorage.getItem("userData")
    )?.wishlist;
    try {
      let user = {};
      // switch onsign in available sign in method
      switch (payload?.method) {
        case "emailPass":
          // create new account with email & pass
          await createUserWithEmailAndPassword(
            auth,
            payload.email,
            payload.password
          ).then((res) => (user = res.user));
          break;
        case "gitHub":
          // create new account with github
          await signInWithPopup(auth, gitHubProvider).then(
            ({ user: { uid, photoURL } }) => (user = { uid, photoURL })
          );
          break;
        case "google":
          // create new account with google
          await signInWithPopup(auth, googleProvider).then(
            ({ user: { uid, photoURL } }) => (user = { uid, photoURL })
          );
          break;
        default:
          throw new Error("Error : Unknown Action !");
      }
      // create a cell on data base for user
      await createUserDataCell(user?.uid, {
        wishlist: localWishList || [],
        personalInformation: { profilePic: user.photoURL || avatarsUrl[2] },
      });
      // store necessary user information's in local storage
      localStorage.setItem(
        "userData",
        JSON.stringify({
          uid: user?.uid,
          currentStep: "second-step",
          cartData: [],
          interests: [],
          orders: [],
          wishlist: localWishList || [],
          notifications: [],
          personalInformation: { profilePic: user.photoURL || avatarsUrl[2] },
        })
      );
      // disptach success after two requests
      console.log("signed in successfuly !");
      return fulfillWithValue({ uid: user?.uid, userName: user?.email });
    } catch (error) {
      // dispatch failure
      return rejectWithValue(error?.message);
    }
  }
);

// update a specofic field of user data
export const updateUserData = createAsyncThunk(
  "userData/updateUserData",
  async (payload, { rejectWithValue, fulfillWithValue, getState }) => {
    try {
      // read curent step from state
      const {
        userData: { currentStep },
      } = getState();
      // read stored user data on local storage
      const localUserData = JSON.parse(localStorage.getItem("userData"));
      // update userData on local data storage (for both guest & authenticated user's)
      localStorage.setItem(
        "userData",
        JSON.stringify({
          ...localUserData,
          [payload.field]: payload.data,
          currentStep:
            payload.step ||
            (localUserData?.uid && "second-step") ||
            "first-step",
        })
      );
      // update user data on database (only for authenticated users)
      if (localUserData?.uid) {
        // get user UID
        const userId = auth.currentUser?.uid || localUserData?.uid || "";
        // reference to user Data
        const userDataRef = doc(db, "users", userId);
        // update selected field on data base (with current user step)
        await updateDoc(userDataRef, {
          [payload.field]: payload.data,
          currentStep: payload.step || currentStep,
        });
      }
      return fulfillWithValue(payload);
    } catch (error) {
      console.log(error?.message);
      // dispatch failure
      return rejectWithValue(error?.message);
    }
  }
);

// default state
const defaultUserData = {
  loading: false,
  error: "",
  uid: "",
  currentStep: "first-step",
  cartData: [],
  interests: [],
  orders: [],
  wishlist: [],
  notifications: [],
  personalInformation: {},
};

// main state
const userSlice = createSlice({
  name: "userData",
  initialState: defaultUserData,
  // regular reducers
  reducers: {
    getLocalUserData: (state, action) => {
      const localData = JSON.parse(localStorage.getItem("userData"));

      if (localData) {
        for (const key in localData) {
          state[key] = localData[key];
        }
      }
    },
  },
  // async reducers
  extraReducers: (builder) => {
    // sign up Reducer
    builder.addCase(signUp.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.uid = payload.uid;
      state.userName = payload.userName;
      state.currentStep = "second-step";
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // sign in Reducer
    builder.addCase(signInUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(signInUser.fulfilled, (state, { payload }) => {
      // merge state with user data
      if (payload) {
        for (const key in payload) {
          state[key] = payload[key];
        }
      }
      state.loading = false;
    });
    builder.addCase(signInUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // update user data
    builder.addCase(updateUserData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateUserData.fulfilled, (state, { payload }) => {
      state.loading = false;
      state[payload.field] = payload.data;
      state.currentStep = payload?.step || state.currentStep;
    });
    builder.addCase(updateUserData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// export (non-async) actions
export const { getLocalUserData } = userSlice.actions;
// export main reducer
export default userSlice.reducer;
