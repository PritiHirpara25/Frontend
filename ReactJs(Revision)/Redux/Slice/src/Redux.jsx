import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment , decrement } from './ProductSlice'

const Redux = () => {

   const data = useSelector((state) => state.counter)

    const dispatch = useDispatch()

    return (
        <div>
        <p className='m-5 bg-red-300 w-fit p-2 rounded-full'>{data}</p>
        <button className='p-2 bg-red-200 m-5 ' onClick={() => {dispatch(increment())}}>Increment</button>
        <button className='p-2 bg-red-200 m-5 ' onClick={() => {dispatch(decrement())}}>Decrement</button>
        </div>
    )
}

export default Redux
