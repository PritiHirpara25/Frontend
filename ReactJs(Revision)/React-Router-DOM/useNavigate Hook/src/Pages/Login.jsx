import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    function redirect () {
        navigate('/')
    }
  return (
    <div>
        <button onClick={redirect}>Home</button>
    </div>
  )
}

export default Login