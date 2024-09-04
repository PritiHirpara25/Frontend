import React, { useState } from 'react'

const UseState3 = () => {
    const [count , setCount] = useState(0)

    const handleIncrement = () => {
        console.log('increment');
        return setTimeout(() => setCount(state =>state + 1) , 2000)
    }

    const handleDecrement = () => {
        if(count > 0){
            console.log('decrement');
            return setTimeout(() => setCount(state => state - 1) , 2000)
        }
        else{
            setCount(count)
        }
    }

    return (
    <div>
        <p>Count = {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default UseState3