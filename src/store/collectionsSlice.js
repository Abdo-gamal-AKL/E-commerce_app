import { createSlice } from "@reduxjs/toolkit";
import { collections } from "../server/data";

const initialState = {
  isLoading: false,
  isFailed: false,
  collections,
};

const collectionsSlice = createSlice({
  name: "collections",
  initialState,
});

export default collectionsSlice.reducer;
