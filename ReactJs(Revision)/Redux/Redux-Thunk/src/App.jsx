import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
