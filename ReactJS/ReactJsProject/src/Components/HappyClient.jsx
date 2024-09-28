import React from 'react'
import client1 from '../assets/asset 47.jpeg'
import client2 from '../assets/asset 43.png'
import client3 from '../assets/asset 39.png'
import client4 from '../assets/asset 41.png'
import MainHappyClients from '../HomeHelper/MainHappyClients'
import Slider from "react-slick";

function HappyClient() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container overflow-hidden">
      <div className='mt-20 mb-24 h-[726px]' style={{ backgroundColor: "var(--client-bgcolor)" }}>
        <div className='container-section flex flex-col items-center mb-14'>
          <h1 className='text-[42px]'>Happy Clients</h1>
          <p className='pt-2 text-gray-700'>See what our satisfied customers have to say about our electronic accessories.</p>
        </div>
        <Slider {...settings} className='container-section'>

          <div>
            <MainHappyClients heading={`Best Online Fashion Site`} text={`“ I always find something stylish and affordable on this web fashion site ”`} name={`Robert Smith`} meta={`Customer From USA`} image={client1} title={`3-in-1 Wireless Charger with Official MagSafe Charging 15W`} price={`$105.95`} />
          </div>

          <div>
            <MainHappyClients heading={`Great Selection and quality`}
              text={`"I love the variety of styles and the high-quality clothing on this web fashion site."`} name={`Allen Lyn`} meta={`Customer From France`} image={client2} title={`SoundForm Rise`} price={`$7.95`} />
          </div>

          <div>
            <MainHappyClients heading={`Best Customer Service`} text={`"I finally found a web fashion site with stylish and flattering options in my size.`} name={`Peter Rope`} meta={`Customer From USA`} image={client3} title={`UltraGlass 2 Treated Screen Protector for iPhone 15 Pro`} price={` From $18.95`} />
          </div>

          <div>
            <MainHappyClients heading={`Great Selection and quality`}
              text={`"I love the variety of styles and the high-quality clothing on this web fashion site."`} name={`Hellen Ase`} meta={`Customer From Japan`} image={client4} title={`3-in-1 Wireless Charger with Official MagSafe Charging 15W`} price={`$16.95`} />
          </div>

        </Slider>
      </div>
    </div>
  );
}

export default HappyClient;