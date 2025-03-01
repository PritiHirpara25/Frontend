import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className='bg-pink-300 flex justify-center space-x-32 p-5 text-2xl'>
                <NavLink to='/'>Shop</NavLink>
                <NavLink to='/cart'>Cart</NavLink>
            </div>
            <Outlet />
        </div>
    )
}

export default Navbar