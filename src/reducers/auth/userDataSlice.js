import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { getUserReducer } from "./authActions/getUserData";
import { signInReducer } from "./authActions/signinUser";
import { signupReducer } from "./authActions/signupUser";
import { updateUserDataReducer } from "./authActions/updateUserData";

// default state
export const defaultUserData = {
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
  // auth status code : (204 = not checked) / (401 = Unauthorized) / (200 = authorized)
  auth_status: 204,
};

// main state
const userSlice = createSlice({
  name: "userData",
  initialState: { ...defaultUserData, loading: false, error: "" },
  // sync reducer's
  reducers: {
    logout: () => {
      // remove user id from cookies
      document.cookie = `userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      toast.success("You logged out successfully");
    },
  },
  // async reducer's
  extraReducers: (builder) => {
    // get (read) user data reducer
    getUserReducer(builder);
    // sign up Reducer
    signupReducer(builder);
    // sign in Reducer
    signInReducer(builder);
    // update user data reducer
    updateUserDataReducer(builder);
  },
});

// export (non-async) actions
export const { logout } = userSlice.actions;
// export main reducer
export default userSlice.reducer;
