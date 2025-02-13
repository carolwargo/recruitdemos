import React from "react";
import Slider from "react-slick";
import Calendar1 from '../../assets/images/Calendars/Calendar1.png';
import Calendar2 from '../../assets/images/Calendars/Calendar2.png';
import Calendar3 from '../../assets/images/Calendars/Calendar3.png';
import Letter1 from '../../assets/images/Letters/Letter1.png';
import Letter2 from '../../assets/images/Letters/Letter2.png';
import Resume1  from "../../assets/images/Metrics/Resume1.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SimpleSlider() {
  var settings = {
    autoplay: true,        // Enables autoplay
autoplaySpeed: 2000,   // Set the autoplay delay in milliseconds (default is 3000ms)
pauseOnHover: true,    // Pauses autoplay when hovered (optional)
pauseOnFocus: true,    // Pauses when focused (optional)
    dots: true,
    dotsClass: "slick-dots slick-thumb",  
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 3,
    speed: 500,
    beforeChange: (oldIndex, newIndex) => {
      console.log(`Changing from ${oldIndex} to ${newIndex}`);
    },
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
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,  
        }
      }
    ]
  };
  return (
<div>
  <style>{`
        .slick-slide {
        transition: transform 0.5s ease, opacity 0.5s ease;
        opacity: 0.5;
        transform: scale(0.9) translateY(20px);
      }

      .slick-center {
        transform: scale(1) translateY(0);
        opacity: 1;
      }

      .slick-prev, .slick-next {
        z-index: 1;
      }
  .center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
}
`}</style>

    <div className="slider-container">
      <Slider {...settings}>
        <div>   
          <img src={Calendar1} alt="calendar" className="w-100"
            style={{boxShadow: '1px 1px 6px rgba(0,0,0,0.75)'}}/>
                        <p className="fw-light small mt-3 text-center text-opacity-75">Sample Letter of Recommendations</p>
          <div className="text-center">
          <button className="btn btn-secondary">learn more</button>
          </div>
        </div>
      <div>   
          <img src={Calendar2} alt="calendar"  className="w-100"
            style={{boxShadow: '1px 1px 6px rgba(0,0,0,0.75)'}}/>
                        <p className="fw-light small mt-3 text-center text-opacity-75">Sample Letter of Recommendations</p>
          <div className="text-center">
          <button className="btn btn-secondary">learn more</button>
          </div>
        </div>
      <div>   
          <img src={Calendar3} alt="calendar"  className="w-100"
            style={{boxShadow: '1px 1px 6px rgba(0,0,0,0.75)'}}/>
                        <p className="fw-light small mt-3 text-center text-opacity-75">Sample Letter of Recommendations</p>
          <div className="text-center">
          <button className="btn btn-secondary">learn more</button>
          </div>
        </div>
      <div>   
          <img src={Letter1} alt="letter"  className="w-100"
            style={{boxShadow: '1px 1px 6px rgba(0,0,0,0.75)'}}/>
            <p className="fw-light small mt-3 text-center text-opacity-75">Sample Letter of Recommendations</p>
          <div className="text-center">
          <button className="btn btn-secondary">learn more</button>
          </div>
        </div>
      <div>   
          <img src={Letter2} alt="Letter"  className="w-100"
            style={{boxShadow: '1px 1px 6px rgba(0,0,0,0.75)'}}/>
                        <p className="fw-light small mt-3 text-center text-opacity-75">Sample Letter of Recommendations</p>
          <div className="text-center">
          <button className="btn btn-secondary">learn more</button>
          </div>
        </div>
      <div>   
          <img src={Resume1 } alt="resume"  className="w-100"
          style={{boxShadow: '1px 1px 6px rgba(0,0,0,0.75)'}}/>
                      <p className="fw-light small mt-3 text-center text-opacity-75">Sample Letter of Recommendations</p>
          <div className="text-center">
          <button className="btn btn-secondary">learn more</button>
          </div>
        </div>
      </Slider>
    </div>
</div>
  );
}

