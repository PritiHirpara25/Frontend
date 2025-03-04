import React from 'react'

const PostsCard = ({posts}) => {
  return (
    <div>
      <ul>
        <li>{posts.title}</li>
      </ul>
    </div>
  )
}

export default PostsCard