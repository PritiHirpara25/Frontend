import { PRODUCT_SET } from './Constant'

export const ProductsetReducer = (state = [] ,action) => {
    switch(action.type){
        case PRODUCT_SET:return[...state , action.payload]
        default:return state
    }
}