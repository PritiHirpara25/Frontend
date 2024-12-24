import { createContext } from 'react'
import './App.css'
import ComA from './ComA'

export const user = createContext()

function App() {

  let users='Rahul'

  return (
    <>
    <user.Provider value={users}>
      <ComA/>
    </user.Provider>
    </>
  )
}

export default App
