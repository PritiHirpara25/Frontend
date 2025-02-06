import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext();

const Context = ({children}) => {
    const[isAuth , setIsAuth] = useState(false);  
    const[isAuthData , setIsAuthData] = useState([]);
    const[currentUser , setCurrentUser] = useState({})
  return (
    <AuthContext.Provider value={{isAuth , setIsAuth , isAuthData , setIsAuthData , currentUser , setCurrentUser}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext) // custom hook

export default Context