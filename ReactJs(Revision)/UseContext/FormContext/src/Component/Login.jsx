import React, { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {

    const[userName , setUserName] = useState('')
    const[password , setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = () => {
        e.preventDefault()
        setUser({userName , password})
    }

  return (
    <div className='container mx-auto'>
        <h1>This is Login Form.</h1>
        <input type="text" className='border-2 border-solid border-black' placeholder='Username' value={userName} onChange={(e) => setUserName(e.target.value)}/>
        <input type="password" className='border-2 border-solid border-black' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
