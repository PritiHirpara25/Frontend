import React from 'react'
import logo from '../assets/download.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-around items-center h-28 bg-gray-500'>
        <div>
            <img src={logo} alt="Image" className='h-16' />
        </div>
        <div>
            <nav>
                <ul className='flex gap-8'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/aboutus'>AboutUs</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/contactus'>ContactUs</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/shop'>Shop</Link></li>
                    <li><Link to='/cart'>Cart</Link></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar