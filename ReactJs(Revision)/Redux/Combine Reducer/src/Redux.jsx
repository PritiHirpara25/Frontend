import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buy_choco, buy_pen } from '../Redux/Action';

const Redux = () => {

    const chocolate = useSelector(state => state.chocoreducer.choco);
    // console.log(chocolate);
    const penbar = useSelector(state => state.penreducer.pen);
    // console.log(penbar);

    const dispatch = useDispatch()

    return (
        <div>
            <p>{chocolate}</p>
            <button className='bg-green-500 p-2' onClick={() => dispatch(buy_choco())}>Click</button>
            <p>{penbar}</p>
            <button className='bg-green-500 p-2' onClick={() => dispatch(buy_pen())}>Click</button>
        </div>
    )
}

export default Redux
