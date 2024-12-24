import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {

  const {user} = useContext(UserContext)

  return (
    <div>
        <span>Profile Name:{user.userName}</span>
        <span>Profile Name:{user.password}</span>
    </div>
  )
}

export default Profile