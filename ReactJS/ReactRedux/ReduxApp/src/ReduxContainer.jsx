import React from 'react'
import { buy_choco , buy_toys  } from "./Redux/Action";
import { useSelector , useDispatch } from "react-redux";

const ReduxContainer = () => {

    const data1 = useSelector(state => state.choco.numOfChoco)
    const data2 = useSelector(state => state.toys.numOfToys)
    // const data = useSelector(state => state)

    console.log('reduxcontainer data' , data1)
    console.log('reduxcontainer data' , data2)
    // console.log('StoreData' , data);

    const dispatch = useDispatch()

  return (
    <div>
        <span className='font-medium text-4xl pl-9'>{data1}</span>
        <div>
        <button onClick={() => dispatch(buy_choco())} className='bg-gray-400 rounded-md p-1.5'>Click CHOCO</button>
        </div>
        <span className='font-medium text-4xl pl-9'>{data2}</span>
        <div>
        <button onClick={() => dispatch(buy_toys())} className='bg-gray-400 rounded-md p-1.5'>Click TOYS</button>
        </div>
    </div>
  )
}

export default ReduxContainer