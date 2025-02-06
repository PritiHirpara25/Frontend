const redux =   require('redux')

const createStore = redux.createStore;

const buy_choco = () => {
    return{
        type:"BUY_CHOCO",
        info:"Buy Choco Items"
    }
}

const initialState = 20;

const ChocoReducer = (state = initialState , action) => {
    switch(action.type){
        case 'BUY_CHOCO':return state - 1
        default: return state
    }
}

const store = createStore(ChocoReducer)

store.subscribe(()=>console.log("UpdatedState:",store.getState()));

console.log(store.getState())
store.dispatch(buy_choco())
store.dispatch({type:"BUY_CHOCO"});
store.dispatch({type:"BUY_CHOCO"});
store.dispatch({type:"BUY_CHOCO"});