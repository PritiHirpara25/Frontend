import React from 'react'
import { Link  , useLocation} from 'react-router-dom'

const Navbar = () => {

  const location = useLocation()
  console.log(location)

  return (
    <div className='bg-lime-300 p-5 space-x-8 flex justify-center'>
      <Link to="/">Home</Link>
      <Link to="/aboutus">Aboutus</Link>
      <Link to="/post">Post</Link>
      <Link to="/cart">Cart</Link>
    </div>
  )
}

export default Navbar