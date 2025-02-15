import { configureStore, createSlice } from "@reduxjs/toolkit"

const initialState = {
    initialData : [],
    initialCart : []
}

const CartSlice = createSlice({
    name:"Cart",
    initialState,
    reducers:{
        addData : (state,action) => {state.initialData = action.payload}  ,
        addLike : (state,action) => {state.initialCart.push(action.payload)}
        // addLike : (state,action) => ({...state , initialCart : [...state.initialCart , action.payload]})
    }
})

export const {addData , addLike} = CartSlice.actions

export default CartSlice.reducer


