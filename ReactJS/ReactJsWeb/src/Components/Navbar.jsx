import React from 'react'
import NavLogo from '../assets/asset 1.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            {/* header/Navbar */}
            <div className='bg-gray-500 h-24 flex items-center'>
                <div className='pl-10'>
                    <img src={NavLogo} alt="Image" />
                </div>
                <div className='pl-64'>
                    <nav>
                        <ul className='flex gap-9'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/pages">Pages</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/buynow">BuyNow</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Navbar