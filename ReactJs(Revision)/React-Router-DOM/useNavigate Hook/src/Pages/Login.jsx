import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    // function redirect () {
    //     navigate('/')
    // }

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 5000)
        return () => clearTimeout();
    })
    

  return (
    <div>
        {/* <button onClick={redirect}>Home</button> */}
    </div>
  )
}

export default Login