import { createSlice } from "@reduxjs/toolkit";
import { isInArray, toggleElementInArray } from "../../helpers/constants";

const defaultFilters = {
  searchQuery: "",
  category: [""],
  productTypes: [],
  sortBy: "Popular",
  priceRange: { min: 0, max: 1000 },
  collections: [],
  tags: [],
  seller: ["Eco vibe"],
  selectedOptions: [],
  relevant: "most",
};

const filterSlice = createSlice({
  name: "filters",
  initialState: defaultFilters,
  reducers: {
    changeFilterReducer: (state, { payload: { type, payload } }) => {
      switch (type) {
        case "searchQuery":
          state.searchQuery = payload;
          break;
        case "category":
          state.category[0] === payload
            ? (state.category = [""])
            : (state.category = [payload]);
          state.productTypes = [];
          state.selectedOptions = [];
          break;
        case "productTypes": {
          const updatedProductTypes = toggleElementInArray(
            state.productTypes,
            payload
          );
          state.productTypes = updatedProductTypes;
          state.selectedOptions = [];
          break;
        }
        case "priceRange":
          state.priceRange = payload;
          break;
        case "collections": {
          const updatedCollections = toggleElementInArray(
            state.collections,
            payload
          );
          state.collections = updatedCollections;
          break;
        }
        case "tags": {
          const updatedTags = toggleElementInArray(state.tags, payload);
          state.tags = updatedTags;
          break;
        }
        case "sortBy":
          state.sortBy = payload;
          break;
        case "selectedOptions": {
          const isInOptions = isInArray(state.selectedOptions, payload);
          const filteredOptions = state.selectedOptions.filter(
            (opt) => JSON.stringify(opt) !== JSON.stringify(payload)
          );

          state.selectedOptions = isInOptions
            ? filteredOptions
            : [...state.selectedOptions, payload];
          break;
        }
        case "seller": {
          state.seller[0] = payload;
          break;
        }
        case "clear":
          return defaultFilters;
        case "relevant":
          state.relevant = payload === "most" ? "least" : "most";
          break;
        default:
          throw Error("Unknown Action !");
      }
    },
  },
});

// action creator
export const { changeFilterReducer } = filterSlice.actions;
// export main reducer
export default filterSlice.reducer;
