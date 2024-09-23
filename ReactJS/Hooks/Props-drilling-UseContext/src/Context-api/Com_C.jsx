import React from 'react'
import Com_D from './Com_D'

const Com_C = (props) => {
  return (
    <div>
      <h1 className='heading'>This is Component C with {props.name}</h1>
      <Com_D name={props.name}/>
    </div>
  )
}

export default Com_C