import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const Breadcrumbs = () => {

  const location = useLocation();

  const Pathname = location.pathname.split('/').filter((link) => link !== '')
  let PageLink = ''

  const createLink = Pathname.map((link) => {

      PageLink += `/${link}`
      return (
        <div className='bg-orange-400'>
          <Link to={PageLink}><span>/</span>{link}</Link>
        </div>
      )
    })


  console.log(Pathname)
  console.log("PageLink", PageLink)

  return (
    <div className='flex'>{createLink}</div>
  )


}

export default Breadcrumbs