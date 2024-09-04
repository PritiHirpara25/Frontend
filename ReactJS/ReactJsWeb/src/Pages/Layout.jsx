import React from 'react'
import Home from './Home'
import Shop from './Shop'
import Products from './Products'
import Blog from './Blog'
import Error from './Error'
import Navbar from '../Components/Navbar'
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
                <Route path='/*' element={<Error/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Layout