import React from 'react'

const UserStatus = (name , value) => {
  return (
    <div>
        <h1 className='text-2xl'>Conditional Rendering</h1>
        <p>{online.value}</p>
        <p>{offline.value}</p>
    </div>
  )
}

export default UserStatus