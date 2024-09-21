import React from 'react'
import Allinnerbanner from '../PageHelpers/Allinnerbanner'
import Footerwhite from '../Components/Footerwhite'

const Shop = () => {
  return (
    <div>
      <div>
        <Allinnerbanner title="New Arrival" Breadcrumbs="Shop through our latest selection of Fashion" />
      </div>


      <div className='mt-12'>
        <hr />
        <Footerwhite />
      </div>
    </div>
  )
}

export default Shop