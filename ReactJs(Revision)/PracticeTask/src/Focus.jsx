import React, { useRef } from 'react'

const Focus = () => {


    const btnref = useRef(null);
    // console.log(inputref)

    const handleState = () => {
      btnref.current.focus();
  }

  return (
    <div className='m-2'>
        <div>
            <input ref={btnref} type="text" placeholder='click btn for Focus' className='bg-red-100 rounded-md p-2 border-2 border-red-400'/>
        </div>  
        <div>
            <button onClick={handleState} className='bg-red-200 p-1.5 m-2 border-2 border-black'>Click</button>
        </div>
    </div>
  )
}

export default Focus