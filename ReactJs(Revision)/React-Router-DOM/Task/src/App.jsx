import './App.css'
import Home from './Pages/Home'
import Shop ,{APIdata} from './Pages/Shop'
import AboutUs from './Pages/AboutUs'
import { Route, createBrowserRouter , createRoutesFromElements , RouterProvider} from 'react-router-dom'
import Navbar from './Component/Navbar'
import Cart from './Pages/Cart'
import Error from './Pages/Error'
import ContactUs from './Pages/ContactUs'
import Help from './Pages/Help'
import ShopLayout from './Pages/ShopLayout'
import ShopDetails, { ShopDetailsData } from './Pages/ShopDetails'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Navbar />}>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<ShopLayout />}  >
          <Route index element={<Shop/>} loader={APIdata} />
          <Route path=':id' element={<ShopDetails/>} loader={ShopDetailsData}/>
         </Route>
        <Route path='/aboutus' element={<AboutUs />} >
          <Route path='contactus' element={<ContactUs/>}/>
          <Route path='help' element={<Help/>}/>
        </Route>
        <Route path='*' element={<Error />} />
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
