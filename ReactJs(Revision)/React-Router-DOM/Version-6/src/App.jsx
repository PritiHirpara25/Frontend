import './App.css'
import Navbar from './Component/Navbar'
import Blog from './Pages/Blog'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import FAQ from './Pages/FAQ'
import AboutUs from './Pages/AboutUs'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'


const List = createBrowserRouter([
  {
    path:'/',
    element:<Navbar/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/shop',
        element:<Shop/>
      },
      {
        path:'/aboutus',
        element:<AboutUs/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/blog',
        element:<Blog/>
      },
      {
        path:'/faq',
        element:<FAQ/>
      },
    ]
  }
])

function App() {
  return (
    <>
    <RouterProvider router={List}></RouterProvider>
    </>
  )
}

export default App
