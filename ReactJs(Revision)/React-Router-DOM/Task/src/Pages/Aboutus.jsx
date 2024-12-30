import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div>
      <p className='text-2xl'>This is AboutUs Page.</p>
        <Link to='contactus' className='underline m-2'>Contact Us</Link>
        <Link to='help' className='underline m-2'>Help</Link>
        <Outlet/>
    </div>
  )
}

export default AboutUs