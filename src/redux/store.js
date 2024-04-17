import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "src/redux/products/productsSlice";
import filtersSlice from "src/redux/filters/filterSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    filters: filtersSlice,
  },
});

export default store;
