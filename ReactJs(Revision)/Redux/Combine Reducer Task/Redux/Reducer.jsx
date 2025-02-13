import {  ADD_TO_CART, DARK_THEME, LIGHT_THEME } from "./Constant";

const initialState = {theme:"light"};

const initialCart =[];

const ThemeReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIGHT_THEME: return {theme:state.theme = "light"};
        case DARK_THEME: return {theme:state.theme = "dark"};
        default: return state;
    }
}

// export const CartReducer = (state = initialCart ,action) => {
//     switch(action.type){
//         case ADD_TO_CART: return [...state ,{
//             name:"Priti",
//             age:24,
//             city:"Surat"
//         }];
//         default : return state;
//     }
// }

export const CartReducer = (state = initialCart ,action) => {
    switch(action.type){
        case ADD_TO_CART: return [...state ,action.payload];
        default : return state;
    }
}

export default ThemeReducer;