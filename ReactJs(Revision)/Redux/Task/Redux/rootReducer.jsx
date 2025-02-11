import { combineReducers } from "redux";
import { DarkReducer, LightReducer } from "./Reducer";

const rootReducer = combineReducers({
    darkreducer : DarkReducer,
    lightreducer : LightReducer
})

export default rootReducer