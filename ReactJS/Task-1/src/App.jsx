import { useState } from 'react'
import './App.css'
import Recipe from './RecipeTask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Recipe />
    </>
  )
}

export default App