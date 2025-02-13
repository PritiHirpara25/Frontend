import { ADD_TO_CART, DARK_THEME , LIGHT_THEME } from "./Constant"

export const dark_theme = () => {
    return {
        type: DARK_THEME,
        info: "Dark Theme"
    }
}

export const light_theme = () => {
    return {
        type: LIGHT_THEME,
        info: "Light Theme"
    }
}

export const add_to_cart = (item) => {
    return{
        type:ADD_TO_CART,
        payload:item,
        info:"Add to Cart"
    }
}