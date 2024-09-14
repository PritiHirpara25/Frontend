import React from 'react'
import { GoStarFill } from "react-icons/go";
import client1 from '../assets/asset 47.jpeg'
import MainHappyClients from '../Helpers/MainHappyClients'
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
        <Slider {...settings}>
          <div>
            <MainHappyClients />
          </div>
          <div>
            <MainHappyClients />
          </div>
          <div>
            <MainHappyClients />
          </div>
          <div>
            <MainHappyClients />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default HappyClient;