import React from 'react'
import NavLogo from '../assets/asset 1.svg'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { RxPerson } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBag2Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { IoReorderThreeOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className='sticky top-0 left-0 right-0 bg-white z-[888] headertransition'>
            {/* header/Navbar */}
            <div className='h-20 flex items-center justify-between px-10'>
                <div className='lg:hidden text-3xl pl-4'>
                    <IoReorderThreeOutline />
                </div>
                <div className=''>
                    <img src={NavLogo} alt="Image" />
                </div>
                <div>
                    <nav className='max-lg:hidden'>
                        <ul className='flex gap-9'>
                            <li><Link to="/">Home
                            <div class="bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                            </Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li className='relative group'>
                                <Link to="/#" className='flex'>
                                    Pages
                                    {/* <div className='absolute '></div> */}
                                    <div className='pl-2 pt-1.5'><IoIosArrowDown /></div>
                                </Link>
                                <div className='absolute hidden group-hover:block z-10 p-2 pt-7'>
                                    <Link to="/aboutus" className='block bg-white p-2'>
                                        Aboutus
                                    </Link>
                                    <Link to="/faq" className='block bg-white p-2'>
                                        FAQ
                                    </Link>
                                    <Link to="/contactus" className='block bg-white p-2'>
                                        ContactUs
                                    </Link>
                                </div>
                            </li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/checkout">BuyNow</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className='flex gap-3 text-2xl'>
                    <IoSearch className='max-sm:hidden' />
                    <RxPerson className='max-md:hidden' />
                    <FaRegHeart className='max-md:hidden' />
                    <RiShoppingBag2Line className='max-sm:hidden' />
                </div>
            </div>
        </div>
    )
}

export default Navbar