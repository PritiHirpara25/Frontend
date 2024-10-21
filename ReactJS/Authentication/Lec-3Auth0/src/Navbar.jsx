import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-teal-700 p-5 text-white font-semibold'>
        <ul className='flex justify-around '>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/login'>Login</NavLink></li>
          <li><NavLink to='/signup'>Signup</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar