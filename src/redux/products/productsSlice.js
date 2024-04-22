import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { filterProducts } from "../../helpers/filterPorducts";

export const getFilteredProducts = createAsyncThunk(
  "products/getAsyncProducts",
  async (payload, { rejectWithValue, fulfillWithValue }) => {
    try {
      // refrence to collection of products in database
      const productsCollectionRef = collection(db, "Products");
      // get docs by collection name
      const data = await getDocs(productsCollectionRef);
      // merge docs data with data id
      const mergedData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // filter merged data by filter object
      const filteredData = filterProducts(mergedData, payload);
      // throw error if no product find
      if (!filteredData.length) {
        throw new Error("No products found!");
      }
      // finnaly return data
      return filteredData;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const productsSilce = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getFilteredProducts.pending, (state, action) => {
      state.loading = true;
      state.data = [];
      state.error = "";
    });

    builder.addCase(getFilteredProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });

    builder.addCase(getFilteredProducts.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    });
  },
});

export default productsSilce.reducer;
