import React from 'react'
import { user } from './App'

const ComC = () => {
  return (
    <div>
        <user.Consumer>
            {
                (list) => {
                    return(
                        <span>{list}</span>
                    )
                }
            }
        </user.Consumer>
    </div>
  )
}

export default ComC