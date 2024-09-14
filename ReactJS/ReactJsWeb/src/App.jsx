import React from 'react'
import { useState } from 'react'
import './App.css'
import Layout from './Pages/Layout'
import SimpleSlider from './Pages/Home'
import Login from './Pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Layout/>
    </>
  )
}

export default App
