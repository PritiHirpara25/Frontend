import React from 'react'

const AlbumsCard = ({albums}) => {
  return (
    <div>
      <ul>
        <li>{albums.title}</li>
      </ul>
    </div>
  )
}

export default AlbumsCard