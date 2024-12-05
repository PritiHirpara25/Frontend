import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART, CART_TO_WISHLIST } from './Constant'

const CartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART: return [...state, action.payload]

        case REMOVE_TO_CART: {
            console.log('CartReducer Called')
        }
        case EMPTY_CART: {
            console.log('CartReducer Called')
        }

        // case CART_TO_WISHLIST : 
        // console.log('cart to wish called');
        // return(
        //     [...state,action.payload]
        // )
        
        default: return state
    }
}

export default CartReducer

// const cartToWishReducer = (state = [], action) => {
//     switch (action.type) {
//         case CART_TO_WISHLIST:
//             console.log('cartToWishReducer called')
//             return [...state, action.payload]
//         default: return state
//     }
// }

// export default cartToWishReducer