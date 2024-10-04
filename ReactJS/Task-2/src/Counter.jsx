import React, { useState } from 'react'

const Counter = () => {

    const[add , setAdd] = useState(0)

    const increment = () => {
        setAdd((add) => add + 1);
      };

      const decrement = () => {
        setAdd((add) => add - 1);
      };

  return (
    <div className='flex flex-col w-fit justify-center'>
        {add} <br />
        <button onClick={increment} className='border-2 border-black bg-red-200'>Increment</button><br />
        <button onClick={decrement} className='border-2 border-black bg-red-200'>Decrement</button>
    </div>
  )
}

export default Counter