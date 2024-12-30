import './App.css'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import AboutUs from './Pages/AboutUs'
import { Route, createBrowserRouter , createRoutesFromElements , RouterProvider} from 'react-router-dom'
import Navbar from './Component/Navbar'
import Cart from './Pages/Cart'
import Error from './Pages/Error'
import ContactUs from './Pages/ContactUs'
import Help from './Pages/Help'
import { APIdata } from './Pages/Home'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Navbar />}>
        <Route path='/' element={<Home />} loader={APIdata} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/aboutus' element={<AboutUs />} >
          <Route path='contactus' element={<ContactUs/>}/>
          <Route path='help' element={<Help/>}/>
        </Route>
        <Route path='*' element={<Error />} />
        {/*
        <Route path='career' element={<CareerLayout />}>
          <Route index element={<Career />} loader={DataLoader} />
        </Route> */}
        <Route path='/cart' element={<Cart />} />
      </Route>
    )
  )

  return (
    <>
      {/* <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
