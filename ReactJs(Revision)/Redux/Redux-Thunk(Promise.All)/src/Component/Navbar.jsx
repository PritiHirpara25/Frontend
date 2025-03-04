import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const cartItem = useSelector((state) => state.cart)

  return (
    <div>
        <ul>
            <li><NavLink to='/'>Shop</NavLink></li>
            <li><NavLink to='/cart'>Cart({cartItem.length})</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar