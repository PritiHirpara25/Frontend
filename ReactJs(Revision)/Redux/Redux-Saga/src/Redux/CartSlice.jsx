import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const existingitem = state.find((item) => item.product_id === action.payload.product_id)
            if (!existingitem) {
                state.push(action.payload)
            }
        },
        removeToCart:(state , action) =>{
            return state.filter((item) => item.product_id !== action.payload)
        },
        emptyCart:()=>{
            return[]
        }
    }
})

export const { addToCart , removeToCart } = CartSlice.actions

export default CartSlice.reducer