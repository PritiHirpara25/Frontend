import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TaskList = ({ todo, setTodo }) => {

  function DeleteTask(ind) {
    const removeTask = todo.filter((item, index) => index !== ind)
    setTodo(removeTask);
  }

  function handleStatus(taskIndex) {
    setTodo((prev) => (
      prev.map((item,index) => {
       if(index === taskIndex){
        if (item.statusvalue === 'Pending') {
          return { ...item, statusvalue: "Completed" }
        }
        else {
          return { ...item, statusvalue: "Pending" }
        }
       }
       else{
        return item
       }
      })
    ))
  }

  return (
    <div>
      <div>
        <p>TaskList</p>
        <div className='bg-sky-300 w-1/3 rounded-md p-2 m-2'>
          {todo.length === 0 ? <div>No Data avilable</div> :
            todo.map((item, index) => {
              return (
                <div key={index} className='flex'>
                  <h1>{item.titlevalue}</h1>
                  <div className=''>
                    {item.statusvalue === "Pending" ? <button onClick={(e) => handleStatus(index)} className='bg-yellow-300 p-1 rounded-md px-2 mx-2'>Pending</button> : <button onClick={(e) => handleStatus(index)} className='bg-green-500 p-1 rounded-md px-2 mx-2'>Completed</button>}
                    <button className='bg-blue-400 rounded-md p-2 mx-2'><FaEdit /></button>
                    <button className='bg-red-400 rounded-md p-2 mx-2' onClick={() => { DeleteTask(index) }}><MdDelete /></button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div>

      </div>
    </div>
  )
}

export default TaskList