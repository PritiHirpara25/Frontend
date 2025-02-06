import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'

const ProtectedRouter = ({children}) => {

    const {isAuth} = useAuth()

  return (
    <div>
        {
          isAuth ? children : <Navigate to="/login"/>  
        }
    </div>
  )
}

export default ProtectedRouter