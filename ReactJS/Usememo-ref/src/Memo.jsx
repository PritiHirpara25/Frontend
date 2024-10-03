import React from 'react'
import { useState } from 'react'

const Memo = () => {

    const [add, setAdd] = useState(0)

    const [count, setCount] = useState(0)

    console.log('render')

    return (
        
        <div>
            <div>
                {count}
                <button onClick={() => setCount((count) => count + 1)}>Count</button>
            </div>
            <div>
                {add}
                <button onClick={() => setAdd((add) => add + 1)}>Add</button>
            </div>
        </div>
    )
}

export default Memo