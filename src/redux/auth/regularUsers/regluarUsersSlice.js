import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {
  auth,
  db,
  gitHubProvider,
  googleProvider,
} from "../../../config/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

// create new cell for user data on data base
async function createUserDataCell(userId) {
  // user collection object model :
  const newUserCollection = {
    cartData: [],
    interests: [],
    orders: [],
    wishlist: [],
    notifications: [],
    personalInformation: {},
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

// create new account on different method's
export const signIn = createAsyncThunk(
  "userData/signInEmail",
  async (payload, { fulfillWithValue, rejectWithValue }) => {
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
            (res) => (user = res.user)
          );
          break;
        case "google":
          // create new account with google
          await signInWithPopup(auth, googleProvider).then(
            (res) => (user = res.user)
          );
          break;
        default:
          throw new Error("Error : Unknown Action !");
      }
      // create a cell on data base for user
      await createUserDataCell(user?.uid);
      // store necessary user information's in local storage
      localStorage.setItem(
        "userData",
        JSON.stringify({
          uid: user?.uid,
          currentStep: "second-step",
          cartData: [],
          interests: [],
          orders: [],
          wishlist: [],
          notifications: [],
          personalInformation: {},
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

export const updateUserData = createAsyncThunk(
  "userData/updateUserData",
  async (payload, { rejectWithValue, fulfillWithValue }) => {
    try {
      // read stored user data on local storage
      const localUserData = JSON.parse(localStorage.getItem("userData"));
      // get user UID
      const userId = auth.currentUser?.uid;
      // reference to user Data
      const userDataRef = doc(db, "users", userId);
      // update selected field on data base
      await updateDoc(userDataRef, { [payload.field]: payload.data });
      // update userData on local data storage
      localStorage.setItem(
        "userData",
        JSON.stringify({
          ...localUserData,
          [payload.field]: payload.data,
          currentStep: payload.step || "second-step",
        })
      );
      // update local state
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
  userName: "",
  uid: "",
  currentStep: "first-step",
  cartData: [],
  interests: [],
  orders: [],
  wishlist: [],
  notifications: [],
  personalInformation: {},
};

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
    // sign in Reducer
    builder.addCase(signIn.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.uid = payload.uid;
      state.userName = payload.userName;
      state.currentStep = "second-step";
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // get user data reducer
    builder.addCase(getUserData.fulfilled, (state, { payload }) => {
      console.log(payload);
      state = payload;
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
