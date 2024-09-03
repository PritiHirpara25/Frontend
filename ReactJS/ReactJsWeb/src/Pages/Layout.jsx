import React from 'react'
import Home from './Home'
import Navbar from '../Components/Navbar'
import { BrowserRouter , Routes , Route} from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Layout