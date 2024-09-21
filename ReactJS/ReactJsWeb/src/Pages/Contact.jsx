import React from 'react'
import Allinnerbanner from '../PageHelpers/Allinnerbanner'
import Footerwhite from '../Components/Footerwhite'

const Contact = () => {
  return (
    <div>
        <div>
        <Allinnerbanner title="Contact Us" Breadcrumbs='contact us' />
      </div>

      
      <div className='mt-12'>
        <hr />
        <Footerwhite />
      </div>
    </div>
  )
}

export default Contact