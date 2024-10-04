import React from 'react'

const ToggleState = () => {
    const [toggleState, setToggleState] = React.useState(false)
    
    const toggleHandler = () => {
        setToggleState(!toggleState)
    }
  return (
    <div className='Toggle'>
        <h1>Toggle State: {toggleState.toString()}</h1>
        <button onClick={toggleHandler} className=''>Toggle</button>
        {toggleState && <p>This is a toggled state.</p>}
    </div>
  )
}

export default ToggleState