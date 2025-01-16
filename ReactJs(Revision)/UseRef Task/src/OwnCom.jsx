import React, { useRef } from 'react'

const OwnCom = () => {

    const refDiv = useRef()

    const handleDiv = () => {
        refDiv.current.style.backgroundColor = 'green'
        refDiv.current.style.height = '100px'
        refDiv.current.style.width = '100px'
        refDiv.current.style.margin = '5px'
    }

    return (
        <div className='border-2 border-black'>
            <div ref={refDiv}></div>
            <button onClick={handleDiv} className='p-1.5 bg-green-400 rounded-md m-2'>Click</button>
        </div>
    )
}

export default OwnCom