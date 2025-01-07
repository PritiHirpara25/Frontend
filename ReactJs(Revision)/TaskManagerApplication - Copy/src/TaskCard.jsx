import React from 'react'

const TaskCard = () => {
  return (
    <div>
      <h1>TaskCard</h1>
      <div className='border-2 border-solid border-gray-600 w-1/3 bg-gray-200'>
        <p className='border border-solid border-gray-500 m-2 p-2 bg-gray-300'>Title:</p>
        <p className='border border-solid border-gray-500 m-2 p-2 bg-gray-300'>Description:</p>
        <p className='border border-solid border-gray-500 m-2 p-2 bg-gray-300'>Status:</p>
        
      </div>
    </div>
  )
}

export default TaskCard