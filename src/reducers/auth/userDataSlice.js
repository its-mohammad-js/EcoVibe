import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, db, gitHubProvider, googleProvider } from "src/config/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { avatarsUrl } from "/src/common/utils/constants";
import toast from "react-hot-toast";
import { getGuestUserId, setUseridCookie } from "../../common/utils/constants";

// default state
const defaultUserData = {
  // customer data
  personalInformation: {},
  cartData: [],
  interests: [],
  wishlist: [],
  customer_step: "first-step",
  // seller data
  businessInformation: {},
  stories: [],
  seller_step: "first-step",
  // others
  userType: "",
  userId: null,
  notifications: [],
  // auth status code : (204 = not checked) / (401 = Unauthorized) / (200 = authorized)
  auth_status: 204,
};

// switch on signUp/signIn method's
const methodSwitcher = async (payload) => {
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

// read user infomation from data base
export const getUserData = createAsyncThunk(
  "userData/getUserData",
  async (payload, { fulfillWithValue, rejectWithValue }) => {
    // read user uid from local storage
    const localUserData = JSON.parse(
      localStorage.getItem("userData") || "null"
    );
    // update app with user data
    if (localUserData?.userId) {
      try {
        // ref to user data cell in data base
        const userCellRef = doc(db, "users", localUserData.userId);
        // read user data from data base
        const userData = await getDoc(userCellRef).then((res) => res.data());
        // update app data with new data
        return fulfillWithValue(userData);
      } catch (error) {
        // on error case update app data with prev local user data
        return rejectWithValue({ error, code: 204 });
      }
    }
    // not signed in case
    else {
      return rejectWithValue({ code: 401 });
    }
  }
);

// create new cell for user data on data base
async function createUserDataCell(userId, guestUserData, userType) {
  // customer collection object model :
  const newUserData = {
    wishlist: guestUserData?.wishlist || [],
    customer_step: guestUserData?.currentStep || "second-step",
    seller_step: guestUserData?.currentStep || "second-step",
  };
  // create user data cell on data base
  try {
    // sernd request
    await setDoc(doc(db, "users", userId), {
      ...newUserData,
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

// sign in user
export const signInUser = createAsyncThunk(
  "userData/signInUser",
  async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      // sign in with user selected method
      const user = await methodSwitcher(payload);
      // console.log(user);

      // reference to user data on data base
      const userDataRef = doc(db, "users", user?.uid);
      // check user is existing or not (get user data from database)
      const userStoredData = await getDoc(userDataRef);
      // read wishlist data of guest user from local storage
      const geustUserWishlist =
        JSON.parse(localStorage.getItem("userData"))?.wishlist || [];
      // create new cell on data base for new users (who signed-in with social media account's)
      if (!userStoredData.data()) {
        // combine authenticate data with guest user data
        const finalUserData = {
          userId: user?.uid,
          wishlist: geustUserWishlist,
          cartData: [],
          personalInformation: {
            email: user?.email,
            profilePic: user.photoURL || avatarsUrl[2],
            first_name: user?.name || user?.email || "not set",
          },
          orders: [],
          notifications: [],
          interests: [],
          customer_step: "second-step",
          seller_step: "second-step",
          userType: "customer",
          auth_status: 200,
        };
        // create new cell on data base with gue
        await createUserDataCell(
          user?.uid,
          {
            wishlist: finalUserData?.wishlist,
            personalInformation: finalUserData?.personalInformation,
            currentStep: finalUserData?.currentStep || "second-step",
          },
          finalUserData?.userType
        );
        // store user data in local storage
        localStorage.setItem("userData", JSON.stringify({ userId: user?.uid }));
        localStorage.setItem("isNewUser", JSON.stringify(true));
        // dispatch success
        return fulfillWithValue({ ...finalUserData, isNewUser: true });
      }
      // if user is already authenticated (existing users)
      else {
        const finalUserData = {
          ...userStoredData.data(),
          userId: user?.uid,
          auth_status: 200,
        };
        // store user data to local storage
        localStorage.setItem("userData", JSON.stringify({ userId: user?.uid }));
        // dispatch success
        return fulfillWithValue(finalUserData);
      }
    } catch (error) {
      toast.error(error?.message);
      console.log(error);
      // dispatch failure
      return rejectWithValue(error.message);
    }
  }
);

// create new account on different method's
export const signUpUser = createAsyncThunk(
  "userData/signInEmail",
  async (payload, { fulfillWithValue, rejectWithValue, getState }) => {
    // read geust user wish list from local storage
    const localWishList = JSON.parse(
      localStorage.getItem("userData")
    )?.wishlist;
    // sign up proccess
    try {
      // sign up user with selected method
      const user = await methodSwitcher(payload);
      // create a cell on data base for user
      await createUserDataCell(
        user?.uid,
        {
          wishlist: localWishList || [],
          personalInformation: payload.personalInformation || {
            email: user.email,
            profilePic: user.photoURL || avatarsUrl[2],
            first_name: user.email || null,
          },
        },
        payload.userType
      );
      // merge all user information's
      const fulfilledData = {
        ...defaultUserData,
        userType: payload.userType,
        userId: user?.uid,
        wishlist: localWishList || [],
        personalInformation: payload?.personalInformation || {
          email: user.email,
          profilePic: user.photoURL || avatarsUrl[2],
          first_name: user.email || null,
        },
        customer_step: "second-step",
        seller_step: "second-step",
      };
      // store user id in local storage
      localStorage.setItem("userData", JSON.stringify({ userId: user?.uid }));
      // disptach success after two requests
      console.log("signed up successfuly !");
      return fulfillWithValue(fulfilledData);
    } catch (error) {
      // dispatch failure
      console.log(error);
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
        userData: { customer_step, seller_step, userType },
      } = getState();
      // read stored user data on  local storage
      const localUserData = JSON.parse(localStorage.getItem("userData"));
      // update user data on database (only for authenticated users)
      if (localUserData?.userId) {
        // get user id
        const userId = auth.currentUser?.userId || localUserData?.userId || "";
        // reference to user Data
        const userDataRef = doc(db, "users", userId);
        // update selected field on data base (with current user step)
        await updateDoc(userDataRef, {
          [payload.field]: payload.data,
          customer_step: payload?.customer_step || customer_step,
          seller_step: payload?.seller_step || seller_step,
          userType: payload?.userType || userType,
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

// main state
const userSlice = createSlice({
  name: "userData",
  initialState: { ...defaultUserData, loading: false, error: "" },
  // sync reducer's
  reducers: {
    logout: (state) => {
      toast.success("You logged out successfully");
      // reomve user data form local storage
      localStorage.removeItem("userData");

      state = defaultUserData;
    },
  },
  // async reducer's
  extraReducers: (builder) => {
    // get (read) user data reducer
    builder.addCase(getUserData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUserData.fulfilled, (state, { payload }) => {
      state.loading = false;
      // update user data from fetched data
      Object.entries(payload).forEach(([key, value]) => (state[key] = value));
      // user is authorized
      state.auth_status = 200;
      // remove guest user id
      document.cookie = `guestUserId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
    builder.addCase(getUserData.rejected, (state, { payload }) => {
      state.loading = false;

      // on not logged in users case
      if (payload.code === 401) {
        // dispatch user is unauthorized
        console.log("user isn't logged in");
        // set temporary id for guest user (6 days ex)
        setUseridCookie();
        state.userId = getGuestUserId();
        // user is unauthorized
        state.auth_status = payload.code;
      }
      // on client offline case (network error)
      else {
        // dispatch error
        state.error = payload.error;
        state.auth_status = payload.code;
      }
    });
    // sign up Reducer
    builder.addCase(signUpUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(signUpUser.fulfilled, (state, { payload }) => {
      toast.success("Welcome to eco vibe");
      // set state with new values
      Object.entries(payload).forEach(([key, value]) => {
        state[key] = value;
      });
      // change request state
      state.loading = false;
      state.error = "";
    });
    builder.addCase(signUpUser.rejected, (state, action) => {
      toast.error(action.payload);
      state.loading = false;
      state.error = action.payload;
    });
    // sign in Reducer
    builder.addCase(signInUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(signInUser.fulfilled, (state, { payload }) => {
      toast.success(
        payload?.isNewUser ? "Welcome to eco vibe family" : "Welcome back"
      );
      // merge state with user data
      if (payload) {
        for (const key in payload) {
          state[key] = payload[key];
        }
      }
      state.loading = false;
      document.cookie = `guestUserId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
    builder.addCase(signInUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // update user data reducer
    builder.addCase(updateUserData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateUserData.fulfilled, (state, { payload }) => {
      // set loading false
      state.loading = false;
      // update selected field
      state[payload.field] = payload.data;
      // update steps in used case's
      if (payload?.customer_step) {
        state.customer_step = payload?.customer_step;
      }
      if (payload?.seller_step) {
        state.seller_step = payload?.seller_step;
      }
      // update user type
      state.userType = payload?.userType || state.userType;
    });
    builder.addCase(updateUserData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// export (non-async) actions
export const { logout } = userSlice.actions;
// export main reducer
export default userSlice.reducer;
