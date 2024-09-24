import React from 'react'
import { memo } from 'react'

const Child = ({add}) => {
  // console.log('render')
  return (
    <div>
        <button onClick={add}>Add</button>
    </div>
  )
}

export default memo(Child)