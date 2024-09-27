import React from 'react'
import discount from '../assets/asset 38.jpeg'

const Discount = () => {
  return (
    <div>
      <section className='container-section'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='imgHover'>
            <img src={discount} alt="" className='rounded-t-lg lg:rounded-t-none lg:rounded-l-lg rounded-l-none h-full w-full object-cover' />
          </div>
          <div style={{ backgroundColor: "var(--primary-color)" }} className='p-10'>
            <div className='text-xs md:text-md font-semibold leading-4'>ULTIMATE APPLE ACCESSORY.</div>
            <div className='text-3xl lg:text-5xl font-medium my-5'>60% Discount</div>
            <p className='text-xs md:text-base text-gray-600'>Find the latest and greatest gadgets to enhance your electronic devices.</p>
            <div className='mt-6'><strong className='font-black'>Hungry Up !</strong> Deals end in:</div>
            <button className='bg-black mt-8 text-white rounded-full text-[14px] font-medium px-6 py-3'>Shop now</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Discount















// w-[710px] h-[510px]