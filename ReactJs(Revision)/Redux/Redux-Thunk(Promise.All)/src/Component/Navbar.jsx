import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const cartItem = useSelector((state) => state.cart)

  return (
    <div className='bg-gray-300 p-5'>
        <ul className='flex justify-center space-x-20 text-xl'>
            <li><NavLink to='/'>Shop</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar