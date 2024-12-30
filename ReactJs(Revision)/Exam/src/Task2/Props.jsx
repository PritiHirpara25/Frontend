import React from 'react'
import UserStatus from './Task2'

const Props = (props) => {
  return (
    <>
    <UserStatus/>
    <div>
        <p name='online' value='User is Online'></p>
        <p name='offline' value='User is offline'></p>
    </div>
    </>
  )
}

export default Props