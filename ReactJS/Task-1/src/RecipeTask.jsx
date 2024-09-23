import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Recipe = () => {

  const [data, setData] = useState([])
  const [value, setValue] = useState()


  useEffect(() => {
      fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      // .then(res => console.log(res))
        .then(res => setData(res.recipes))
        .catch(err => console.log(err))
    }, [])
  
    // console.log(value);

  return (
    <div>
      <div className='flex justify-center mt-12'>
        <input type="search" placeholder='Search For Recipes' className='w-1/6 p-2 border-2 border-solid border-black' onChange={(e) => { setValue(e.target.value) }} />
        <button className='border-2 border-solid border-black p-2 ml-2 bg-gray-400'>Search</button>
      </div>

      <div className=' border-2 border-solid border-red-600 grid grid-cols-4 mt-16'>
        {data.map((list,index) => {
          return <div key={index}>
            {list.name === value ? <div className='text-left'>
              <p>{list.name}</p>
              <img src={list.image} alt="" className='h-1/4 w-1/4object-cover' />
              </div> : console.log('Search Not Found')}
          </div>
           })}
        </div>


        <div className='border-2 border-solid border-black grid grid-cols-3'>
          {data.map((list) => {
            return <div className=''>
             <p>{list.name}</p>
             <div>
               <img src={list.image} alt="" className='h-1/2 w-1/2 object-cover '/>
             </div>
            </div>
          })}
        </div>
       
    </div>
  )
}

export default Recipe












// import React, { useState } from 'react' 
// import { useEffect } from 'react' 
 
// const Recipe = () => { 
//   const [data , setData] = useState([]) 
//   const [value , setValue] = useState() 
 
//   useEffect(() => { 
//     fetch('https://dummyjson.com/recipes') 
//     .then(res => res.json()) 
//     .then(res => setData(res.recipes)) 
//     .then(res => console.log(res)); 
//   } , []) 
 
//   // console.log(value); 
 
//   return ( 
//     <div className=''> 
 
//         <div className='text-center mt-10'> 
//             <h1 className='text-xl'>Enter the Receipe that you want to Search</h1> 
//             <input type="search" name="" id="" className='my-6 border border-1 border-black text-xl py-2 px-2' onChange={(e) => {setValue(e.target.value)}} />  
//             <br /> 
//             <button className='btnDark'>Search</button> 
 
 
//       {/* Display Search Food Items */} 
//             <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>  
//               {data.map((item) => { 
//                 return <div className='w-fit' > 
//                   {item.name === value ? <div className="text-left"> 
//                     <p className='font-bold text-xl mb-3'>{item.name}</p> 
//                     <img src={item.image} alt="" className='w-full object-contain'/> 
//                   </div> : console.log("Search Not Found")}  
//                 </div> 
//             })} 
//             </div> 
       
       
//       {/* Display All Food Items */} 
//             <div className='mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>  
//               {data.map((item) => { 
//                 return <div className='border border-gray-300 w-fit p-5 rounded overflow-hidden' > 
//                   <p className='font-bold text-xl mb-3'>{item.name}</p> 
//                   <img src={item.image} alt="" className='w-full object-contain'/>  
//                 </div> 
//             })} 
//             </div> 
//         </div> 
 
//     </div> 
//   ) 
// } 
 
// export default Recipe