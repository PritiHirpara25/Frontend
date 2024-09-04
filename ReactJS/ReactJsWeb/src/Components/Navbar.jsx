import React from 'react'
import NavLogo from '../assets/asset 1.svg'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { RxPerson } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBag2Line } from "react-icons/ri";

const Navbar = () => {
    return (
        <div>
            {/* header/Navbar */}
            <div className='bg-gray-500 h-20 flex items-center justify-between'>
                <div className='pl-10'>
                    <img src={NavLogo} alt="Image" />
                </div>
                <div>
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
                <div className='flex gap-3 text-2xl'>
                <IoSearch />
                <RxPerson />
                <FaRegHeart />
                <RiShoppingBag2Line />
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Navbar