import React, { useState } from 'react'
import { useAuth } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom';

const Login = () => {


    const [isLogin, setIsLogin] = useState({ username: "", password: "" })

    const { setIsAuth, isAuthData, isAuth  } = useAuth();
    console.log("isLogin:",isLogin);

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
       
        const user = isAuthData.find((user) => (
             user.username === isLogin.username && user.password === isLogin.password
        ));
        // user ? setIsAuth(true) : alert("not valid")
        
        if (user) { 
            setIsAuth(true);
            navigate('/');
        } else {
            alert("Not a valid user");
        }
    }

    console.log("ISAUTH",isAuth)
    console.log("ISAUTHDATA",isAuthData)

   

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">UserName:</label>
                    <input type="text" className='border-2 border-solid border-black' onChange={(e) => setIsLogin((prev) => ({ ...prev, username: e.target.value }))} />
                </div>
                <div>
                    <label htmlFor="">Password:</label>
                    <input type="password" className='border-2 border-solid border-black' onChange={(e) => setIsLogin((prev) => ({ ...prev, password: e.target.value }))} />
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login