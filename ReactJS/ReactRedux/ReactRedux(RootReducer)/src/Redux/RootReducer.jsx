import { combineReducers } from 'redux'
import  {ChocoReducer , ToysReducer} from './Reducer'

const RootReducer = combineReducers({
    choco:ChocoReducer,
    toys:ToysReducer    
}) 

export default RootReducer