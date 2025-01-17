import './App.css'
import ShopProvider from './ShopProvider'
import ProductList from './ProductList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Wishlist from './Wishlist'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/shop' element={<ShopProvider><ProductList /></ShopProvider>}></Route>
          <Route path='/wishlist' element={<ShopProvider><Wishlist/></ShopProvider>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
