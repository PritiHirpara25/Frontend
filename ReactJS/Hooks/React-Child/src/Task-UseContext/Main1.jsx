import React, { createContext, useState } from 'react'
import Card1 from '../Task-UseContext/Card1'
import Button1 from '../Task-UseContext/Button1'
import Context1 from '../Task-UseContext/Context1'

const theme = createContext();


const Main = () => {

    const [theme , setTheme] = useState()
    const [count , setCount] = useState(true)

    const toggle = () => {
        if(count === true){
            setTheme('bg-black')
            setCount(false)
        }
        else{
            setTheme()
            setCount(true)
        }
    }
  return (
    <div>
        <Card1 color = {theme}/>
        <Button1 method = {toggle}/>
        <Context1/>
    </div>
  )
}

export default Main