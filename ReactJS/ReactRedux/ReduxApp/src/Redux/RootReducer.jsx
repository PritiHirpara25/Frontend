import { combineReducers } from 'redux'
import CartReducer from './CartReducer'
import {WishlistReducer} from './WishlistReducer'
import { ProductsetReducer } from './ProductReducer'

const RootReducer = combineReducers({  
    cart:CartReducer,
    wishlist:WishlistReducer,
    productset:ProductsetReducer
}) 

export default RootReducer