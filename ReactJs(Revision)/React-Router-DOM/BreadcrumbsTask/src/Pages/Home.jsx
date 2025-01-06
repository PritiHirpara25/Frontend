import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  console.log("Home")
  return (
    <div>
      <Link to="shop" className='bg-teal-300'>Shop</Link>
      <Outlet/>
    </div>
  )
}

export default Home