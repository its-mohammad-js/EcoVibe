import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { getUserReducer } from "./authActions/getUserData";
import { signInReducer } from "./authActions/signinUser";
import { signupReducer } from "./authActions/signupUser";
import { updateUserDataReducer } from "./authActions/updateUserData";

// default state
export const defaultUserData = {
  // customer data
  // personalInformation: {},
  // cartData: [],
  // interests: [],
  // wishlist: [],
  // customer_step: "first-step",
  // // seller data
  // businessInformation: {},
  // stories: [],
  // seller_step: "first-step",
  // // others
  // userType: "",
  // userId: null,
  // notifications: [],
  // // auth status code : (204 = not checked) / (401 = Unauthorized) / (200 = authorized)
  // auth_status: 204,

  personalInformation: {
    last_name: "Romero",
    first_name: "Ethan",
    email: "ethan.romero.styles@gmail.com",
    profilePic:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/Profile%20Images%2FUsers%2FDALL%C2%B7E%202025-01-03%2016.43.44%20-%20A%20stylish%20and%20charismatic%20individual%20in%20their%20early%2030s%2C%20exuding%20a%20sense%20of%20modern%20elegance.%20They%20are%20dressed%20in%20a%20chic%20outfit%20featuring%20a%20tailored%20bl.webp?alt=media&token=ee8cbe7e-5a16-4489-bfdb-80bb4b1a4907",
  },
  cartData: [],
  interests: [],
  wishlist: [],
  customer_step: "second-step",
  businessInformation: {
    business_name: "Vogue Avenue Boutique",
    biography:
      "Ethan Romero is a passionate fashion entrepreneur with over a decade of experience in curating unique and timeless styles for modern individuals. His journey began as a fashion consultant, where he helped clients discover their signature looks. Today, Ethan runs Vogue Avenue, a boutique renowned for its blend of contemporary trends and vintage charm. When he’s not at the boutique, Ethan enjoys attending fashion shows and exploring global markets for inspiration.",
    slogan: "Where Style Meets Sophistication.",
    locations: [
      {
        lat: 40.69052927051574,
        lng: -73.94151416516729,
      },
    ],
    career_title: "Vogue Avenue",
  },
  stories: [],
  seller_step: "third-step",
  userType: "seller",
  userId: "U9vnsssDB7T8GuqdSdfcjWb7EGp2",
  notifications: [],
  auth_status: 200,
  loading: false,
  error: "",
  lastActivity: null,
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
