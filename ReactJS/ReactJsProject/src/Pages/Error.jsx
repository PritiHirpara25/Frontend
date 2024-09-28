import React from 'react'
// import { FaHouse } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    // <div className='pt-36'>
    //     <h1 className='text-9xl text-blue-500 flex justify-center items-center'>404</h1>
    //     <span className='text-blue-500 font-bold flex justify-center items-center text-2xl'>NOT FOUND!!💁‍♀️</span>
    //     <div className='flex justify-center items-center'>
    //     <button className='flex bg-blue-500 py-1 px-3 rounded-full'><Link to='/'>Back to Home</Link><FaHouse  className='mt-0.5 ml-2'/></button>
    //     </div>
    // </div>
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Error