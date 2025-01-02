import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Breadcrumbs from './Component/Breadcrumbs'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import AboutUs from './Pages/AboutUs'
import Post from './Pages/Post'
import Product from './Pages/Product'
import Navbar from './Component/Navbar'


function App() {

  return (
    <>
      <BrowserRouter>
        {/* <Breadcrumbs /> */}
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Shop' element={<Shop/>} />
          <Route path='/Aboutus' element={<AboutUs/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/post' element={<Post/>} />
          <Route path='/product' element={<Product/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
