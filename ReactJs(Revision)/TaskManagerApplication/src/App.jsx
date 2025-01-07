import { useState } from 'react'
import './App.css'
import FilterBar from './FilterBar'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

function App() {

  const[todo , setTodo] = useState([])

  let addTask = (value) => {
    setTodo([...todo , value])
  }

  return (
    <>
     <FilterBar/>
     <TaskForm addTask={addTask}/>
     {
      todo.map((list,index) => {
        return(
          <TaskList key={index} item={list}/>
        )
      })
     }
    </>
  )
}

export default App
