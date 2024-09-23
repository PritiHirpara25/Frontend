import React from 'react'
import Card1 from './Card1'

const Layout = ({children}) => {
  return (
    <div>
      {children}
        <Card1/>
    </div>
  )
}

export default Layout