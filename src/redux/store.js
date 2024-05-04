import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "src/redux/products/productsSlice";
import filtersSlice from "src/redux/filters/filterSlice";
import userSlice from "src/redux/auth/regularUsers/regluarUsersSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    filters: filtersSlice,
    userData: userSlice,
  },
});

export default store;
