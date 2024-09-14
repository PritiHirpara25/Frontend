import React, { createContext, useState } from 'react'
import Card from '../Task/Card'
import Button from '../Task/Button'
import Context from '../Task/Context'

// const theme = createContext();

const Main = () => {

    const [theme , setTheme] = useState()
    const [count , setCount] = useState(true)

    const toggle = () => {
        if(count === true){
            setTheme('bg-black')
            setCount(false)
        }
        else{
            setTheme('bg-red-500')
            setCount(true)
        }
    }
  return (
    <div>
        <Card color = {theme}/>
        <Button method = {toggle}/>
        <Context/>
    </div>
  )
}

export default Main