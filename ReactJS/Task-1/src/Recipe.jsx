import React from 'react'

const Recipe = () => {
  return (
    <div className='border-'>
        <input type="search" placeholder='Search For Recipes' className='w-1/6 p-2 border-2 border-solid border-black' />
        <button className='border-2 border-solid border-black p-2 ml-2 bg-gray-400'>Search</button>
    </div>
  )
}

export default Recipe