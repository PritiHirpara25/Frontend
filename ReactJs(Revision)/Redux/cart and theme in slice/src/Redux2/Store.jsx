import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice"; // Importing the reducer

export const store = configureStore({
    reducer: {
        Cart: CartReducer  
    }
});

export default store;