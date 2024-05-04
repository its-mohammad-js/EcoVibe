import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth, db } from "../../../config/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

// create new cell for user data on data base
async function createUserDataCell(userId) {
  // user collection object model :
  const newUserCollection = {
    cartData: [],
    interests: [],
    orders: [],
    wishlist: [],
    notifications: [],
    userId: userId,
  };
  try {
    // create new cell on data base for user
    await setDoc(doc(db, "users", userId), newUserCollection);
  } catch (error) {
    // throw error with error message
    throw new Error(error?.message);
  }
}

export const getUserData = createAsyncThunk(
  "userData/getUserData",
  async ({ userId }, { fulfillWithValue, rejectWithValue }) => {
    try {
      // refrence to collection of products in database
      const usersDataRef = doc(db, "users", userId);
      // get user data from data base with user id
      const userData = await getDoc(usersDataRef);
      // merge user data
      return fulfillWithValue(userData.data());
    } catch (error) {
      return rejectWithValue(error?.message || "An Unknown Error Happend");
    }
  }
);

// create new account with email & password
export const signInWithEmail = createAsyncThunk(
  "userData/signInEmail",
  async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      // create new account with email & userName
      const { user } = await createUserWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      );
      // create a cell on data base for user
      await createUserDataCell(user?.uid);
      // disptach success after two requests
      console.log("signed in successfuly !");
      return fulfillWithValue({ uid: user?.uid, userName: user?.email });
    } catch (error) {
      // dispatch failure
      return rejectWithValue(error?.message);
    }
  }
);

export const signInWithGoogle = createAsyncThunk(
  "userData/signInWithGoogle",
  async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      // authenticate usr with google
      const { user } = await signInWithPopup(auth, GoogleAuthProvider);
      // create new cell on database for user
      await createUserDataCell(user?.uid);
      // disptach success after two requests
      console.log("signed in successfuly !");
      return fulfillWithValue({ uid: user?.uid, userName: user?.email });
    } catch (error) {
      // dispatch failure
      return rejectWithValue(error?.message);
    }
  }
);

const defaultUserData = {
  userName: "",
  uid: "",
  cartData: [],
  interests: [],
  orders: [],
  wishlist: [],
  notifications: [],
  loading: false,
  error: "",
};

const userSlice = createSlice({
  name: "userData",
  initialState: defaultUserData,
  extraReducers: (builder) => {
    // sign in with email Reducer
    builder.addCase(signInWithEmail.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(signInWithEmail.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.uid = payload.uid;
      state.userName = payload.userName;
    });
    builder.addCase(signInWithEmail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // sign in with google reducer
    builder.addCase(signInWithGoogle.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(signInWithGoogle.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.uid = payload.uid;
      state.userName = payload.userName;
    });
    builder.addCase(signInWithGoogle.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // get user data reducer
    builder.addCase(getUserData.fulfilled, (state, { payload }) => {
      console.log(payload);
      state = payload;
    });
  },
});

// action creator
export const { authUserWithEmail } = userSlice.actions;
// export main reducer
export default userSlice.reducer;
