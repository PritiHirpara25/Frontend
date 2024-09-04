import React, { useState } from 'react'

const UseState2 = () => {
    const [count , setCount] = useState(0)

    const handleIncrement = () => {
        console.log('increment');
        return setTimeout(() => setCount(count + 1) , 2000)
    }

    const handleDecrement = () => {
        console.log('decrement');
        return setTimeout(() => setCount(count - 1) , 2000)
    }

    return (
    <div>
        <p>Count = {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default UseState2