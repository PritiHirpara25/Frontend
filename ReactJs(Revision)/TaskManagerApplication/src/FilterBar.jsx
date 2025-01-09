import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";

const FilterBar = ({setTodo , setFilterData}) => {

  const [searchdata, setSearchdata] = useState('')
  const[selectValue , setSelectVlaue] = useState('All')

  const handleSearch = () => {
    setFilterData({searchdata , selectValue})
    setSearchdata('')
  }

  return (
    <div>
      <h1>FilterBar</h1>

      <div className='bg-yellow-200 w-1/3 m-2 p-2'>
        <input type="search" onChange={(e) => {setSearchdata(e.target.value)}} value={searchdata} className='w-64 p-0.5'/>
        <button className='p-3 -mt-1' onClick={handleSearch}><IoSearch /></button>
      </div>

    <select name="" id="" onChange={(e) => setSelectVlaue(e.target.value)} value={selectValue}>
      <option value="All">All</option>
      <option value="Pending">Pending</option>
      <option value="Completed">Completed</option>
    </select>

    </div>
  )
}

export default FilterBar