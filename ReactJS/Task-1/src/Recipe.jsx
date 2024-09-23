import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Recipe = () => {

  const [data , setData] = useState([])

  useEffect(()=>{
      fetch('https://api.sampleapis.com/recipes/recipes')
      .then(res => res.json())
      .then(res => setData(res.recipes))
      .catch(err => console.log(err))
  },[])

  return (
    <div>
    <div className='border-'>
        <input type="search" placeholder='Search For Recipes' className='w-1/6 p-2 border-2 border-solid border-black' />
        <button className='border-2 border-solid border-black p-2 ml-2 bg-gray-400'>Search</button>
    </div>

    {/* <div>
        {data.map((list) => {
          return
          <p>{list.name}</p>
        }) 
        }
    </div> */}
    </div>
  )
}

export default Recipe