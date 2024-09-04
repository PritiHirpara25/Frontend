import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
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
    speed: 1800,    
    autoplaySpeed: 4000,
    cssEase: "linear"
  };
  return (
    <div className="overflow-hidden">
      <div className="slider-container">
        <Slider {...settings}>
          <div className="mainslider1">
            <img src={asset28} alt="" />
            <div className="slide1">
              <p className="text-xl">UP TO 40% OFF CHARGERS AND MORE.</p>
              <h1 className="text-7xl pt-10">Saving for <br />dads and grads.</h1>
              <button className="bg-black text-white rounded-full px-6 py-2 text-lg flex mt-10">Shop collection <div className="pl-3 pt-1.5"><MdKeyboardArrowRight /></div></button>
            </div>
          </div>
          <div className="mainslider2">
            <img src={asset29} alt="" />
            <div className="slide2">
              <p className="text-xl">UP TO 40% OFF CHARGERS AND MORE.</p>
              <h1 className="text-7xl pt-10">Modern design</h1>
              <button className="bg-black text-white rounded-full px-6 py-2 text-lg flex mt-10">Shop collection <div className="pl-3 pt-1.5"><MdKeyboardArrowRight /></div></button>
            </div>
          </div>
          <div className="mainslider3">
            <img src={asset27} alt="" />
            <div className="slide3">
              <p className="text-xl">UP TO 40% OFF CHARGERS AND MORE.</p>
              <h1 className="text-7xl pt-10">Fast charging</h1>
              <button className="bg-black text-white rounded-full px-6 py-2 text-lg flex mt-10">Shop collection <div className="pl-3 pt-1.5"><MdKeyboardArrowRight /></div></button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default SimpleSlider;


// export function Scrollbar(){
//     return(
//       <div className="scroll">
//         <pre>
//         <marquee>FREE SHIPING AND RETURN   →   LIMITED TIME OFFER:FASHION SALE YOU CAN'T RESIST   →   NEW SEASONS,NEW STYLES:FASHION SALE YOU CAN'T MISS   →   </marquee>
//         </pre>
//       </div>
//     )
// }
