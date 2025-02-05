import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import logo from '../assets/react.svg'
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

const Navbar = () => {

  const location = useLocation()
  // console.log(location)

  const {isAuth} = useAuth()

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
        {isAuth ? "" : <NavLink to='/login'>Login</NavLink>}
        {isAuth ? <NavLink to='/signup'>Signup</NavLink> : ""}
        {isAuth ? "" : <NavLink to='/profile'>Profile</NavLink> }
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