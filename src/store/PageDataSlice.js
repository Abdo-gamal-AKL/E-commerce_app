import { createSlice } from "@reduxjs/toolkit";
import { products } from "../server/data";

const DaynamicPageSlice = createSlice({
  name: "pageData",
  initialState: {
    data: null,
    isLoading: false,
    isFailed: false,
  },
  reducers: {
    setDaynamicPage: (state, action) => {
      const { section, pageName } = action.payload;
      if (section === "page") {
        state.data = products.filter((item) => item.page.includes(pageName));
      } else {
        state.data = products.filter((item) => item.category === pageName);
      }
    },
  },
});

export const { setDaynamicPage } = DaynamicPageSlice.actions;

export default DaynamicPageSlice.reducer;
