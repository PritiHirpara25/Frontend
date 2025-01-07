import React from 'react'

const TaskList = ({ todo }) => {

  return (
    <div>
      <p>TaskList</p>
      <div className='bg-sky-300 w-1/2 rounded-md p-2 m-2'>
      {todo.length === 0 ? <div>No Data avilable</div> : 
        
          todo.map((item, index) => {
            return (
              <div key={index}>
                <h1>{item.titlevalue}</h1>
                <div className='ml-44'>
                  {item.statusvalue === "pending" ? <button className='bg-yellow-300 p-1 rounded-md px-2 mx-2'>Pending</button> : <button className='bg-green-500 p-1 rounded-md px-2 mx-2'>Completed</button>}
                  <button className='bg-blue-400 p-1 rounded-md px-2 mx-2'>Edit</button>
                  <button className='bg-red-400 p-1 rounded-md px-2 mx-2'>Delete</button>
                </div>
              </div>
            )
          })
      }

      </div>
    </div>


  )
}

export default TaskList