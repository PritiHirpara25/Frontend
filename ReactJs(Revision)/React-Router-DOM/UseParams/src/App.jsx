import './App.css'
import Navbar from './Component/Navbar'
import Blog from './Pages/Blog'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import FAQ from './Pages/FAQ'
import AboutUs from './Pages/AboutUs'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HelpLayout from './Pages/HelpLayout'
import ContactUs from './Pages/ContactUs' 
import CareerLayout from './Pages/CareerLayout'
import Career, { DataLoader } from './Pages/Career'
import CarrerDetails, { CarrerDetailsData } from './Pages/CarrerDetails'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/help' element={<HelpLayout/>}>
          <Route path='faq' element={<FAQ/>}/>
          <Route path='contactus' element={<ContactUs/>}/>
        </Route>
        <Route path='career' element={<CareerLayout/>}>
          <Route index element={<Career/>} loader={DataLoader}/>
          <Route path=":id" element={<CarrerDetails/>} loader={CarrerDetailsData}/>
        </Route>
        <Route path='/cart' element={<Cart/>} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
