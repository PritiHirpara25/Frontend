import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {

  return (
    <div>
      <span>This is Home Page</span><br />
      <Link to='shop'>Shop</Link>
      <Outlet/>
      <p>{location.pathname}</p>
      <p>{location.pathname === "/shop" ? <div><Link to='shop'>/ShopPage</Link></div> : <div>Not Found</div>}</p>
    </div>
  )
}

export default Home
