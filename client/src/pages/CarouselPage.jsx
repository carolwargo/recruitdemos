import React from "react";
import CarouselComponent from "../components/Carousel/CarouselComponent";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SimpleSlider() {

  return (
    <div className="d-flex justify-content-center bg-dark vh-100">
  <div className="container w3-margin-top">
<CarouselComponent />
    </div>
    </div>
  );
}


