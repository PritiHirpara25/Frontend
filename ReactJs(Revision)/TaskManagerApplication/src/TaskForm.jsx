import React, { useState } from 'react'

const TaskForm = ({addTask}) => {

  const [titlevalue, setTitlevalue] = useState('')
  const [descriptionvalue, setDescriptionvalue] = useState('')
  const [statusvalue, setStatusvalue] = useState('pending')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask({titlevalue,descriptionvalue,statusvalue})
  }

  return (
    <div>
      <h1>TaskForm</h1>
      <form onSubmit={handleSubmit} >

        <div className='bg-orange-200 w-fit border-2 border-solid border-orange-400 p-2 h-fit'>

          <div className='border-2 border-solid border-orange-500 m-2'>
            <label className='px-2'>Title : </label>
            <input type="text" required onChange={(e) => setTitlevalue(e.target.value)} className='border-2 border-solid border-orange-400 rounded-md m-2' /><br />
          </div>

          <div className='border-2 border-solid border-orange-500 m-2'>
            <label className='px-2'>Description : </label>
            <input type="text" required onChange={(e) => setDescriptionvalue(e.target.value)} className='border-2 border-solid border-orange-400 rounded-md m-2' /><br />
          </div>

          <div className='border-2 border-solid border-orange-500 m-2 p-2'>
            <label htmlFor="" className='m-2'>Status : </label>
            <select name="" id="" onChange={(e) => setStatusvalue(e.target.value)} className='rounded-md border-2 border-solid border-orange-400 p-0.5'>
              <option value="" className=''>Pending</option>
              <option value="" className=''>Completed</option>
            </select>
          </div>

          <div>
            <button className='bg-orange-400 border-2 border-solid border-orange-600 m-2 px-2 py-1 rounded-md'>Submit</button>
          </div>

        </div>

      </form>
    </div>
  )
}

export default TaskForm