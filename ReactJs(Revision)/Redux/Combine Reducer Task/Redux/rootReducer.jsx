import { combineReducers } from "redux";
import ThemeReducer from "./Reducer";

const rootReducer = combineReducers({
    themereducer : ThemeReducer
})

export default rootReducer