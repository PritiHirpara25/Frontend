import { BUY_CHOCO } from "./Constant";
import { BUY_TOYS } from "./Constant";

export const buy_choco = () => {
    console.log('buy_choco action called');
    return{
        type:BUY_CHOCO
    }
}

export const buy_toys = () => {
    console.log('buy_toys action called');
    return{
        type:BUY_TOYS
    }
}