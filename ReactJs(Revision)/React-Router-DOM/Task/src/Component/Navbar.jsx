import React from 'react'
import { Outlet } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import logo from '../assets/react.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='bg-gray-600 text-white p-5 flex justify-between text-xl'>
        <div className='pl-5'>
          <img src={logo} alt="" />
        </div>
        <div className='space-x-8'>
          <Link to='/'>Home</Link>
          <Link to='/shop'>Shop</Link>
          <Link to='/aboutus'>AboutUs</Link>
        </div>
        <div className='text-2xl pr-5'>
          <Link to='/cart'><FaShoppingCart /></Link>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Navbar