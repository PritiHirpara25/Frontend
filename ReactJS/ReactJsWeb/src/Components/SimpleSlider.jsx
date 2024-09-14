import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import asset28 from '../assets/asset 28.jpeg';
import asset29 from '../assets/asset 29.jpeg';
import asset27 from '../assets/asset 27.jpeg';
import { MdKeyboardArrowRight } from "react-icons/md";

function SimpleSlider() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };
    return (
      <div className="overflow-hidden">
        <div className="slider-container">
          <Slider {...settings}>
            <div className="mainslider1">
              <img src={asset28} alt="" className="" />
              <div className="slide1 max-lg:top-14 max-md:top-2 max-sm:-top-6 max-sm:left-5">
                <p className="text-xl max-md:hidden">UP TO 40% OFF CHARGERS AND MORE.</p>
                <h1 className="text-7xl pt-10 max-lg:text-5xl max-md:text-4xl max-sm:text-2xl">Savings for <br />dads and grads.</h1>
                <button className="bg-black text-white rounded-full px-6 py-2 text-lg flex items-center mt-10 max-md:text-sm max-sm:mt-3 ">Shop collection <div className="pt-1"><MdKeyboardArrowRight /></div></button>
              </div>
            </div>
            <div className="mainslider2">
              <img src={asset29} alt="" />
              <div className="slide2 max-lg:top-14 max-md:top-3 max-sm:-top-6 max-sm:left-5">
                <p className="text-xl max-md:hidden">UP TO 40% OFF CHARGERS AND MORE.</p>
                <h1 className="text-7xl pt-10 max-lg:text-5xl max-md:text-4xl max-sm:text-2xl">Modern design</h1>
                <button className="bg-black text-white rounded-full px-6 py-2 text-lg flex items-center mt-10 max-md:text-sm max-sm:mt-6 butn__new butn">Shop collection <div className="pt-1"><MdKeyboardArrowRight /></div></button>
              </div>
            </div>
            <div className="mainslider3">
              <img src={asset27} alt="" />
              <div className="slide3 max-lg:top-14 max-md:top-3 max-sm:-top-6 max-sm:left-5">
                <p className="text-xl max-md:hidden">UP TO 40% OFF CHARGERS AND MORE.</p>
                <h1 className="text-7xl pt-10 max-lg:text-5xl max-md:text-4xl max-sm:text-2xl">Fast charging</h1>
                <button className="bg-black text-white rounded-full px-6 py-2 text-lg flex items-center mt-10 max-md:text-sm max-sm:mt-6">Shop collection <div className="pt-1"><MdKeyboardArrowRight /></div></button>
              </div>
            </div>
          </Slider>
          {/* <div style={{ backgroundColor: 'var(--primary-color)' }} className="w-full -mt-2">
            <div className="call-to-action flex items-center h-16 uppercase text-xs text-600 ">
              <p>free shipping and return</p>
              <IoMdArrowDropup className="flex items-center" />
              <p>new season,new styles:fashion sale you can't miss</p>
              <IoMdArrowDropup className="flex items-center" />
              <p>limited time offer:fashion sale you can't resist</p>
              <IoMdArrowDropup className="flex items-center" />
            </div>
          </div> */}
        </div>
      </div>
    );
  }
  
  export default SimpleSlider;