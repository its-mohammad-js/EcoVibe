import { createSlice } from "@reduxjs/toolkit";
import { isInArray, toggleElementInArray } from "/src/common/utils/constants";

const defaultFilters = {
  searchQuery: "",
  category: [""],
  productTypes: [],
  sortBy: "Popular",
  priceRange: { min: 0, max: 1000 },
  collections: [],
  tags: [],
  seller: ["All"],
  selectedOptions: [],
  relevant: "most",
  page: 0,
  pagination: true,
};

const filterSlice = createSlice({
  name: "filters",
  initialState: defaultFilters,
  reducers: {
    changeFilterReducer: (state, { payload: { type, payload } }) => {
      switch (type) {
        case "searchQuery":
          // reset current page
          state.page = 0;
          // change search query
          state.searchQuery = payload;
          break;
        case "category":
          // reset current page
          state.page = 0;
          // toggle category
          state.category[0] === payload
            ? (state.category = [""])
            : (state.category = [payload]);
          state.productTypes = [];
          // reset selected options
          state.selectedOptions = [];
          break;
        case "productTypes": {
          // reset current page
          state.page = 0;
          // update product types list
          const updatedProductTypes = toggleElementInArray(
            state.productTypes,
            payload
          );
          // update product types
          state.productTypes = updatedProductTypes;
          // reset selected options
          state.selectedOptions = [];
          break;
        }
        case "priceRange":
          // reset current page
          state.page = 0;
          // update price range
          state.priceRange = payload;
          break;
        case "collections": {
          // reset current page
          state.page = 0;
          // update collection list
          const updatedCollections = toggleElementInArray(
            state.collections,
            payload
          );
          // change collections
          state.collections = updatedCollections;
          break;
        }
        case "tags": {
          // reset current page
          state.page = 0;
          // update tag list
          const updatedTags = toggleElementInArray(state.tags, payload);
          // change tags
          state.tags = updatedTags;
          break;
        }
        case "sortBy":
          // update sort value
          state.sortBy = payload;
          break;
        case "selectedOptions": {
          // reset current page
          state.page = 0;
          // check option is selected
          const isInOptions = isInArray(state.selectedOptions, payload);
          // toggle selected options
          const filteredOptions = state.selectedOptions.filter(
            (opt) => JSON.stringify(opt) !== JSON.stringify(payload)
          );
          // change selected options
          state.selectedOptions = isInOptions
            ? filteredOptions
            : [...state.selectedOptions, payload];
          break;
        }
        case "seller": {
          // reset current page
          state.page = 0;
          // update seller option
          state.seller[0] = payload;
          break;
        }
        case "clear":
          // change all filters to default
          state.searchQuery = "";
          state.category = [""];
          state.productTypes = [];
          state.sortBy = "Popular";
          state.priceRange = { min: 0, max: 1000 };
          state.collections = [];
          state.tags = [];
          state.seller = ["All"];
          state.selectedOptions = [];
          state.relevant = "most";
          state.page = 0;
          state.pagination = true;
          break;
        case "relevant":
          // reset current page
          state.page = 0;
          // change relevant
          state.relevant = payload === "most" ? "least" : "most";
          break;
        case "nextPage":
          state.page = state.page + 1;
          break;
        case "prevPage":
          state.page = state.page - 1;
          break;
        case "changePage":
          state.page = payload;
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
