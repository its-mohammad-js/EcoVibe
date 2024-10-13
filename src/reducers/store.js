import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "src/reducers/products/productsSlice";
import filtersSlice from "src/reducers/filters/filterSlice";
import userSlice from "src/reducers/auth/userDataSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    filters: filtersSlice,
    userData: userSlice,
  },
});

export default store;
