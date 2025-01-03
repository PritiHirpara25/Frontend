import { ADD_TO_CART , REMOVE_TO_CART , EMPTY_CART , CART_TO_WISHLIST , ADD_TO_WISHLIST , REMOVE_TO_WISHLIST , EMPTY_WISHLIST , WISHLIST_TO_CART } from "./Constant";

export const add_to_cart = (cartdata) => {
    return{
        type:ADD_TO_CART,
        payload:cartdata
    }
}

export const remove_to_cart = (item) => {
    return{
        type:REMOVE_TO_CART,
        payload:item
    }
}

export const empty_cart = () => {
    return{
        type:EMPTY_CART,
    }
}

export const cart_to_wishlist = (cartdata) => {
    return{
        type:CART_TO_WISHLIST,
        payload:cartdata
    }
}

export const add_to_wishlist = (wishlistdata) => {
    return{
        type:ADD_TO_WISHLIST,
        payload:wishlistdata
    }
}

export const remove_to_wishlist = (id) => {
    return{
        type: REMOVE_TO_WISHLIST,
        payload:id
    }
}

export const empty_wishlist = () => {
    return{
        type:EMPTY_WISHLIST,
    }
}

export const wishlist_to_cart = () => {
    return{
        type:WISHLIST_TO_CART,
    }
}

