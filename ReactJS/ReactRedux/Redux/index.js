const redux = require('redux')
const createStore = redux.createStore

/* constant */

const BUY_CHOCOLATE = 'BUY_CHOCOLATE'
const BUY_TOYS = 'BUY_TOYS'

/* Redux Action */

function buy_chocolate(){
    return{
        type:BUY_CHOCOLATE,
        info:'first redux action'
    }
}   

function buy_toys(){
    return{
        type:BUY_TOYS,
        info:'second redux action'
    }
}   

/* initialState for redux */

const initialState = {
    NumofChocolate : 20,
}

const initialState1 = {
    NumofToys : 30,
}

/* Redux Reducer */

const ChocoReducer = (state = initialState , action) => {
    switch(action.type){
        case BUY_CHOCOLATE : return{
            NumofChocolate:state.NumofChocolate - 1
        }
        default : return state
    }
}

const ToysReducer = (state1 = initialState1 , action) => {
    switch(action.type){
        case BUY_TOYS : return{
            NumofToys:state1.NumofToys - 1
        }
        default : return state1
    }
}

/* Redux Store */

const store = createStore(ChocoReducer)
console.log('initial state' , store.getState())
store.subscribe(() => console.log(store.getState()))
store.dispatch(buy_chocolate())

const store1 = createStore(ToysReducer)
console.log('initial state1' , store1.getState())
store1.subscribe(() => console.log(store1.getState()))
store1.dispatch(buy_toys())


