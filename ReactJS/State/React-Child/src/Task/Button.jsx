import React from 'react'

const Button = ({method}) => {
  return (
    <div onClick={()=>{method()}}>
        <button className='bg-red-200'>click</button>
    </div>
  )
}

export default Button