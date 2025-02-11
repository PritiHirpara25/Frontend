import {  DARK_THEME, LIGHT_THEME } from "./Constant";

const initialState = {theme:"light"};

export const ThemeReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIGHT_THEME: return {theme:state.theme = "light"};
        case DARK_THEME: return {theme:state.theme = "dark"};
        default: return state;
    }
}