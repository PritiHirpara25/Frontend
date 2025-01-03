import React, { useState } from 'react'

const UseCallback = () => {

    const[count , setCount] = useState(0);

    const Increment = () => {
        console.log("Increment called")
        setCount((prevstate) => prevstate + 1)
    }

    const Decrement = () => {
        console.log("Decrement called")
        setCount((prevstate) => prevstate - 1)
    }
  return (
    <div>
        <p>count : {count}</p>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default UseCallback