import { useState } from 'react'
import './App.css'
import FilterBar from './FilterBar'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

function App() {

  const [todo, setTodo] = useState([])
  console.log(todo)

  let addTask = (value) => {
    setTodo([...todo, value])
  }
  
  console.log("todo:",todo)

  return (
    <>
      <TaskForm addTask={addTask} />
      <FilterBar setTodo={setTodo}/>
      <TaskList todo={todo} setTodo={setTodo}/>
    </>
  )
}

export default App
