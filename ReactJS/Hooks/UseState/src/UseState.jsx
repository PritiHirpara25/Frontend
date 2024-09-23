import React from 'react'
import { useState } from 'react'

// const [state, setState] = useState(initialState)

const UseState = () => {
    const [count , setCount] = useState(0)
 
    // function sum(){
    //     return 5+5
    // }

    // console.log(sum())

    // const sum = () => {
    //     return 5+6
    // }

    // console.log(sum())

    // const handleIncrement = () => {
    //     console.log('increment')
    // }

    // const handleDecrement = () => {
    //     console.log('decrement')
    // }

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

    return (
    <div>
        <p>Count = {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default UseState