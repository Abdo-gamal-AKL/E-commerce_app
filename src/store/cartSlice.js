import { createSlice } from "@reduxjs/toolkit";

const cartFromLocalStorage = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartWhenUserLogout: cartFromLocalStorage,
        isFoundedBefore: false,
    },
    reducers: {
        addProductToCart: (state, action) => {
            const isFoundedBeforeArr = state.cartWhenUserLogout.filter(
                (item) => item.product.id === action.payload.product.id
            );
            if (isFoundedBeforeArr.length > 0) {
                state.isFoundedBefore = true;
            } else {
                state.cartWhenUserLogout.push({
                    product: action.payload.product,
                    quantity: action.payload.quantity,
                });
                state.isFoundedBefore = false;
            }
            localStorage.setItem(
                "cart",
                JSON.stringify(state.cartWhenUserLogout)
            );
        },
        deleteProduct: (state, action) => {
            state.cartWhenUserLogout = state.cartWhenUserLogout.filter(
                (item) => item.product.id !== action.payload
            );
            localStorage.setItem(
                "cart",
                JSON.stringify(state.cartWhenUserLogout)
            );
        },
        handleQuantity: (state, action) => {
            state.cartWhenUserLogout.forEach((item) => {
                if (item.product.id === action.payload.id) {
                    if (action.payload.type === "INC") {
                        item.quantity += 1;
                    } else if (action.payload.type === "DEC") {
                        if (item.quantity !== 1) {
                            item.quantity -= 1;
                        } else {
                            return;
                        }
                    }
                }
                localStorage.setItem(
                    "cart",
                    JSON.stringify(state.cartWhenUserLogout)
                );
            });
        },
        handleCompleteBuying: (state) => {
            state.cartWhenUserLogout = [];
            localStorage.clear();
        },
    },
});

export const {
    addProductToCart,
    deleteProduct,
    handleQuantity,
    handleCompleteBuying,
} = cartSlice.actions;

export default cartSlice.reducer;
