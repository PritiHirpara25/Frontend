import { useEffect, useState } from 'react'
import './App.css'
import FilterBar from './FilterBar'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

function App() {

  const [todo, setTodo] = useState([])
  // console.log(todo)
  console.log("todo:",todo)

  // Add Task
  let addTask = (value) => {
    setTodo([...todo, value])
  }

  // Edit Task
  const[editTask , setEditTask] = useState(null)

  // seach and filter Data
  const[newFilterData , setNewFilterData] = useState([])
  const[FilterData , setFilterData] = useState({})
  const {searchdata , selectValue} = FilterData;

  useEffect(() => {
    if(searchdata && selectValue === ("All" || "Pending" || "Completed")){
      let newData = todo.filter((item) =>{
        return item.titlevalue === searchdata
      })
      setNewFilterData(newData)
    } 
    else if(searchdata === '' &&  selectValue === "Completed"){
      let newData = todo.filter((item) => item.statusvalue === 'Completed')
      setNewFilterData(newData)
    }
    else if(searchdata === '' &&  selectValue === "Pending"){
      let newData = todo.filter((item) => item.statusvalue === 'Pending')
      setNewFilterData(newData)
    }
    else{
      setNewFilterData(todo)
    }

  } , [todo , searchdata , selectValue]);

  return (
    <>
      <TaskForm addTask={addTask} editTask={editTask} setEditTask={setEditTask} setTodo={setTodo}/>
      <FilterBar setFilterData={setFilterData}/>
      <TaskList todo={todo} setTodo={setTodo} newFilterData={newFilterData} setNewFilterData={setNewFilterData} setEditTask={setEditTask}/>
    </>
  )
}

export default App
