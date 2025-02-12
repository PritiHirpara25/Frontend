import {  ADD_TO_CART, DARK_THEME, LIGHT_THEME } from "./Constant";

const initialState = {theme:"light"};


// const data = fetch("https://fakestoreapi.com/products").then(res => res.json()).then(data => setShop(data));

const initialCart =[{
    name:"Priti",
    age:24,
    city:"Surat"
}];

const ThemeReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIGHT_THEME: return {theme:state.theme = "light"};
        case DARK_THEME: return {theme:state.theme = "dark"};
        default: return state;
    }
}

export const CartReducer = (state = initialCart ,action) => {
    switch(action.type){
        case ADD_TO_CART: return [...state ,{   }];
        default : return state;
    }
}

export default ThemeReducer;