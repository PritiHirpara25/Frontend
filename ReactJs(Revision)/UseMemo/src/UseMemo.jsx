import React, { useState } from 'react'

const UseMemo = () => {

    const [count , setCount] = useState(0)


    const handleMemo = () => {
        return count * 2
    }

  return (
    <div>
        <p>{handleMemo}</p>
        <button className='bg-green-300 p-1.5' onClick={() => setCount(count + 1 )}>Click</button>
    </div>
  )
}

export default UseMemo