import React from 'react'
import { useLocation } from 'react-router-dom'

const Breadcrumbs = () => {

    const location = useLocation();
    console.log(location)

  return (
    <div>Breadcrumbs</div>
  )
}

export default Breadcrumbs