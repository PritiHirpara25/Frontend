import React from 'react'
import Slider from "react-slick";
import MainBlogs from '../HomeHelper/MainBlogs'
import blog1 from '../assets/asset 51.jpeg'
import blog2 from '../assets/asset 52.jpeg'
import blog3 from '../assets/asset 53.jpeg'
import blog4 from '../assets/asset 54.jpeg'
import blog5 from '../assets/asset 55.jpeg'

// const Blogs = () => {
//   return (
// <div className='container-section'>
//   <div className='text-[42px] text-center'>Blogs Post</div>
//   <div className='flex '>
// <MainBlogs image={blog1} labelbtn={`ACCESSORIES`} title={`Pop-punk is back in fashion`} titlebtn={`Read More`}/>
// <MainBlogs image={blog2} labelbtn={`ACCESSORIES`} title={`The next generation of leather alternatives`} titlebtn={`Read More`}/>
// <MainBlogs image={blog3} labelbtn={`ACCESSORIES`} title={`The next generation of leather alternatives`} titlebtn={`Read More`}/>
//       </div>
//     </div>
//   )
// }

// export default Blogs



function Blogs() {
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
    <div className="slider-container">
      <div className='container-section mb-72'>
        <div className='text-[42px] text-center'>Blogs Post</div>
        <div className=''>
          <Slider {...settings} className='overflow-hidden blogspost'>
            <div>
              <MainBlogs image={blog1} title={`Pop-punk is back in fashion`} className='border-2 border-solid border-black'/>
            </div>
            <div>
              <MainBlogs image={blog2} title={`The next generation of leather alternatives`} />
            </div>
            <div>
              <MainBlogs image={blog3} title={`An Exclusive Cothing Collaboration`} />
            </div>
            <div>
              <MainBlogs image={blog4} title={`The next generation of leather alternatives`} />
            </div>
            <div>
              <MainBlogs image={blog5} title={`The next generation of leather alternatives`} />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Blogs;