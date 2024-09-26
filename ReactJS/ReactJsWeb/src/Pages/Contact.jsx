import React from 'react'
import Allinnerbanner from '../PageHelpers/Allinnerbanner'
import Footerwhite from '../Components/Footerwhite'
import ContactInfo from '../Components/ContactInfo'

const Contact = () => {
  return (
    <div>
        <div>
        <Allinnerbanner title="Contact Us" Breadcrumbs='contact us' />
      </div>

      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14875.39163402036!2d72.86336325!3d21.237878849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1726502613779!5m2!1sen!2sin" width="100%" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      
      <div>
        <ContactInfo/>
      </div>

      <div className='mt-12'>
        <hr />
        <Footerwhite />
      </div>
    </div>
  )
}

export default Contact