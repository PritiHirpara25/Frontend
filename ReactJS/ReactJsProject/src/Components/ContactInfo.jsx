import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className='block lg:flex justify-evenly container-section py-10 lg:py-20'>
        <div>
            <h1 className='text-3xl mb-4 tracking-wide'>Visit Our Store</h1>
            <h4 className='font-semibold text-sm my-4'>Address</h4>
            <p className='text-sm text-slate-500'>66 Mott St, New York, New York, Zip Code: 10006, AS</p>
            <h4 className='font-semibold text-sm my-4'>Phone</h4>
            <p className='text-sm text-slate-500'>(623) 934-2400</p>
            <h4 className='font-semibold text-sm my-4'>Email</h4>
            <p className='text-sm text-slate-500'>EComposer@example.com</p>
            <h4 className='font-semibold text-sm my-4'>Open Time</h4>
            <p className='text-sm text-slate-500'>Our store has re-opened for shopping,</p>
            <p className='text-sm my-4 text-slate-500'>exchange Every day 11am to 7pm</p>
            <div className='flex gap-6'>
                <FaFacebookF className='hover:text-red-600 mt-5' />
                <RiTwitterXLine className='hover:text-red-600 mt-5' />
                <SiInstagram className='hover:text-red-600 mt-5' />
                <FaTiktok className='hover:text-red-600 mt-5' />
                <FaPinterest className='hover:text-red-600 mt-5' />
            </div>
        </div>
        <div className='mt-12 lg:mt-0'>
            <h1 className='text-3xl mb-4 tracking-wide'>Get in Touch</h1>
            <p className='text-sm text-slate-500'>If you’ve got great products your making or looking to work with us then drop us a line.</p>
            <form action="" className='lg:mt-4 mt-2'>
                <div className='block md:flex gap-3'>
                    <p className='w-full'>
                    <input type="text" name="" id="" placeholder='Name *' className='border-1 border border-gray-200 p-3 w-full rounded text-sm mt-3' />
                    </p>
                    <p className='w-full'>
                        <input type="email" placeholder='Email *' className='border-1 border border-gray-200 p-3 w-full rounded text-sm mt-3' />
                    </p>
                </div>
                <textarea name="" id=""  placeholder='Message' rows={5} className='border-1 border border-gray-200 p-3 w-full rounded mt-3 text-sm'></textarea>
                <button className='btn btnDark rounded w-full justify-center mt-4'>Send</button>
            </form>
        </div>
    </div>
  )
}

export default ContactInfo