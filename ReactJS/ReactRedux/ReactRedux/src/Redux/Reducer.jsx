import { BUY_CHOCO } from "./Constant";
// import { BUY_TOYS } from "./Constant";

let initialValue = {
    numOfChoco : 20
}

const ChocoReducer = (state = initialValue , action) => {
    switch(action.type){
        case BUY_CHOCO:
            console.log('Choco Reducer action called...')
            return{
                ...state,
                numOfChoco : state.numOfChoco - 1
            }
            default:return state
    }
}

export default ChocoReducer
