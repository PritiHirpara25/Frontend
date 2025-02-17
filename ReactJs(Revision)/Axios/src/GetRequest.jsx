import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const GetRequest = () => {

    const [data , setData] = useState([])

    const handleData = () => {
        let response = axios.get('http://localhost:3000/Profile')
        .then((response) => {setData(response.data)})
        .catch((error) => {console.log(error)})
    }

    useEffect(() => {
        handleData()
    } , [])

  return (
    <div>
        {data.map((item) => {
            return (
                <ul key={item.id}>
                    <li>{item.name}</li>
                    <li>{item.email}</li>
                    <li>{item.phone}</li>
                </ul>
            )
        })}
    </div>
  )
}

export default GetRequest