import { useState } from 'react'
import './App.css'
import Layout from './Pages/Layout'
import SimpleSlider from './Pages/Home'
import { Scrollbar } from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Layout/>
        <Scrollbar/>
    </>
  )
}

export default App
