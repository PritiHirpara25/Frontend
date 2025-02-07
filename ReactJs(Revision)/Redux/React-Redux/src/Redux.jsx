import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buy } from '../Redux/Action'

const Redux = () => {

    const data = useSelector(state => state);
    // console.log(data)

    const dispatch = useDispatch()

    return (
        <div>
            <p>{data}</p>
            <button className='bg-green-500 p-2' onClick={() => dispatch(buy())}>Click</button>
        </div>
    )
}

export default Redux
