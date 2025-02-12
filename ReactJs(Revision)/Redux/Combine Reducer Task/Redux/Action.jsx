import { DARK_THEME , LIGHT_THEME } from "./Constant"

export const dark_theme = () => {
    return {
        type: DARK_THEME,
        info: "Dark Theme"
    }
}

export const light_theme = () => {
    return {
        type: LIGHT_THEME,
        info: "Light Theme"
    }
}