import React, { useState } from 'react'
import { useEffect } from 'react'


const Task1 = () => {
    
    const[data , setData] = useState([])
    // const[loading , setLoading] = useState()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(res => setData(res))
            // .then(console.log);
    })

//    { if(Loading) ? "Loading" : 'not loading'}

    return (
        <div>
                            <h1 className='text-2xl p-2 bg-gray-400 flex justify-center '>Products</h1>
            {
                data.map((item) => {
                    return (
                        <div className='flex'>
                            <p>{item.id} . </p>
                            <p>{item.title}</p>
                        </div>
                    )
                })
            }
        </div> 
    )
}

export default Task1