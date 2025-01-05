import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserDataCell,
  methodSwitcher,
  setUseridCookie,
  updateUserLastActivity,
} from "../authHelpers";
import { avatarsUrl } from "../../../common/utils/constants/appData";
import { defaultUserData } from "../userDataSlice";
import toast from "react-hot-toast";

// create new account on different method's
export const signUpUser = createAsyncThunk(
  "userData/signInEmail",
  async (payload, { fulfillWithValue, rejectWithValue }) => {
    // sign up proccess
    try {
      // sign up user with selected method
      const user = await methodSwitcher(payload);
      updateUserLastActivity(user?.uid);
      // define personal info of user
      const personalInformation = payload?.personalInformation || {
        email: user.email,
        profilePic: user.photoURL || avatarsUrl[2],
        first_name: user.email || null,
      };
      // create a cell on data base for user
      await createUserDataCell(
        user?.uid,
        { personalInformation: personalInformation },
        payload.userType
      );
      // merge all user information's
      const fulfilledData = {
        ...defaultUserData,
        userType: payload.userType,
        userId: user?.uid,
        personalInformation,
        customer_step: "second-step",
        seller_step: "second-step",
        auth_status: 200,
      };
      // store user id in cookies
      setUseridCookie(user?.uid);
      // disptach success after two requests
      console.log("signed up successfuly !");
      return fulfillWithValue(fulfilledData);
    } catch (error) {
      // dispatch failure
      console.log(error);
      let finalError = () => {
        if (error?.message?.includes("auth/invalid-credential")) {
          return "Email or password wrong";
        }
        if (error?.message?.includes("auth/network-request-failed")) {
          return "Network error please try again later";
        }
        if (error?.message?.includes("auth/email-already-in-use")) {
          return "Email is already in use please sign-in instead.";
        }
        return "Unknown error";
      };
      toast.error(finalError());
      return rejectWithValue(finalError());
    }
  }
);

export const signupReducer = (builder) => {
  builder.addCase(signUpUser.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(signUpUser.fulfilled, (state, { payload }) => {
    // remove guest user id
    document.cookie = `guestUserId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    toast.success("Welcome to eco vibe");
    // set state with new values
    Object.assign(state, payload);
    // change request state
    state.loading = false;
    state.error = "";
  });
  builder.addCase(signUpUser.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
};
