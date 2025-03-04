import React from 'react'

const UsersCard = ({user}) => {
  return (
    <div>
      <ul>
        <li>{user.name}</li>
      </ul>
    </div>
  )
}

export default UsersCard