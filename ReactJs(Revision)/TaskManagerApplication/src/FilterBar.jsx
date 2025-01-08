import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";

const FilterBar = ({setTodo}) => {

  const [searchdata, setSearchdata] = useState([])

  const handleSearch = () => {
    
  }

  return (
    <div>
      <h1>FilterBar</h1>
      <div className='bg-yellow-200 w-1/3 m-2 p-2'>
        <input type="search" onChange={(e) => {setSearchdata(e.target.value)}} className='w-64 p-0.5'/>
        <button className='p-3 -mt-1' onClick={handleSearch}><IoSearch /></button>
      </div>
      {searchdata}
    </div>
  )
}

export default FilterBar