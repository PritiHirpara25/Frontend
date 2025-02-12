import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Navbar'
import Card from './Theme/Card'
import Shop from './ShoppingCart/Shop'

const Layout = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Navbar />,
            children: [{
                path: '/card',
                element: <Card />
            },
            {
                path: '/shop',
                element: <Shop />
            }
            ]
        }
    ])


    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    )
}

export default Layout