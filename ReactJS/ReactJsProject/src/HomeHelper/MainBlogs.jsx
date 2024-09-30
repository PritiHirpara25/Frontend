import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


const MainBlogs = ({ image , title    }) => {
  return (
      <div className='mt-10 grid grid-cols-3 w-screen'>
        <div className='relative'>
          <img src={image} className='object-cover h-full w-full' alt="" />
          <div className='absolute bottom-[18px] left-[18px] bg-white text-black font-bold text-xs h-8 flex px-4 rounded-sm'><button>ACCESSORIES</button></div>
        </div>
        {/* <div className='flex flex-col pt-[30px] '>
            <p className='hover:text-green-600'>{title}</p>
            <p className='flex items-center gap-1 underline decoration-2 hover:text-green-600'>Read more<GoArrowUpRight className=''/></p>
        </div> */}
      </div>
  )
}

export default MainBlogs