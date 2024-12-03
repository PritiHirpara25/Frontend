import { ADD_TO_CART , REMOVE_TO_CART , EMPTY_CART , CART_TO_WISHLIST } from './Constant'

export const CartReducer = (state = [] , action) => {
    switch(action.type){
        case ADD_TO_CART: {
            console.log('CartReducer Called');
        }
        case REMOVE_TO_CART:{
            console.log('CartReducer Called')
        }
        case EMPTY_CART:{
            console.log('CartReducer Called')
        }
        case CART_TO_WISHLIST : {
            console.log('CartResucer called')
        }
        default:return state
    }
}