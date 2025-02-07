const initialState = 10;

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "BUY_ITEM": return state - 1;
        default: return state;
    }
}