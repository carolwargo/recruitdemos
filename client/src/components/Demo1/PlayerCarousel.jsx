import React from "react";
import Stats1 from "../../assets/images/Video/Stats1.png";
import Stats2 from "../../assets/images/Video/Stats2.png";

import { InView } from "react-intersection-observer";
import Carousel from "react-bootstrap/Carousel";

const PlayerCarousel = () => {
  return (
    <div>

        <InView triggerOnce={true}>
          {({ inView, ref }) => (
          <div ref={ref} className={`w3-content w3-justify w3-text-grey w3-padding-16 
            ${inView ? "animate-fade-in" : ""}`} 
          id="carousel">
             <hr className="w3-opacity w3-text-white w3-padding-16 w3-margin-top" />
          <h1 className="w3-text-light-grey w3-margin-bottom">PROGRESS & UPDATES</h1>
          <div className="w3-row-padding w3-padding-16" style={{ margin: "0 -16px" }}>
       
          <div className="col-sm-12 col-md-12 col-lg-12">  
          <Carousel data-bs-theme="light red-glow">
                    <Carousel.Item>
                      <img
                        className="d-block w-100 rounded shadow-4-secondary w3-grayscale-max"
                        src={Stats1}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 rounded shadow-4-secondary w3-grayscale-max"
                        src={Stats2}
                        alt="Second slide"
                      />
                    </Carousel.Item>
                  </Carousel>
            </div>
            </div>
            </div>
        )}
      </InView>
    </div>
  );
};

export default PlayerCarousel;
