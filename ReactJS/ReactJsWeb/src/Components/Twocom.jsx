import React from 'react';
import smartassistant from '../assets/asset 36.jpeg';
import trueearbuds from '../assets/asset 37.jpeg';

const Twocom = () => {
  return (
    <div className='container-section'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8'>
        <div className='relative overflow-hidden twoComponent'>
          <img src={smartassistant} className=" rounded-2xl object-cover h-full w-full twoComponentImg" alt="" />
          <div className='absolute bottom-3 left-1/4 right-1/4 text-center'>
            <span className='text-xs font-bold'>HOT ACCESSORIES</span>
            <h4 className='text-2xl font-extrabold mb-5 max-lg:text-xl'>Smart Assistant</h4>
            <button className='mb-5 rounded-full py-2 px-6' style={{ backgroundColor: "var(--primary-color)" }}>Shop now</button>
          </div>
        </div>
        <div className='relative overflow-hidden twoComponent'>
          <img src={trueearbuds} className="rounded-2xl h-full w-full object-cover twoComponentImg" alt="" />
          <div className='absolute bottom-3 left-1/4 right-1/4 text-center'>
            <span className='text-xs font-bold'>FAST AND FREE SHIPPING</span>
            <h4 className='text-2xl font-extrabold mb-5 max-lg:text-xl'>True Earbuds</h4>
            <button className='mb-5 rounded-full py-2 px-6' style={{ backgroundColor: "var(--primary-color)" }}>Shop now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Twocom