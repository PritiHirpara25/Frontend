import React, { useState } from 'react'

const FilterBar = () => {

  const [searchdata , setSearchdata] = useState([])

  

  return (
    <div>
      <h1>FilterBar</h1>
      <input type="search" className='bg-teal-200 p-2 text-teal-800 border-2 border-solid border-teal-800 rounded-md w-1/4' onChange={setSearchdata} />
      {searchdata}
    </div>
  )
}

export default FilterBar