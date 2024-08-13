import React from 'react'
import image1 from './image.jpeg';
// import { ArrowUpRight } from 'lucide-react'
// import {Hellostyle} from './style.css';
import styles from './style.module.css';

export function CardThree() {
  return (
    <div className="w-[300px] rounded-md border">
      <img
        src={image1}
        alt="Laptop"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          About Macbook &nbsp; 
          {/* <ArrowUpRight className="h-4 w-4" /> */}
        </h1>
        <p className="mt-3 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p>
        <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Macbook
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Apple
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Laptop
          </span>
        </div>
        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button><br />
      </div>
        {/* <button className='Hello' style={{backgroundColor:"red",padding:"10px", color:'white', border:"4px solid blue" , marginTop:"10px"}}>Click Me</button> */}
        <button className={styles.Hello} >Click Me</button>

    </div>
  )
}
