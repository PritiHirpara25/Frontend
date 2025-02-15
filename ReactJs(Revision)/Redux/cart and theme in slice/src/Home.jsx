import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData } from './Redux2/CartSlice';

const Home = () => {

  const data = [
    {
      name: "Priti",
      age: 24,
      city: "Surat"
    },
    {
      name: "Bansi",
      age: 20,
      city: "Mumbai"
    },
    {
      name: "AVI",
      age: 85,
      city: "Ujjain"
    },
    {
      name: "Princy",
      age: 24,
      city: "Guj"
    }
  ]

  const dispatch = useDispatch();

  return (
    <div>
      Welcome Home

      <div>
        <button onClick={() => dispatch(addData(data))}>Add InitialData</button>
      </div>
    </div>
  )
}

export default Home