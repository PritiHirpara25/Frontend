import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TaskList  = ({ todo, setTodo, newFilterData, setNewFilterData, setEditTask }) => {

  // Delete Task
  function DeleteTask(ind) {
    const removeTask = todo.filter((item, index) => index !== ind)
    setTodo(removeTask);
  }

  // Edit Task
  const handleEditTask = ((index) => {
    const findTodo = todo.find((todo) => todo.index === index)
    setEditTask(findTodo)
  })

  // pending or completed task btn
  function handleStatus(taskIndex) {
    setTodo((prev) => (
      prev.map((item, index) => {
        if (index === taskIndex) {
          if (item.statusvalue === 'Pending') {
            return { ...item, statusvalue: "Completed" }
          }
          else {
            return { ...item, statusvalue: "Pending" }
          }
        }
        else {
          return item
        }
      })
    ))
  }

  //save Edit Data
  const SaveEditData = (ind, updatedTask) => {
    setTodo((prev) => (
      prev.map((list, index) => (
        index === ind ? { ...list, titlevalue: updatedTask, editMode: false } : list
      ))
    ))
  }

  // //seach and filter functions

  // const DeleteFilterData = (ind) => {
  //   const newData = newFilterData.filter((item, index) => {
  //     index !== ind
  //   })
  //   setNewFilterData(newData)
  // }

  // const StatusFilterData = (ind) => {
  //   const UpdateStatus = newFilterData.map((item, index) => {
  //     if (index === ind) {
  //       if (item.statusvalue === 'Pending') {
  //         return { ...item, statusvalue: "Completed" }
  //       }
  //       else {
  //         return { ...item, statusvalue: 'Pending' }
  //       }
  //     }
  //     else {
  //       return item
  //     }
  //   })
  //   setNewFilterData(UpdateStatus)
  // }

  // const EditFilterData = (ind) => {
  //   setNewFilterData((prev) => {
  //     prev.map((list, i) => (
  //       i === todo ? { ...list, editMode: true } : task
  //     ))
  //   })
  // }

  // const SaveFilteredData = (ind, updatedTask) => {
  //   setNewFilterData((prev) => (
  //     prev.map((list, index) => (
  //       index === ind ? { ...list, titlevalue: updatedTask, editMode: false } : list
  //     ))
  //   ))
  // }

  return (
    <div>
      <div>
        <p>TaskList</p>
        <div className='bg-sky-300 w-1/3 rounded-md p-2 m-2'>
          {(todo.length === 0 && newFilterData.length === 0) && <div>No Data avilable</div>}

          {
            // newFilterData.length !== 0 ? newFilterData.map((item, index) => {
            //   item.editMode ? <div>
            //     <input type="text" defaultValue={item.titlevalue} onChange={(e) => {
            //       let newValue = e.target.value
            //       item.titlevalue = newValue
            //     }} />
            //     <button onClick={() => SaveEditData(index, item.titlevalue)}>Save</button>
            //   </div> :
            //     <div key={index}>
            //       <p>{item.titlevalue}</p>
            //       <div>
            //         <div>{item.statusvalue === "Pending" ? <button onClick={() => handleStatus(index)}>Pending</button> : <button onClick={() => handleStatus(index)}>Completed</button>}</div>
            //         <button className='bg-blue-400 rounded-md p-2 mx-2' onClick={() => handleEditTask(todo)}><FaEdit /></button>
            //         <button className='bg-red-400 rounded-md p-2 mx-2' onClick={() => { DeleteTask(index) }}><MdDelete /></button>
            //       </div>
            //     </div>
            // }) :
            todo.map((item, index) => {
              return (
                <div key={index} className='flex'>
                  <h1>{item.titlevalue}</h1>
                  <div className=''>
                    {item.statusvalue === "Pending" ? <button onClick={(e) => handleStatus(index)} className='bg-yellow-300 p-1 rounded-md px-2 mx-2'>Pending</button> : <button onClick={(e) => handleStatus(index)} className='bg-green-500 p-1 rounded-md px-2 mx-2'>Completed</button>}
                    <button className='bg-blue-400 rounded-md p-2 mx-2' onClick={() => handleEditTask(todo)}><FaEdit /></button>
                    <button className='bg-red-400 rounded-md p-2 mx-2' onClick={() => DeleteTask(index)}><MdDelete /></button>
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