import { useState } from 'react'
import './App.css'
import Task from './Task'
import NestingCom from './NestingComponent/NestingCom'
import FormCom from './FormCom'
import ListRenderingArray from './ListRenderingArray'
import MultipleState from './MultipleState'
import FormInput from './FormInput'
import ToggleState from './ToggleState'
import ObjState from './ObjState'
import StatewithArray from './StatewithArray'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Task/>
      {/* <NestingCom/> */}
      {/* <FormCom/> */}
      {/* <ListRenderingArray/> */}
      {/* <MultipleState/> */}
      {/* <FormInput/> */}
      {/* <ToggleState/> */}
      {/* <ObjState/> */}
      {/* <StatewithArray/> */}
      {/* <Counter/> */}
    </>
  )
}

export default App
