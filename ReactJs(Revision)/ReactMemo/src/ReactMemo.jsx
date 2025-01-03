import React, { useState } from 'react'
import Memo from './Memo'

const initialData = [
  {
    id:1,
    name:'Object-1'
  },
  {
    id:2,
    name:'Object-2'
  },
  {
    id:3,
    name:'Object-3'
  }
]

const ReactMemo = () => {

  const[data  , setData] = useState("")

  return (
    <div>
      <h1>ReactMemo</h1>
      <input type="text" className='border' onChange={(e) => setData(e.target.value)}/>
      <ul>
        {
          initialData.map((user) => <li key={user.id}>{user.name}</li>)
        }
      </ul>
      <Memo />
    </div>
  )
}

export default ReactMemo