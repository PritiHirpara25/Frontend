import React, { Children, useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {

    const[user , setUser] = useState({});

  return (
    <div>
        <UserContextProvider value={{user , setUser}}>
            {children}
        </UserContextProvider>
    </div>
  )
}

export default UserContextProvider