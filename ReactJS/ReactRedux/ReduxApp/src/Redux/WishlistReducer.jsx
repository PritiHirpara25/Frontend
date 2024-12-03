import { ADD_TO_WISHLIST , REMOVE_TO_WISHLIST , EMPTY_WISHLIST , WISHLIST_TO_CART } from './Constant'

export const WishlistReducer = (state = [] , action) => {
    switch(action.type){
        case ADD_TO_WISHLIST: {
            console.log('WishlistReducer Called');
        }
        case REMOVE_TO_WISHLIST:{
            console.log('wishlistReducer Called')
        }
        case EMPTY_WISHLIST:{
            console.log('wishlistReducer Called')
        }
        case WISHLIST_TO_CART:{
            console.log('wishlistReducer Called')
        }
        default:return state
    }
}