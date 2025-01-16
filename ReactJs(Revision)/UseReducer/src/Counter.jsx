import React, { useState } from 'react'

const Counter = () => {

    // const[count , setCount] = useState(0)
    const[count , setCount] = useState({
        item : 0,
        data : 10
    })
    
    return (
        <div>
            <p>{count.item}</p>
            <button onClick={() => setCount({...count , item: count.item + 1 })}>IncrementItem</button>
            <button onClick={() => setCount({...count , item: count.item - 1 })}>DecrementItem</button>
            <p>{count.data}</p>
            <button onClick={() => setCount({...count , data: count.data + 1 })}>IncrementData</button>
            <button onClick={() => setCount({...count , data: count.data - 1 })}>DecrementData</button>
        </div>
    )
}

export default Counter
