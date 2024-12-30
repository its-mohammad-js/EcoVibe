import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";
import { db } from "src/config/firebase";
import { getUserIdCookie, setUseridCookie } from "../authHelpers";

// read user infomation from data base
export const getUserData = createAsyncThunk(
  "userData/getUserData",
  async (p, { fulfillWithValue, rejectWithValue }) => {
    // read user uid from local storage
    const localUserData = getUserIdCookie();
    // update app with user data
    if (localUserData) {
      try {
        // ref to user data cell in data base
        const userCellRef = doc(db, "users", localUserData);
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

export const getUserReducer = (builder) => {
  // get (read) user data reducer
  builder.addCase(getUserData.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(getUserData.fulfilled, (state, { payload }) => {
    state.loading = false;
    // setUseridCookie(payload.userId);
    // update user data with payload
    Object.assign(state, payload);
    // user is authorized
    state.auth_status = 200;
    // remove guest user id
    document.cookie = `guestUserId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  });
  builder.addCase(getUserData.rejected, (state, { payload }) => {
    state.loading = false;
    // on not logged in users case
    if (payload.code === 401) {
      document.cookie = `userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      // dispatch user is unauthorized
      console.log("user isn't logged in");
      // set guest user id for guest user (20 days ex)
      setUseridCookie();
      state.userId = getUserIdCookie(true);
      // user is unauthorized
      state.auth_status = payload.code;
    }
    // on client offline case (network error) or other error types
    else {
      // dispatch error
      state.error = payload.error;
      state.auth_status = payload.code;
    }
  });
};
