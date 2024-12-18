import React from 'react'

const BlogCard = ({data}) => {

  return (
    <div>  
    <div className='text-center grid grid-cols-4 gap-5'>
      {
       data.map((item , index) => {
          return (
            <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
              <a href="#" className='flex justify-center p-2'>
                <img className="rounded-t-lg h-56" src={item.image} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default BlogCard