import React from "react";
import Stats1 from "../../assets/images/Video/Stats1.png";
import Stats2 from "../../assets/images/Video/Stats2.png";

import { InView } from "react-intersection-observer";
import Carousel from "react-bootstrap/Carousel";

const PlayerCarousel = () => {
  return (
    <div>
      {/* Media Section */}
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={`w3-content w3-justify w3-text-grey 
            ${inView ? "animate-fade-in" : ""}`}
            id="media"
          >
            <div className="row" style={{ margin: "0 -16px" }}>
              <div className="container w3-padding-small">
                <hr className="w3-opacity w3-text-white w3-padding-16" />
                <h1 className="fw-bold text-white">PROGRESS & UPDATES</h1>
              </div>
              <div className="col-12 col-md-12 col-lg-12 my-2">
                <div className="w3-container w3-padding">
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
          </div>
        )}
      </InView>
    </div>
  );
};

export default PlayerCarousel;
