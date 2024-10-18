import React from 'react'
import Home from './Home'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Shop from './Shop'
import Login from './Login'
import Cart from './Cart'
import Navbar from '../Components/Navbar'
import Profile from './Profile'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Blog from './Blog'
const List = createBrowserRouter([
    {
        path:'/',
        element:<Navbar/>,
        children:[
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/aboutus",
                element: <AboutUs />
            },
            {
                path: "/contactus",
                element: <ContactUs />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/profile",
                element: <Profile />
            },
        ]
    }
])

const Layout2 = () => {
    return (
        <div>
            <RouterProvider router={List}></RouterProvider>
        </div>
    )
}

export default Layout2