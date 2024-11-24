import React from 'react'
import { buy_choco  } from "./Redux/Action";
import { useSelector , useDispatch } from "react-redux";

const ReduxContainer = () => {

    const data = useSelector(state => state.numOfChoco)

    console.log('reduxcontainer data' , data)

    const dispatch = useDispatch()

  return (
    <div>
        <span className='font-medium text-4xl pl-9'>{data}</span>
        <div>
        <button onClick={() => dispatch(buy_choco())} className='bg-gray-400 rounded-md p-1.5'>Click CHOCO</button>
        </div>
    </div>
  )
}

export default ReduxContainer