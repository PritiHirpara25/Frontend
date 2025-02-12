import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
    <div>
        <ul className='bg-gray-400 flex justify-evenly h-15 p-5 mb-5'>
            <NavLink to="/">Home</NavLink>
            <NavLink to='/card'>Card</NavLink>
            <NavLink to='/shop'>Shop</NavLink>
            <NavLink to='/cart'><FaRegHeart/></NavLink>.

        </ul>

    </div>
    <div>
        <Outlet/>
    </div>
    </>
  )
}

export default Navbar