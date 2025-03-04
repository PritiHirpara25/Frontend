import React from 'react'

const CommentsCard = ({comments}) => {
  return (
    <div>
      <ul>
        <li>{comments.name}</li>
      </ul>
    </div>
  )
}

export default CommentsCard