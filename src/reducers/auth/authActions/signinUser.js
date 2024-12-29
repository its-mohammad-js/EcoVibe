import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserDataCell,
  methodSwitcher,
  setUseridCookie,
} from "../authHelpers";
import { doc, getDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { db } from "src/config/firebase";
import { avatarsUrl } from "../../../common/utils/constants/appData";

// sign in user action
export const signInUser = createAsyncThunk(
  "userData/signInUser",
  async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      // sign in with user selected method
      const user = await methodSwitcher(payload);
      // reference to user data on data base
      const userDataRef = doc(db, "users", user?.uid);
      // check user is existing or not (get user data from database)
      const userStoredData = await getDoc(userDataRef);
      // create new cell on data base for new users (who signed-in with social media account's)
      if (!userStoredData.data()) {
        // combine authenticate data with guest user data
        const finalUserData = {
          userId: user?.uid,
          personalInformation: {
            email: user?.email,
            profilePic: user.photoURL || avatarsUrl[2],
            first_name: user?.name || user?.email || "not set",
          },
          customer_step: "second-step",
          seller_step: "second-step",
          userType: "customer",
          auth_status: 200,
        };
        // create new cell on data base with gue
        await createUserDataCell(
          user?.uid,
          {
            personalInformation: finalUserData?.personalInformation,
          },
          finalUserData?.userType
        );
        // store user id in cookies
        setUseridCookie(user?.uid);
        localStorage.setItem("isNewUser", JSON.stringify(true));
        // dispatch success
        return fulfillWithValue({ ...finalUserData, isNewUser: true });
      }
      // if user is already authenticated (existing users)
      else {
        const finalUserData = {
          ...userStoredData.data(),
          auth_status: 200,
        };
        // store user id in cookies
        setUseridCookie(user?.uid);
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

export const signInReducer = (builder) => {
  builder.addCase(signInUser.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(signInUser.fulfilled, (state, { payload }) => {
    toast.success(
      payload?.isNewUser ? "Welcome to eco vibe family" : "Welcome back"
    );
    // remove guest user id
    document.cookie = `guestUserId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    // merge state with user data
    if (payload) {
      Object.assign(state, payload);
    }
    state.loading = false;
    document.cookie = `guestUserId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  });
  builder.addCase(signInUser.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
};
