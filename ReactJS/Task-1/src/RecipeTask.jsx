import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Recipe = () => {

  const [data, setData] = useState([])
  const [value, setValue] = useState()


  useEffect(() => {
      fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      // .then(res => console.log(res))
        .then(res => setData(res.recipes))
        .catch(err => console.log(err))
    }, [])
  
    // console.log(value);

  return (
    <div>
      <div className='flex justify-center mt-12'>
        <input type="search" placeholder='Search For Recipes' className='w-1/6 p-2' onChange={(e) => { setValue(e.target.value) }} />
        <button className='border-2 border-solid border-black p-2 ml-2 bg-gray-400'>Search</button>
      </div>

      <div className=' mt-16'>
        {data.map((list,index) => {
          return <div key={index}>
            {list.name === value ? <div className='text-left'>
              <p className='font-bold'>{list.name}</p>
              <img src={list.image} alt="" className='h-1/2 w-1/2 object-cover' />
              <p>CookTimeMinutes : {list.cookTimeMinutes}</p>
              <p>Ingredients : {list.ingredients}</p>
              <p>Instructions : {list.instructions}</p>
              </div> 
              : }
          </div>
           })}
        </div>


        <div className=' grid grid-cols-3'>
          {data.map((list,index) => {
            return <div key={index}>
             <p className='font-bold'>{list.name}</p>
             <div>
               <img src={list.image} alt="" className='h-1/2 w-1/2 object-cover '/>
             </div>
            </div>
          })}
        </div>
       
    </div>
  )
}

export default Recipe
