import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "src/redux/products/productsSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});

export default store;
