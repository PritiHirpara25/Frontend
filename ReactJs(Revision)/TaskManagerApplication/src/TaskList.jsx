import React from 'react'

const TaskList = (title , description) => {

  return (
    <div>
      <p>TaskList</p>
      <div className=''>

        <div className='flex bg-sky-300 w-1/2 rounded-md p-2 m-2'>
          <p className='p-1'>{title.item}</p>
          <p className='p-1'>{description.item}</p>
          {/* <div className='ml-44'>
            <button className='bg-yellow-300 p-1 rounded-md px-2 mx-2'>Pending</button>
            <button className='bg-blue-400 p-1 rounded-md px-2 mx-2'>Edit</button>
            <button className='bg-red-400 p-1 rounded-md px-2 mx-2'>Delete</button>
          </div> */}
        </div>
      </div>
      {
        // TaskData.map((item , index) => {
        //   return(
        //     <div className='bg-red-400' key={index}>
        //       {/* <span>{index}</span> */}
        //       <p>{index} . Title : {item.title}</p>
        //       <p>Description : {item.description}</p>
        //     </div>
        //   )
        // })
      }
    </div>

  )
}

export default TaskList