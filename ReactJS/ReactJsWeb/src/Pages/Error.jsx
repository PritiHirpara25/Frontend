import React from 'react'
import { FaHouse } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='pt-36'>
        <h1 className='text-9xl text-blue-500 flex justify-center items-center'>404</h1>
        <span className='text-blue-500 font-bold flex justify-center items-center text-2xl'>NOT FOUND!!💁‍♀️</span>
        <div className='flex justify-center items-center'>
        <button className='flex bg-blue-500 py-1 px-3 rounded-full'><Link to='/'>Back to Home</Link><FaHouse  className='mt-0.5 ml-2'/></button>
        </div>
    </div>
  )
}

export default Error