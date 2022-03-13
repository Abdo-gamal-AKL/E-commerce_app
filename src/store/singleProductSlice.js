import { createSlice } from "@reduxjs/toolkit";
import { products } from "../server/data";

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    singleProduct: null,
    currentProductImgSRC: null,
    isLoading: false,
    isFailed: false,
  },
  reducers: {
    hadnleCurrentImgSRC: (state, action) => {
      state.currentProductImgSRC = action.payload;
    },
    handleSingleProduct: (state, action) => {
      const ID = action.payload;
      state.singleProduct = products.filter((item) => item.id === ID)[0];
    },
    addComment: (state, action) => {
      if (state.singleProduct.testimonial === undefined) {
        state.singleProduct.testimonial = [action.payload];
      } else {
        state.singleProduct.testimonial = [
          ...state.singleProduct.testimonial,
          action.payload,
        ];
      }
    },
  },
});

export const { hadnleCurrentImgSRC, handleSingleProduct, addComment } =
  singleProductSlice.actions;

export default singleProductSlice.reducer;
