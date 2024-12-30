import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Career = () => {

    const data = useLoaderData();

    console.log(data)

  return (
    <div>
        {
            data.map((item , index) => {
                return(
                    <div key={index}>
                        <span>{item.id}</span>
                        <span> . {item.title}</span>
                        <span> :- {item.body}</span>
                    </div>
                )
            })
        }
    </div>
  )
}

export const DataLoader = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return res.json();
}

export default Career