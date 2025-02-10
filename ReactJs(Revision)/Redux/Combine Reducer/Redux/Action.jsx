import { BUY_CHOCO, BUY_PEN } from "./Constant"

export const buy_choco = () => {
    return {
        type: BUY_CHOCO,
        info: "Buy Choco"
    }
}

export const buy_pen = () => {
    return {
        type: BUY_PEN,
        info: "Buy Pen"
    }
}