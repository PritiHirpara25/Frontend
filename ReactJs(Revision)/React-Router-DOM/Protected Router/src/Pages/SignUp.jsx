import React, { useState } from 'react'
import { useAuth } from '../../Context/AuthContext'

const SignUp = () => {

    const[isSign , setIsSign] = useState({username:"",password:""})
    console.log("Signup",isSign)

    const {setIsAuth ,setIsAuthData, isAuthData} = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault
        // setIsAuth(true)
        setIsAuthData({...prev , isSign})
    } 

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="">UserName:</label>
            <input type="text" className='border-2 border-solid border-black' onChange={(e) => setIsSign({...prev , username:e.target.value})}/>
        </div>
        <div>
            <label htmlFor="">Password:</label>
            <input type="password" className='border-2 border-solid border-black'  onChange={(e) => setIsSign({...prev , password:e.target.value})}/>
        </div>
        <div>
            <button>Sign Up</button>
        </div>
        </form>
    </div>
  )
}

export default SignUp
