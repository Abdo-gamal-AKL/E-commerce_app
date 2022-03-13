import { createSlice } from "@reduxjs/toolkit";
import { products } from "../server/data";
import _ from "lodash";

const initialState = {
  products: [...products],
  filterdArr: [],
  currentPageArr: [],
  currentPageNumber: 1,
  productsPerPage: 12,
  pagesCount: 0,
  isLoading: false,
  isFailed: false,
  error: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setFilterdArr: (state, action) => {
      if (action.payload === "all") {
        state.filterdArr = state.products;
      } else {
        state.filterdArr = state.products.filter((item) =>
          item.page.includes(action.payload)
        );
      }
      state.currentPageNumber = 1;

      if (
        state.filterdArr.length <
        state.currentPageNumberHandler * state.productsPerPage
      ) {
        return;
      } else {
        state.currentPageArr = state.filterdArr.slice(
          (state.currentPageNumber - 1) * state.productsPerPage,
          state.currentPageNumber * state.productsPerPage
        );
      }
      state.pagesCount = Math.ceil(
        state.filterdArr.length / state.productsPerPage
      );
    },
    currentPageNumberHandler: (state, action) => {
      state.currentPageNumber = action.payload;

      state.currentPageArr = state.filterdArr.slice(
        (state.currentPageNumber - 1) * state.productsPerPage,
        state.currentPageNumber * state.productsPerPage
      );
    },
    pagesCountHandler: (state) => {
      state.pagesCount = Math.ceil(
        state.filterdArr.length / state.productsPerPage
      );
    },
    setCurrentPage: (state) => {
      state.currentPageArr = state.filterdArr.slice(
        (state.currentPageNumber - 1) * state.productsPerPage,
        state.currentPageNumber * state.productsPerPage
      );
    },
    paginationNumbersArrHandler: (state) => {
      state.paginationNumbersArr = _.range(1, state.pagesCount + 1);
    },
    errorHandler: (state) => {
      state.error = true;
    },
  },
});

export const {
  setCurrentPage,
  currentPageNumberHandler,
  pagesCountHandler,
  paginationNumbersArrHandler,
  setFilterdArr,
  errorHandler,
} = productsSlice.actions;

export default productsSlice.reducer;
