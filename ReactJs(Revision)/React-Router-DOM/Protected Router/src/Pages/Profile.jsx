import React from 'react'
import { useAuth } from '../../Context/AuthContext'

const Profile = () => {

  const {setIsAuth} = useAuth();

  return (
    <div>
      <button onClick={() =>setIsAuth(false)}>Logout</button>
    </div>
  )
}

export default Profile