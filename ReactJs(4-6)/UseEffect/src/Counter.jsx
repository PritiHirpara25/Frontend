import React from 'react'
import { useState , useEffect } from 'react'

const Counter = () => {

    const[time , setTime] = useState(0)

    const[isRun , setIsRun] = useState(false)

    useEffect(() => {
        if(isRun && time > 0){
            let timeid = setInterval(() => {
                setTime((prev) => prev - 1)
            },1000)
            return () => clearInterval(timeid)
        }
        else if(time === 0){
            setIsRun(false)
        }
    },[time , isRun])

  return (
    <div>
        <h1 className=''>This is React Counter App.</h1>
        <input type="number"  placeholder='SetTime in Seconds' onChange={(e) => setTime(parseInt(e.target.value))}/>
        <button className='btn' onClick={() => setIsRun(true)}>Start</button>
        <button className='btn' onClick={() => setIsRun(false)}>Pause</button>
        <button className='btn' onClick={() => setTime(0)}>Reset</button>
        <h2>{time > 0 ? `${time} remaining` : 'times up'}</h2>
    </div>
  )
}

export default Counter