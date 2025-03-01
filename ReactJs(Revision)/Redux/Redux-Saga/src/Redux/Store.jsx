import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from '../Redux/ProductSlice';
import CartReducer from '../Redux/CartSlice'
import createSagaMiddleware from "redux-saga";
import rootsaga from "./Saga";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer:{
        product:ProductReducer,
        cart:CartReducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootsaga)

export default store