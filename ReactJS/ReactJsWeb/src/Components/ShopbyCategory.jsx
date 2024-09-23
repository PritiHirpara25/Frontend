import React from 'react'
import Slider from "react-slick";
import screenprotection from '../assets/asset 30.jpeg'
import headphones from '../assets/asset 31.jpeg'
import cables from '../assets/asset 32.jpeg'
import adaptors from '../assets/asset 33.png'
import docks from '../assets/asset 34.jpeg'
import { GoArrowUpRight } from "react-icons/go";

const ShopByCategory = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
    <div className="overflow-hidden mt-0 lg:mt-6 shopbycategory">
      <div className='pl-[50px] pt-[60px]'>
                 <h1 className='text-5xl'>Shop by category.</h1>
             </div>
      <div>
        <Slider {...settings} className='container-section'>
          <div>
            <div className="relative rounded-md m-3 overflow-hidden">
              <img src={screenprotection} className="z-0 h-full w-full rounded-md object-cover shopimg" />
              {/* <img src={screenprotection} className="z-0 h-full w-full rounded-md object-cover hover:scale-125 hover:duration-300 hover:ease" /> */}
              <div className="absolute top-6 left-5 text-left">
                <h1 className="text-xl font-medium tracking-wide">Screen Protection</h1>
                <p className='text-[14px] pt-1 text-gray-700 tracking-wider font-thin'>6 items</p>
              </div>
              <div className="absolute bottom-5 left-5">
                <button className="bg-white rounded-full text-[14px] font-medium px-6 py-3">Shop now</button>
              </div>
            </div>
          </div>
          <div>
            <div className="relative rounded-md m-3 overflow-hidden">
              <img src={headphones} className="z-0 h-full w-full rounded-md object-cover shopimg" />
              <div className="absolute top-6 left-5 text-left">
                <h1 className="text-xl font-medium tracking-wide">Headphone</h1>
                <p className='text-[14px] pt-1 text-gray-700 tracking-wider font-thin'>6 items</p>
              </div>
              <div className="absolute bottom-5 left-5">
                <button className="bg-white rounded-full text-[14px] font-medium px-6 py-3">Shop now</button>
              </div>
            </div>
          </div>
          <div>
            <div className="relative rounded-md m-3 overflow-hidden">
              <img src={cables} className="z-0 h-full w-full rounded-md object-cover shopimg" />
              <div className="absolute top-6 left-5 text-left">
                <h1 className="text-xl font-medium tracking-wide">Cables</h1>
                <p className='text-[14px] pt-1 text-gray-700 tracking-wider font-thin'>6 items</p>
              </div>
              <div className="absolute bottom-5 left-5">
                <button className="bg-white rounded-full text-[14px] font-medium px-6 py-3">Shop now</button>
              </div>
            </div>
          </div>
          <div>
            <div className="relative rounded-md m-3 overflow-hidden">
              <img src={adaptors} className="z-0 h-full w-full rounded-md object-cover shopimg" />
              <div className="absolute top-6 left-5 text-left">
                <h1 className="text-xl font-medium tracking-wide">Adapters</h1>
                <p className='text-[14px] pt-1 text-gray-700 tracking-wider font-thin'>6 items</p>
              </div>
              <div className="absolute bottom-5 left-5">
                <button className="bg-white rounded-full text-[14px] font-medium px-6 py-3">Shop now</button>
              </div>
            </div>
          </div>
          <div>
            <div className="relative rounded-md m-3">
              <img src={docks} className="z-0 h-full w-full rounded-md object-cover" />
              <div className="absolute top-6 left-5 text-left">
                <h1 className="text-xl font-medium tracking-wide">Docks and Hubs.</h1>
                <p className='text-[14px] pt-1 text-gray-700 tracking-wider font-thin'>6 items</p>
              </div>
              <div className="absolute bottom-5 left-5">
                <button className="bg-white rounded-full text-[14px] font-medium px-6 py-3">Shop now</button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default ShopByCategory
