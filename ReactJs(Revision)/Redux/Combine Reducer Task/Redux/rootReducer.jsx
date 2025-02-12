import { combineReducers } from "redux";
import ThemeReducer, { CartReducer } from "./Reducer";

const rootReducer = combineReducers({
    themereducer : ThemeReducer,
    cartreducer:CartReducer
})

export default rootReducer