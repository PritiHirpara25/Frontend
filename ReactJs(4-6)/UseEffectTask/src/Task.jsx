import React from 'react'
import { useState, useEffect } from 'react';
import { AnimalList } from './Data';

const Task = () => {

  const [index, setIndex] = useState(0);

  const [toggle, setToggle] = useState(false)

  const [isSlide, setIsSlide] = useState(false)

  /* prevoius button */
  const handlePrev = () => {
    if (index > 0) {
      console.log("Prev Btn");
      setIndex((prevState) => prevState - 1);
      setIsSlide(true)
      setTimeout(() => {
        setIsSlide(false)
      }, 1000)
    }
  };

  /* next button */
  const handleNext = () => {
    if (index == 9) {
      setIndex(0);
      console.log('Next Btn')
    } else {
      setIndex((prevState) => (prevState + 1));
      setIsSlide(true)
      setTimeout(() => {
        setIsSlide(false)
      }, 1000)
    }
  };

  const List = [AnimalList[index]];

  // useEffect((),[])

  return (
    <div>
      <h1 className="bg-green-500 text-2xl text-center">
        This is UseState.
      </h1>
      <div className="flex justify-center">
        <div>
          <button className="bg-green-300 p-2 rounded-sm" onClick={handlePrev}>Previous</button>
        </div>
        <div>
          {/* <div className={`card ${slide ? 'animate-slide' : ''}`}> */}
          {List.map((item) => {
            return (
              <>
                <div className={`${isSlide ? 'animate-slide' : ''} max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-96`}>
                  <a href="#">
                    <img
                      className="rounded-t-lg h-52 w-full object-cover object-top"
                      src={item.image}
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.name}
                      </h5>
                    </a>
                    {
                      toggle && (
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                          {item.description}
                        </p>
                      )
                    }
                    <button onClick={() => { setToggle((toggle) => !toggle) }} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      {
                        toggle ? 'hide' : 'Show More'
                      }
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div>
          <button className="bg-green-300 p-2 rounded-sm" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Task
































// import React, { useEffect, useRef } from 'react'
// import { AnimalList } from './Data'
// import { useState } from 'react';

// function Task() {

//     let [index,setIndex] = useState(0);
    
//     let[isSlide,setIsSlide] = useState(false);
    
//     let data = [AnimalList[index]];

//     function handleNext(){
//         if(index == 9 ){
//             setIndex(0)
//         }
//         else{
//             setIndex((prev)=>prev + 1)
//             setIsSlide(true)
//             setTimeout(()=>{
//                 setIsSlide(false)
//             },1000)
//         }
//     }

//     function handlePrev(){
//        if(index == 0){
//         setIndex(0)
//        }
//        else{
//         setIndex((prev)=>prev - 1)
//        }
//     }
//     console.log('re reder state component')

//   return (
//    <div className='h-screen  justify-around items-center '>
//     <button className="prev btn" onClick={handlePrev}>Prev</button>
//     <button className="next btn" disabled={isSlide?true:false} onClick={handleNext}>Next</button>
//     <div className='w-full flex items-center justify-around border-2 border-black'>
//     <div className={`card ${isSlide?'anime':''}`}>
//         {data.map((item)=>(
//             <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//             <a href="#">
//                 <img
//                     className="rounded-t-lg h-52 w-full object-cover object-top"
//                     src={item.image}
//                     alt=""
//                 />
//             </a>
//             <div className="p-5">
//                 <a href="#">
//                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                         {item.name}
//                     </h5>
//                 </a>
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                     {item.description}
//                 </p>
//                 <a
//                     href="#"
//                     className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                 >
//                     Read more
//                     <svg
//                         className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 14 10"
//                     >
//                         <path
//                             stroke="currentColor"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M1 5h12m0 0L9 1m4 4L9 9"
//                         />
//                     </svg>
//                 </a>
//             </div>
//             </div>
//         ))}
//     </div>
    
//     </div>
//    </div>
//   )
// }

// export default Task