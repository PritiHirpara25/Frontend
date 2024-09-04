import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import asset28 from '../assets/asset 28.jpeg';
import asset29 from '../assets/asset 29.jpeg';
import asset27 from '../assets/asset 27.jpeg';

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
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="mainslider1">
            <img src={asset28} alt="" />
            <div className="slide1">
              <p>UP TO 40% OFF CHARGERS AND MORE.</p>
              <h1>Saving for dads and grads.</h1>
              <button>Shop collection</button>
            </div>
          </div>
          <div className="mainslider2">
            <img src={asset29} alt="" />
            <div className="slide2">
              <p>UP TO 40% OFF CHARGERS AND MORE.</p>
              <h1>Modern design</h1>
              <button>Shop collection</button>
            </div>
          </div>
          <div className="mainslider3">
            <img src={asset27} alt="" />
            <div className="slide3">
              <p>UP TO 40% OFF CHARGERS AND MORE.</p>
              <h1>Fast charging</h1>
              <button>Shop collection</button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default SimpleSlider;


export function Scrollbar(){
    return(
      <div className="scroll">
        <pre>
        <marquee behavior="" direction="">FREE SHIPING AND RETURN   →   LIMITED TIME OFFER:FASHION SALE YOU CAN'T RESIST   →   NEW SEASONS,NEW STYLES:FASHION SALE YOU CAN'T MISS   →   </marquee>
        </pre>
      </div>
    )
}
