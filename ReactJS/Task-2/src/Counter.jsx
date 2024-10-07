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
    <div className='flex justify-center border-2 border-black mt-48 bg-slate-200 mx-96'>
    {/* <div className='flex flex-col w-fit justify-center'> */}
    <div className='flex flex-col w-fit justify-center py-5'>
        <p className='flex justify-center bg-slate-100'>{add}</p> <br />
        <button onClick={increment} className='border-2 border-black bg-slate-400 p-2'>Increment</button><br />
        <button onClick={decrement} className='border-2 border-black bg-slate-400 p-2'>Decrement</button>
    </div>
    </div>
  )
}

export default Counter