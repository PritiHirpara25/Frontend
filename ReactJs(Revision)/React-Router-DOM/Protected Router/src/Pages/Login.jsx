import React, { useState } from 'react'

const Login = () => {

    const[isLogin , setisLogin] = useState({username:"",password:""})
    console.log("Login",isLogin)

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="">UserName:</label>
            <input type="text" className='border-2 border-solid border-black' onChange={(e) => setisLogin({...prev , username:e.target.value})}/>
        </div>
        <div>
            <label htmlFor="">Password:</label>
            <input type="password" className='border-2 border-solid border-black' onChange={(e) => setisLogin({...prev , username:e.target.value})}/>
        </div>
        <div>
            <button>Login</button>
        </div>
        </form>
    </div>
  )
}

export default Login