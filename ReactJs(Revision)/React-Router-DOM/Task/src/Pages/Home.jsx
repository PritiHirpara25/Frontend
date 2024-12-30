import React from 'react'
import { useLoaderData } from 'react-router-dom'


const Home = () => {
  
  const data = useLoaderData();
  console.log(data)
  
  return (
    <div className='grid grid-cols-5 mx-auto w-fit'>
      {
        data.map((list , index) => {
          return (
            <div key={index} className='h-60 w-60 m-5 shadow-lg'>
              <img src={list.image} alt="" className='h-36 w-36 mx-auto' />
              <span className='line-clamp-2 m-2'>{list.title}</span>
              <span className='text-green-800 m-2'>{list.price}₹</span>
            </div>
          )
        })
      }
    </div>
  )
}

export const APIdata = async () => {
  const api = await fetch("https://fakestoreapi.com/products")
  return api.json();
}

export default Home