import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Main from './Props-Drilling/Main'
// import Main1 from './Context-api/Main1'
import Main2 from './UseContext/Main2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <Main/>    */}    {/* Props-Drilling */}    
        {/* <Main1/>  */}       {/* Context-api */}
        { <Main2/>  }         {/* UseContext */}
    </>
  )
}

export default App
