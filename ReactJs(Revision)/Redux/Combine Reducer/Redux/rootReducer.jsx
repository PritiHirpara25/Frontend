import { combineReducers } from "redux";
import { ChocoReducer, PenReducer } from "./Reducer";

const rootReducer = combineReducers({
    chocoreducer : ChocoReducer,
    penreducer : PenReducer
})

export default rootReducer