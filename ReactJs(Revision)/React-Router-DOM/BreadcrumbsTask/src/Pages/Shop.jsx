import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Shop = () => {
  return (
    <div>
      <Link to='product'>Product</Link>
      {/* <p>{location.pathname === '/shop/product' ? <Link to='product'>ProductPage<Link /> : <span>not found</span>}</p> */}
    </div>
  )
}

export default Shop