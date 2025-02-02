import React from 'react'
import Slider from "react-slick";
import MainBlogs from '../HomeHelper/MainBlogs';
import blog1 from '../assets/asset 51.jpeg'
import blog2 from '../assets/asset 52.jpeg'
import blog3 from '../assets/asset 53.jpeg'
import blog4 from '../assets/asset 54.jpeg'
import blog5 from '../assets/asset 55.jpeg'


function Blogpost() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
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
      <div className="slider-container blogsdot">
        <div className='container-section'>
          <div className='text-[42px] text-center'>Blogs Post</div>
          <div className='flex h-[600px]'>
            <Slider {...settings} className='overflow-hidden blogspost'>
              <div className='mainblogimage'>
                <MainBlogs image={blog1} title={`Pop-punk is back in fashion`} />
              </div>
              <div className='mainblogimage'>
                <MainBlogs image={blog2} title={`The next generation of leather alternatives`} />
              </div >
              <div className='mainblogimage'>
                <MainBlogs image={blog3} title={`An Exclusive Cothing Collaboration`} />
              </div>
              <div className='mainblogimage'>
                <MainBlogs image={blog4} title={`The next generation of leather alternatives`} />
              </div>
              <div className='mainblogimage'>
                <MainBlogs image={blog5} title={`The next generation of leather alternatives`} />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }

export default Blogpost