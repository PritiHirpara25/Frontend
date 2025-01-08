import React, { useRef } from 'react'

const UseRef = () => {

  const refHeading = useRef()
  // console.log(refHeading)
  const refDiv = useRef()

  const handlestyle = () => {
    refHeading.current.style.backgroundColor = 'gray'
    refDiv.current.style.backgroundColor = 'green'
    refDiv.current.style.height = '100px'
    refDiv.current.style.width = '100px'
  }

  return (
    <div>
      <h1 ref={refHeading} className='p-2 flex justify-center'>UseRef HOOK</h1>
      <div ref={refDiv}></div>
      <button onClick={handlestyle} className='border-2 border-solid border-black p-1.5'>CLick</button>
    </div>
  )
}

export default UseRef