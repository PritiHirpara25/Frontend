import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className='bg-violet-300 p-5 text-xl flex justify-center space-x-5'>
      <Link to='/'>Home</Link>
      <Link to='/shop'>Shop</Link>
      <Link to='/wishlist' className='p-1.5'><FaRegHeart/></Link>
    </div>
  )
}

export default Navbar
