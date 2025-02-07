const redux =   require('redux')

// store
const createStore = redux.createStore;

//Action
const buy_item_1 = () => {
    return{
        type:"BUY_ITEM_1",
        info:"Buy Choco Items"
    }
}

const buy_item_2 = () => {
    return{
        type:"BUY_ITEM_2",
        info:"Buy Choco Items"
    }
}

// initial state
const initialState = [{
    item1:10,
    item2:20
}];

// Reducer
const ChocoReducer = (state = initialState , action) => {
    switch(action.type){
        case 'BUY_ITEM_1':return [{...state[0],item1:state[0].item1 - 1}]
        case 'BUY_ITEM_2':return [{...state[0],item2:state[0].item2 - 1}]
        default: return state
    }
}

// create store
const store = createStore(ChocoReducer)

store.subscribe(()=>console.log("UpdatedState:",store.getState()));

console.log("Initial State:",store.getState())
// store.dispatch({type:"BUY_ITEM_1"});
store.dispatch(buy_item_1())
store.dispatch(buy_item_1())
store.dispatch(buy_item_2())
store.dispatch(buy_item_2())    
