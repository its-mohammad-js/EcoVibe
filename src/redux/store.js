import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Products/productsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
