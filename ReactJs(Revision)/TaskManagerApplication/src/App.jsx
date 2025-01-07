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

  return (
    <>
      {/* <FilterBar/> */}

      <TaskForm addTask={addTask} />
      <TaskList todo={todo}/>
    </>
  )
}

export default App
