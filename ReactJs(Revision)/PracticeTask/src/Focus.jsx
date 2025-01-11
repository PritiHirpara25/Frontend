import React, { useRef, useState } from 'react'

const Focus = () => {

    // const [focus , setFocus] = useState(false);

    const refbtn = useRef();

    // const handleState = () => {
    //     setFocus(true)
    // }

  return (
    <div>
        <div>
            <input type="text" className='border-2 border-red' />
        </div>  
        <div>
            {/* <button onClick={}>Click</button> */}
        </div>
    </div>
  )
}

export default Focus