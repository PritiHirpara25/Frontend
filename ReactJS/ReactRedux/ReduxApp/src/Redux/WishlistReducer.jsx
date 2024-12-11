import { ADD_TO_WISHLIST, REMOVE_TO_WISHLIST, EMPTY_WISHLIST, WISHLIST_TO_CART, CART_TO_WISHLIST } from './Constant'

export const WishlistReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST: return [...state , action.payload]
        

        // case REMOVE_TO_WISHLIST:
        //     const removewishdata = state.filter((state) => state.id !== action.payload)
        //     console.log('wishlistReducer Called', removewishdata)
        //     return removewishdata;

            case REMOVE_TO_WISHLIST: {
                const removetowishlist = state.filter((item) => (item.id !== action.payload));
                console.log('wishlistReducer Called', removetowishlist);
                return removetowishlist;
            }

        case EMPTY_WISHLIST:
            return state = []


        case WISHLIST_TO_CART: {
        }

        case CART_TO_WISHLIST:
            return (
                [...state, action.payload]
            )

        default: return state
    }
}