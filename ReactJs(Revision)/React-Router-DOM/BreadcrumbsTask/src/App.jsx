import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import AboutUs from "./Pages/AboutUS"
import Post from './Pages/Post'
import Product from './Pages/Product'
import Navbar from './Component/Navbar'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='shop' element={<Shop />}>
              <Route path='product' element={<Product />} />
            </Route>
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/post' element={<Post />} />
          <Route path='/aboutus' element={<AboutUs />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
