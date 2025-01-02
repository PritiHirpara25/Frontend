import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div>
      <span>Home</span>
      <Link to='/aboutus'> / Aboutus</Link>
      <Link to='/shop'> / Shop</Link>
      <Link to='/cart'> / Cart</Link>
    </div>
  )
}

export default Home