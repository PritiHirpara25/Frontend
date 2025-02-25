import {createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk("products/fetchProducts" ,async () => {
    const res = await axios.get("http://localhost:3000/profile");
    return res.data;
})

const ProductSlice = createSlice({
    name:"products",
    initialState:{
        items:[],
        status:'idle'
    },
    extraReducers:(builder) => {
        builder
        .addCase(fetchProducts.pending , (state) =>{
            state.status = "Loading";
        })
        .addCase(fetchProducts.fulfilled , (state , action) => {
            state.status = "successded";
            state.items = action.payload 

        })
        .addCase(fetchProducts.rejected , (state) => {
            state.status = "failed"
        })
    }
})

export default ProductSlice.reducer