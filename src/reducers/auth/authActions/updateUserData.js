import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "src/config/firebase";
import { getUserIdCookie } from "../authHelpers";

// update a specofic field of user data
export const updateUserData = createAsyncThunk(
  "userData/updateUserData",
  async (payload, { rejectWithValue, fulfillWithValue, getState }) => {
    try {
      // read curent step from state
      const {
        userData: { customer_step, seller_step, userType },
      } = getState();
      // read stored user id from cookies
      const localUserId = getUserIdCookie();
      // update user data on database (only for authenticated users)
      if (localUserId) {
        // reference to user Data
        const userDataRef = doc(db, "users", localUserId);
        // update selected field on data base (with current user step)
        await updateDoc(userDataRef, {
          [payload.field]: payload.data,
          // custome & seller step should be updated on some actions (like auth steps)
          customer_step: payload?.customer_step || customer_step,
          seller_step: payload?.seller_step || seller_step,
          // user type is changing on become seller process
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

export const updateUserDataReducer = (builder) => {
  builder.addCase(updateUserData.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(updateUserData.fulfilled, (state, { payload }) => {
    // set loading false
    state.loading = false;
    // Update the selected field and additional properties
    Object.assign(state, {
      [payload.field]: payload.data,
      customer_step: payload?.customer_step || state.customer_step,
      seller_step: payload?.seller_step || state.seller_step,
      userType: payload?.userType || state.userType,
    });
    // update user type
    state.userType = payload?.userType || state.userType;
  });
  builder.addCase(updateUserData.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
};
