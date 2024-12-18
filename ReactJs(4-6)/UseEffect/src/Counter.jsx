import React from 'react'
import { useState, useEffect } from 'react'

const Counter = () => {

    const [time, setTime] = useState(0)

    const [isRun, setIsRun] = useState(false)

    const [theme , setTheme] = useState(true)

    useEffect(() => {
        if (isRun && time > 0) {
            let timeid = setInterval(() => {
                setTime((prev) => prev - 1)
            }, 1000)
            return () => clearInterval(timeid)
        }
        else if (time === 0) {
            setIsRun(false)
        }
    }, [time, isRun])

    const formatTime = (e) => {
        let StrtoInt = parseInt(e.target.value)
        setTime(StrtoInt / 60)
    }


    return (
        <div className={`${theme ? 'bg-black text-white' : 'bg-white text-black'} w-fit flex justify-center mt-40`}>
            <div className={`p-8 shadow-2xl`}>

                <h1 className='p-2 font-semibold text-2xl text-center'>This is React Counter App.</h1><br />

                <div className='flex justify-center'>
                    <label htmlFor="" className='text-xl'>Time  : </label>
                    <input className='border border-black rounded-sm ml-2 text-black' type="number" placeholder='SetTime in Seconds' onChange={(e) => formatTime(e)} />
                </div><br />

                <div className='flex justify-center'>
                    <button className='btn' onClick={() => setIsRun(true)}>Start</button>
                    <button className='btn' onClick={() => setIsRun(false)}>Pause</button>
                    <button className='btn' onClick={() => setTime(0)}>Reset</button>
                    <button className='btn' onClick={() => setTheme(!theme)}>Theme</button>
                </div>

                <div className='flex justify-center'>
                    <h2 className='btn w-fit px-5'>{time > 0 ? `${time} remaining` : 'times up'}</h2>
                </div>

                
            </div>
        </div>
    )
}

export default Counter