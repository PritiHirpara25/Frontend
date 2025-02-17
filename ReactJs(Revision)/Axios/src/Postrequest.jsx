import axios from 'axios'
import React, { useState } from 'react'

const Postrequest = () => {

    const[name , setName] = useState("")
    const[email , setEmail] = useState("")
    const[phone , setPhone] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            let response = axios.post("http://localhost:3000/Profile" , {
                name , email , phone
            })
            console.log(response.data)
        }
        catch(error){
            console.log(error)
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" onChange={(e) => setName(e.target.value)} />
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
                <input type="tel" onChange={(e) => setPhone(parseInt(e.target.value))} />
                <button>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Postrequest