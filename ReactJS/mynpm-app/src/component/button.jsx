import React from "react";
import styles from './style.module.css'

export const Hello = {
    'backgroundColor': 'red',
    'color': 'white',
    'border': '2px solid black',
    'padding': '10px'
}
const Button = () => {

    return (
        <div>
            <button className="{styles.Hello}">Click Me</button>
        </div>
    )
}

export default Button