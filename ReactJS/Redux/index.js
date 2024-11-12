const redux = require('redux')
const createStore = redux.createStore

/* constant */

const BUY_CHOCOLATE = 'BUY_CHOCOLATE'

/* Redux Action */

function buy_chocolate(){
    return{
        type:BUY_CHOCOLATE,
        info:'first redux action'
    }
}

/* initialState for redux */

const initialState = {
    NumofChocolate : 20,
}

/* Redux Reducer */

const ChocoReducer = (state = initialState , action) => {
    switch(action.type){
        case BUY_CHOCOLATE : return{
            ...state,
            NumofChocolate:state.NumofChocolate - 1
        }
        default : return state
    }
}

/* Redux Store */

const store = createStore(ChocoReducer)

console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(buy_chocolate())
store.dispatch(buy_chocolate())
store.dispatch(buy_chocolate())

unsubscribe()