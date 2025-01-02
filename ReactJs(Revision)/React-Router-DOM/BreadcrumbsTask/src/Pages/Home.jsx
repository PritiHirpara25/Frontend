import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Home = () => {

  const location = useLocation()
  console.log(location)

  return (
    <div>
      <span>This is Home Page</span><br />
      <Link to='shop'>Shop</Link>
      <Outlet/>
      {/* <p>current path : {location.pathname}</p> */}
      <p>{location.pathname === "/shop" ? <Link to='shop'>/ShopPage</Link> : <div>Not Found</div>}</p>
    </div>
  )
}

export default Home
