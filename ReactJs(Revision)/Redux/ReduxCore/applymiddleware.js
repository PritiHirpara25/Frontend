const redux = require('redux')
const applyMiddleware = redux.applyMiddleware
const reduxlogger = require("redux-logger")
const logger = reduxlogger.createLogger()

// redux store

const createStore = redux.createStore;

// redux action

const buy = () => {
    return{
        type : "BUY_ITEM",
        info:'buy item'
    }
}

// initialstate

const initialState = 10;

// Reducer

const Reducer = (state = initialState , action) => {
    switch(action.type){
        case "BUY_ITEM" : return state - 1
        default : return state;
    }
}

// create store

const store = createStore(Reducer , applyMiddleware(logger));

store.subscribe(() => console.log("State",store.getState()))

store.dispatch(buy())
store.dispatch(buy())
store.dispatch(buy())
