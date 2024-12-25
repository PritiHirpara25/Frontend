import './App.css'
import Navbar from './Component/Navbar'
import Blog from './Pages/Blog'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import FAQ from './Pages/FAQ'
import AboutUs from './Pages/AboutUs'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/aboutus' element={<AboutUs />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/faq' element={<FAQ />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
