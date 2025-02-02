import React from 'react'
import Home from './Home'
import Shop from './Shop'
import Products from './Products'
import Blog from './Blog'
import Error from './Error'
import  AboutUs from './AboutUs'
import FAQ from './FAQ'
import Contact from './Contact'
import Checkout from './Checkout'
import Navbar from '../Components/Navbar'
import Login from '../Pages/Login'
import { BrowserRouter , Routes , Route} from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/shop' element={<Shop/>}></Route>
                <Route path='/products' element={<Products/>}></Route>
                <Route path='/blog' element={<Blog/>}></Route>
                <Route path='/aboutus' element={<AboutUs/>}></Route>
                <Route path='/faq' element={<FAQ/>}></Route>
                <Route path='/contactus' element={<Contact/>}></Route>
                <Route path='/checkout' element={<Checkout/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/*' element={<Error/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Layout