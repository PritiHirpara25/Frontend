import React from 'react'
import logo from '../assets/download.png'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div>
            <div className='flex items-center justify-around bg-gray-400'>
                <div>
                    <img className='h-16' src={logo} alt="image" />
                </div>
                <div>
                    <nav>
                        <ul className='flex gap-6'>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/aboutus">AboutUs</NavLink></li>
                            <li><NavLink to="/shop">Shop</NavLink></li>
                            <li><NavLink to="/blog">Blog</NavLink></li>
                            <li><NavLink to="/contactus">ContactUs</NavLink></li>
                            <li><NavLink to="/cart">Cart</NavLink></li>
                            <li><NavLink to="/login" onClick={() => loginWithRedirect()}>Login</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Navbar
