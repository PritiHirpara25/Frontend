import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name:'product',
    initialState:{items:[]},
    reducers:{
        fetchProducts:() =>{},
        addProduct : (state , action) => {
            state.items = action.payload;
        }
    }
})

export const {addProduct , fetchProducts} = ProductSlice.actions;

export default ProductSlice.reducer