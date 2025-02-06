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
    dots: true,
    className: "center" ,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
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
    <div className="d-flex justify-content-center bg-dark vh-100">
  <div className="container-fluid w3-margin-top">
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={Calendar1} alt="calendar" className="img-fluid w-100"/>
        </div>
        <div>
          <img src={Calendar2} alt="calendar"  className="img-fluid w-100"/>
        </div>
        <div>
          <img src={Calendar3} alt="calendar"  className="img-fluid w-100"/>
        </div>
        <div>
          <img src={Letter1} alt="letter"  className="img-fluid w-100"/>
        </div>
        <div>
          <img src={Letter2} alt="Letter"  className="img-fluid w-100"/>
        </div>
        <div>
          <img src={Resume1 } alt="resume"  className="img-fluid w-100"/>
        </div>
      </Slider>
    </div>
    </div>
    </div>
  );
}



/**

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
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
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
    <div className="d-flex justify-content-center bg-dark vh-100">
  <div className="container w3-margin-top">
    <div className="slider-container shadow-lg shadow-inner">
      <Slider {...settings}>
        <div>
          <img src={Calendar1} alt="calendar" className="img-fluid w-100"/>
        </div>
        <div>
          <img src={Calendar2} alt="calendar"  className="img-fluid w-100"/>
        </div>
        <div>
          <img src={Calendar3} alt="calendar"  className="img-fluid w-100"/>
        </div>
        <div>
          <img src={Letter1} alt="letter"  className="img-fluid w-100"/>
        </div>
        <div>
          <img src={Letter2} alt="Letter"  className="img-fluid w-100"/>
        </div>
        <div>
          <img src={Resume1 } alt="resume"  className="img-fluid w-100"/>
        </div>
      </Slider>
    </div>
    </div>
    </div>
  );
}
   */