import { createSlice } from "@reduxjs/toolkit";
import { products } from "../server/data";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchResult: null,
    },
    reducers: {
        setSearchResult: (state, action) => {
            let result = [];

            products.forEach((item) => {
                item.title.split(" ").forEach((title) => {
                    if (title.toLowerCase() === action.payload.toLowerCase()) {
                        result.push(item);
                    }
                });
            });
            state.searchResult = result;
        },
    },
});

export const { setSearchResult } = searchSlice.actions;

export default searchSlice.reducer;
