import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserDataCell,
  methodSwitcher,
  setUseridCookie,
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
      const personalInformation = payload?.personalInformation || {
        email: user.email,
        profilePic: user.photoURL || avatarsUrl[2],
        first_name: user.email || null,
      };
      // sign up user with selected method
      const user = await methodSwitcher(payload);
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
      };
      // store user id in cookies
      setUseridCookie(user?.uid);
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
    toast.error(action.payload);
    state.loading = false;
    state.error = action.payload;
  });
};
