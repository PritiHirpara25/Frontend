import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './ProductSlice'

const Redux = () => {

   const data = useSelector((state) => state.counter)

    const dispatch = useDispatch()

    return (
        <div>
        <p>{data}</p>
        <button onClick={() => {dispatch(increment())}}>Increment</button>
        <button onClick={() => {dispatch(decrement())}}>Decrement</button>
        </div>
    )
}

export default Redux
