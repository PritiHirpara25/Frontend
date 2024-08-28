import React from "react";
import styles from './style.module.css'

export const Hello = {
    'backgroundColor': 'red',
    'color': 'white',
    'border': '2px solid black',
    'padding': '10px'
}
const Button = (props) => {

    return (
        <div>
            <button className="name">{props}</button>
        </div>
    )
}

export default Button