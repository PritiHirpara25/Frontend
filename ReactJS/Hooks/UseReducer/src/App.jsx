import { useState } from 'react'
import UseReducer from './demo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <UseReducer/>
    </>
  )
}

export default App
