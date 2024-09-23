import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createContext } from 'react'
import Layout from './Child-Obj.jsx/Layout'
import Task from './Task/Card'
import Main from './Task/Main.Jsx'
import Main1 from './Task-UseContext/Main1'

export const data = createContext('SkillQode')

const obj = {
  firstname : 'Priti',
  age : '20'
}

function App({ children }) {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* React-Children */}
      {/* <Card>
        {children}
        <h1>This is React-Child Component.</h1>
      </Card> */}

      {/* React-Child */}
      {/* <data.Provider value={obj}>
        <Layout>
          {children}
          <h1>Hello</h1>
        </Layout>
      </data.Provider> */}

      {/* React-Child with Object */}
      {/* <data.Provider value={obj}>
        <Layout />
      </data.Provider> */}

      {/* <Main/> */}
      <Main1/>
    </>
  )
}

export default App
