import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Shop = () => {
  console.log("Shop")
  return (
    <div>
      <Link to="product" className='bg-teal-300'>Product</Link>
      <Outlet/>
    </div>
  )
}

export default Shop