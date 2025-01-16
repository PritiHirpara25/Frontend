import React, { useRef, useState } from 'react'
import video from './assets/studio.mp4'

const Video = () => {

  const refbtn = useRef(null)

  const[play , setPlay] = useState(true)

  function handleClick() {
    setPlay(!play)
  }

  return (
    <div>
      <video width="320" height="240" controls ref={refbtn} className='m-2'>
        <source src={video} />
      </video>
        <div onClick={handleClick} className='bg-teal-400 w-fit p-1.5 rounded-md m-2'>{play ? <button>Play</button> : <button>Pause</button>}</div>
    </div>
  )
}

export default Video