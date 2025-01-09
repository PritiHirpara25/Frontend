import React, { useEffect } from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useState } from 'react';

const TaskList = ({ todo, setTodo, FilterData }) => {

  const{searchdata , selectValue} = FilterData;

  const [filterData, setFilterData] = useState([])

  // Delete Task
  function DeleteTask(ind) {
    const removeTask = todo.filter((item, index) => index !== ind)
    setTodo(removeTask);
  }

  // Edit Task
  // const handleEditTask = ((index) => {
  //   const findTodo = todo.find((todo) => todo.index === index)
  //   setEditTask(findTodo)
  // })

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

  // filter data
  const filteredData = () => {
    todo.filter((list) => {
      if(filterData.searchdata && selectValue === 'All'){
        if(FilterData.searchdata === list.titlevalue){
          setFilterData(list)
        }
      }
    })
  }

useEffect(() => {
  filteredData()
},[searchdata , selectValue])

  //save Edit Data
  const SaveEditData = (ind, updatedTask) => {
    setTodo((prev) => (
      prev.map((list, index) => (
        index === ind ? { ...list, titlevalue: updatedTask, editMode: false } : list
      ))
    ))
  }



  return (
    <div>
      <div>
        <p>TaskList</p>
        <div className='bg-sky-300 w-1/3 rounded-md p-2 m-2'>
          {todo.length === 0 && <div>No Data avilable</div>}

          {
            filterData.length !== 0 ? filterData.map((item, index) => {
              item.editMode ? <div>
                <input type="text" defaultValue={item.titlevalue} onChange={(e) => {
                  let newValue = e.target.value
                  item.titlevalue = newValue
                }} />
                <button onClick={() => SaveEditData(index, item.titlevalue)}>Save</button>
              </div> :
                <div key={index}>
                  <p>{item.titlevalue}</p>
                  <div>
                    <div>{item.statusvalue === "Pending" ? <button onClick={() => handleStatus(index)}>Pending</button> : <button onClick={() => handleStatus(index)}>Completed</button>}</div>
                    <button className='bg-blue-400 rounded-md p-2 mx-2'><FaEdit /></button>
                    <button className='bg-red-400 rounded-md p-2 mx-2' onClick={() => { DeleteTask(index) }}><MdDelete /></button>
                  </div>
                </div>
            }) :
              todo.map((item, index) => {
                return (
                  <div key={index} className='flex'>
                    <h1>{item.titlevalue}</h1>
                    <div className=''>
                      {item.statusvalue === "Pending" ? <button onClick={(e) => handleStatus(index)} className='bg-yellow-300 p-1 rounded-md px-2 mx-2'>Pending</button> : <button onClick={(e) => handleStatus(index)} className='bg-green-500 p-1 rounded-md px-2 mx-2'>Completed</button>}
                      <button className='bg-blue-400 rounded-md p-2 mx-2'><FaEdit /></button>
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