import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Breadcrumbs from './Breadcrumbs'

const Navbar = () => {

  // const location = useLocation()
  // console.log(location)

  return (
    <div>
      <div className='bg-lime-300 p-5 space-x-8 flex justify-center'>
        <Link to="/">Home</Link>
        <Link to="/aboutus">Aboutus</Link>
        <Link to="/post">Post</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <main>
        <Breadcrumbs />
        {/* <Outlet /> */}
      </main>
    </div>
  )
}

export default Navbar