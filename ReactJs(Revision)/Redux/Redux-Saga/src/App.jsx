import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      children:
        [

          {
            path: '/',
            element: <Shop />
          },
          {
            path: '/cart',
            element: <Cart />
          }

        ]
    }

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
