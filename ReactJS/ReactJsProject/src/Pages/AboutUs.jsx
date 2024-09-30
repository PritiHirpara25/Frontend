import React from 'react'
import aboutusbanner from '../assets/about-banner.jpg'
import AboutInfo from '../Components/AboutInfo'
import OurPriority from '../Components/OurPriority'
import AboutShopGram from '../Components/AboutShopGram'
import Footerwhite from '../Components/Footerwhite'

const AboutUs = () => {
  return (
    <div>
      <div className='flex justify-center items-center h-[80vh] md:h-[90vh] lg:h-screen container-section' style={{ backgroundImage: `url(${aboutusbanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <p className='text-white text-3xl md:text-5xl xl:text-7xl text-center px-0 md:px-18 lg:px-24'>Empowering women to achieve fitness goals with style</p>
      </div>
      <div>
        <AboutInfo />
      </div>
      <div>
        <OurPriority />
      </div>
      <div>
        <AboutShopGram />
      </div>
      <div>
        <hr />
        <Footerwhite />
      </div>
    </div>
  )
}

export default AboutUs