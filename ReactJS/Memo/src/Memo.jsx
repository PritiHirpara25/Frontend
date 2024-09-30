import React, { useState } from 'react'
import Child from './Child'

const Memo = () => {

  const [add, setAdd] = useState(0)
  
  const [count, setCount] = useState(0)

  // const Update = () => {
  //   setAdd(add + 1);
  // };  

   const newUpdate (const Update = () => {
    setAdd(add + 1);
  });  

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>count</button>
      <p>{add}</p>
      <Child add={Update}/>
    </div>
  )
}

export default Memo