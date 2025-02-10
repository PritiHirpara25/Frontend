import { BUY_CHOCO, BUY_PEN } from "./Constant";

const initialState = {
    choco : 10,
    pen : 20
};

export const ChocoReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CHOCO: return {...state , choco:state.choco - 1};
        default: return state;
    }
}

export const PenReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PEN: return {...state , pen:state.pen - 1};
        default: return state;
    }
}