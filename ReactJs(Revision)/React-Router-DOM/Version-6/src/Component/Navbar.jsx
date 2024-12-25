import React from 'react'
import { NavLink , Outlet } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import logo from '../assets/react.svg'


const Navbar = () => {
  return (
    <>
    <div className='bg-gray-600 text-white p-5 flex justify-between text-xl'>
      <div className='pl-5'>
        <img src={logo} alt="" />
      </div>
      <div className='space-x-8'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/shop'>Shop</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
        <NavLink to='/aboutus'>AboutUs</NavLink>
        <NavLink to='/faq'>FAQ</NavLink>
      </div>
      <div className='text-2xl pr-5'>
        <NavLink to='/cart'><FaShoppingCart /></NavLink>
      </div>
    </div>
      <Outlet/>
    </>
  )
}

export default Navbar