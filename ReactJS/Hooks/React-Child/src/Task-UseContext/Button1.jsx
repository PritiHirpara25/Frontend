import React from 'react'

const Button1 = ({method}) => {
  return (
    <div onClick={()=>{method()}} className='w-[300px] flex items-center'>
        <button className='bg-black text-white p-3 rounded-md '>click</button>
    </div>
  )
}

export default Button1