import { ADD_TO_CART , REMOVE_TO_CART , EMPTY_CART , CART_TO_WISHLIST , ADD_TO_WISHLIST , REMOVE_TO_WISHLIST , EMPTY_WISHLIST , WISHLIST_TO_CART } from "./Constant";

export const add_to_cart = () => {
    console.log('add_to_cart action called');
    return{
        type:ADD_TO_CART,
        info:'add_to_cart'
    }
}

export const remove_to_cart = () => {
    console.log('remove_to_cart action called');
    return{
        type:REMOVE_TO_CART,
        info:'remove_to_cart'
    }
}

export const empty_cart = () => {
    console.log('empty_cart action called');
    return{
        type:EMPTY_CART,
        info:'empty_cart'
    }
}

export const cart_to_wishlist = () => {
    console.log('cart_to_wishlist action called');
    return{
        type:CART_TO_WISHLIST,
        info:'cart_to_wishlist'
    }
}

export const add_to_wishlist = () => {
    console.log('add_to_wishlist action called');
    return{
        type:ADD_TO_WISHLIST,
        info:'add_to_wishlist'
    }
}

export const remove_to_wishlist = () => {
    console.log('remove_to_wishlist action called');
    return{
        type: REMOVE_TO_WISHLIST,
        info:'remove_to_wishlist'
    }
}

export const empty_wishlist = () => {
    console.log('empty_wishlist action called');
    return{
        type:EMPTY_WISHLIST,
        info:'empty_wishlist'
    }
}

export const wishlist_to_cart = () => {
    console.log('cart_to_wishlist action called');
    return{
        type:WISHLIST_TO_CART,
        info:'wishlist_to_cart'
    }
}

