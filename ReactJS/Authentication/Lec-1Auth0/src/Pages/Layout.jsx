import React from 'react'
import Home from './Home'
import AboutUs from './AboutUs'
import Blog from './Blog'
import ContactUs from './ContactUs'
import Login from './Login'
import Shop from './Shop'
import Cart from './Cart'
import Navbar from '../Components/Navbar'
import { BrowserRouter , Routes ,Route } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/aboutus' element={<AboutUs/>}></Route>
                <Route path='/blog' element={<Blog/>}></Route>
                <Route path='/contactus' element={<ContactUs/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/shop' element={<Shop/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Layout