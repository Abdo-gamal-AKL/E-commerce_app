import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import collectionsReducer from "./collectionsSlice";
import DaynamicPageReducer from "./PageDataSlice";
import singleProductReducer from "./singleProductSlice";
import authReducer from "./authSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
    reducer: {
        productsReducer,
        collectionsReducer,
        DaynamicPageReducer,
        singleProductReducer,
        authReducer,
        cartReducer,
    },
});
