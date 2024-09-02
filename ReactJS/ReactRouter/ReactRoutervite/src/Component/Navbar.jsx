import React from 'react'
import logo from '../assets/download.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-around bg-gray-400 h-28'>
        <div>
            <img className='h-14' src={logo} alt="image" />
        </div>
        <div>
            <nav>
                <ul className='flex gap-6'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutus">AboutUs</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">ContactUs</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar