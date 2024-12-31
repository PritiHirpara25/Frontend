import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import logo from '../assets/react.svg'

const Navbar = () => {
  return (
    <div>
      <div className='bg-gray-600 text-white p-5 flex justify-between text-xl'>
        <div className='pl-5'>
          <img src={logo} alt="" />
        </div>
        <div className='space-x-8'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/aboutus'>AboutUs</NavLink>
          <NavLink to='/help'>Help</NavLink>
          <NavLink to='/career'>Career</NavLink>
        </div>
        <div className='text-2xl pr-5'>
          <NavLink to='/cart'><FaShoppingCart /></NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Navbar