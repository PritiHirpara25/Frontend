// import React from 'react'
// import Home from './Home'
// import AboutUs from './AboutUs'
// import Blog from './Blog'
// import ContactUs from './ContactUs'
// import Login from './Login'
// import Shop from './Shop'
// import Cart from './Cart'
// import Navbar from '../Components/Navbar'
// import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

// const List = createBrowserRouter([
//     {
//         path: '/',
//         element: <Navbar />,
//         children: [
//             {
//                 path: '/',
//                 element: <Home />
//             },
//             {
//                 path: '/aboutus',
//                 element: <AboutUs />
//             },
//             {
//                 path: '/contactus',
//                 element: <ContactUs />
//             },
//             {
//                 path: '/blog',
//                 element: <Blog />
//             },
//             {
//                 path: '/shop',
//                 element: <Shop />
//             },
//             {
//                 path: '/cart',
//                 element: <Cart />
//             },
//             {
//                 path: '/login',
//                 element: <Login />
//             },
//         ]
//     }
// ])

// const Layout2 = () => {
//     return (
//         <div>
//             <RouterProvider router={List}></RouterProvider>
//         </div>
//     )
// }

// export default Layout2



import React from 'react'
import Home from './Home'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Shop from './Shop'
import Login from './Login'
import Cart from './Cart'
import Navbar from '../Components/Navbar'
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
                element: <Contact />
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