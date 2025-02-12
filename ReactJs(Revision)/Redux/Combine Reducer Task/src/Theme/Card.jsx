import React from 'react'
import { useSelector } from 'react-redux'
import ThemeButton from './ThemeButton';

function Card() {

  const theme = useSelector(state => state.themereducer.theme);

  return (
    <div>
      <ThemeButton />
    <div className={`max-w-sm ${theme === 'dark' ? "bg-gray-800 text-white" : "bg-white text-black border border-black"}`}>
      <a href="#">
        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in
          reverse chronological order.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
        </a>
      </div>
    </div>
    </div>

  )
}

export default Card