import React from 'react'
import {Link, Outlet } from 'react-router-dom'

const HelpLayout = () => {
    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aut iure eaque unde in? Facilis est voluptate similique, dolorem vel deleniti tempora nemo rem, doloremque omnis aliquam tenetur, expedita unde!</p>
            <nav className='py-5'>
                <Link to='faq' className='bg-slate-400 p-2 rounded-sm m-1'>FAQ</Link>
                <Link to='contactus' className='bg-slate-400 p-2 rounded-sm m-1'>Contact US</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default HelpLayout