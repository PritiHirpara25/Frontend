import React, { useEffect, useRef, useState } from 'react'

const Counter = () => {

    const[count , setCount] = useState(0)

    const[isRun , setIsRun] = useState(false)

    const refInput = useRef()
    console.log(refInput)

    useEffect(() => {
        if(isRun){
            refInput.current = setInterval(() => {
                setCount((count) => count + 1)
            } , 1000)
        }
        else{
            clearInterval(refInput.current)
        }

        return () => clearInterval(refInput.current)
    },[isRun])


    const handleStart = () => {
        setIsRun(true)
    }
    const handlePause = () => {
        setIsRun(false)
    }
    const handleReset = () => {
        setIsRun(false)
        setCount(0)
    }

  return (
    <div>
        <p>{count}</p>
        <button onClick={() => clearInterval(refInput.current)} className='border-2 border-solid border-black bg-red-300 p-1.5'>Counter</button>
        <button onClick={handleStart} className='p-1.5 bg-orange-300 m-2 border-2 border-solid border-black'>Start</button>
        <button onClick={handlePause} className='p-1.5 bg-orange-300 m-2 border-2 border-solid border-black'>Pause</button>
        <button onClick={handleReset} className='p-1.5 bg-orange-300 m-2 border-2 border-solid border-black'>Reset</button>
    </div>
  )
}

export default Counter