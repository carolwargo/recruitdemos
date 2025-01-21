import React from "react";
import { Link } from "react-router-dom";
import { InView } from "react-intersection-observer";
import Web from "../../assets/images/ServiceCards/Web.png";
import Graphics from "../../assets/images/ServiceCards/Graphics.png";
import Video from "../../assets/images/ServiceCards/Video.png";
import Market from "../../assets/images/ServiceCards/Market.png";
import "../../styles/service-cards.css";

const PlayerCards = () => {
  return (
    <div className="sm-service-cards" id="sm-service-cards">
   
         <div className="page-container">
           {/* Page Content */}
   
           {/* Contact Section */}
   
           <hr />
   
           <InView triggerOnce={true}>
             {({ inView, ref }) => (
               <div
                 ref={ref}
                 className={`w3-content w3-justify w3-text-grey w3-padding-16 
               ${inView ? "animate-fade-in" : ""}`}
                 id="contact"
               >
                 {/* Contact section */}
                 <div
                   className="w3-container w3-light-grey rounded w3-padding-32 w3-padding-large"
                   id="contact"
                 >



            <div className="container mb-2 w3-padding-top-64">
              <div className="row d-flex justify-content-center align-items-center w3-padding-large w3-padding-24">
                <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-0">
                  {/* Image Container */}
                  <div className="position-relative">
                    <img
                      src={Video}
                      alt="video editing card link"
                      style={{ width: "100%" }}
                      className=" shadow shadow-5-strong hover-shadow"
                    />
                    {/* Dark Overlay */}
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-70  shadow shadow-5-strong w3-hover-purple"></div>
                  </div>
                  {/* Text */}
                  <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                    <h2>Video Editing</h2>
                    <p>This is the text overlaid on the image.</p>
                    <Link
                      to="/video"
                      className="button text-white"
                      style={{ textDecoration: "none" }}
                    >
                      <button
                        className="w3-button border border-light w3-text-light-grey  w3-round-large mt-2"
                        style={{
                          color: "black",
                          boxShadow: "6px 6px 17px rgba(0, 0, 0, 8)",
                        }}
                      >
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
                <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-0">
                  {/* Image Container */}
                  <div className="position-relative">
                    <img
                      src={Graphics}
                      alt="graphics card link"
                      style={{ width: "100%" }}
                      className=" shadow shadow-5-strong hover-shadow"
                    />
                    {/* Dark Overlay */}
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-secondary opacity-70  shadow shadow-5-strong w3-hover-purple"></div>
                  </div>
                  {/* Text */}
                  <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                    <h2>Graphic Design</h2>
                    <p>Eye-catching visual content designed to...</p>
                    <Link
                      to="/graphics"
                      className="button text-white"
                      style={{ textDecoration: "none" }}
                    >
                      <button
                        className="w3-button border border-light w3-text-light-grey  w3-round-large mt-2"
                        style={{
                          color: "black",
                          boxShadow: "6px 6px 17px rgba(0, 0, 0, 8)",
                        }}
                      >
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
                <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-0">
                  {/* Image Container */}
                  <div className="position-relative">
                    <img
                      src={Web}
                      alt="webdesign card link"
                      style={{ width: "100%" }}
                      className=" shadow shadow-5-strong hover-shadow"
                    />
                    {/* Dark Overlay */}
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-70 shadow shadow-5-strong w3-hover-purple"></div>
                  </div>
                  {/* Text */}
                  <div className="position-absolute top-50 start-50 translate-middle text-black text-center">
                    <h2>Recruiting Websites</h2>
                    <p>This is the text overlaid on the image.</p>
                    <Link
                      to="/web"
                      className="button text-white"
                      style={{ textDecoration: "none" }}
                    >
                      <button
                        className="w3-button border border-black w3-text-black  w3-round-large mt-2"
                        style={{
                          color: "black",
                          boxShadow: "6px 6px 17px rgba(0, 0, 0, 8)",
                        }}
                      >
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center align-items-center w3-padding-large">
                <div className="container  text-center w3-padding-32">
                  <h2 className="text-center w3-text-pink mb-3">
                    <b>CONSIDERATION FOR ALL USERS!</b>
                  </h2>
                  <h4>
                    Responsive and accessible design should always take
                    precedence. Images and cards are styled to maintain
                    functionality and accommodate all users across all devices.
                  </h4>
                  <p className="mt-4 text-center">
                    The following example demonstrates how to use images and
                    cards in a responsive and accessible manner. On desktop
                    screens, the cards are displayed side by side, similar to a
                    tri-fold brochure. On mobile devices, the cards are stacked
                    vertically to ensure they remain easily readable and
                    accessible.
                  </p>
                </div>
                <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-0">
                  {/* Image Container */}
                  <div className="position-relative">
                    <img
                      src={Web}
                      alt="Left"
                      style={{ width: "100%" }}
                      className=" shadow shadow-5-strong hover-shadow w3-hover-pink"
                    />
                    {/* Dark Overlay */}
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-70  shadow shadow-5-strong  w3-hover-pink"></div>
                  </div>
                  {/* Text */}
                  <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                    <h2 className="w3-text-gray">Text on Top</h2>
                    <p className="w3-text-gray">
                      This is the text overlaid on the image.
                    </p>
                  </div>
                </div>
                <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-0">
                  {/* Image Container */}
                  <div className="position-relative">
                    <img
                      src={Graphics}
                      alt="Center"
                      style={{ width: "100%" }}
                      className=" shadow shadow-5-strong hover-shadow w3-hover-pink"
                    />
                    {/* Dark Overlay */}
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-70  shadow shadow-5-strong  w3-hover-pink"></div>
                  </div>
                  {/* Text */}
                  <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                    <h2 className="w3-text-pink">Text on Top</h2>
                    <p className="w3-text-pink">
                      This is the text overlaid on the image.
                    </p>
                  </div>
                </div>
                <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-0">
                  {/* Image Container */}
                  <div className="position-relative">
                    <img
                      src={Market}
                      alt="Right"
                      style={{ width: "100%" }}
                      className=" shadow shadow-5-strong hover-shadow w3-hover-pink"
                    />
                    {/* Dark Overlay */}
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-70  shadow shadow-5-strong  w3-hover-pink"></div>
                  </div>
                  {/* Text */}
                  <div className="position-absolute top-50 start-50 translate-middle text-black text-center">
                    <h2>Text on Top</h2>
                    <p>This is the text overlaid on the image.</p>
                  </div>
                </div>
              </div>
            </div>
            <footer className="text-muted position-fixed bottom-0 start-0 w-100">
              <div className="container">
                <p className="float-end mb-1">
                  <a href="#cards" style={{ color: "#FF385C" }}>
                    Back to top
                  </a>
                </p>
              </div>
            </footer>
          </div>
        </div>
        )}
      </InView>
      </div>
    </div>
  );
};

export default PlayerCards;

/**
 * const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.1, // Percentage of the div that needs to be visible to trigger the animation
  });
 */

/**
   import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
    <motion.div
        ref={ref}
        initial={{ y: -20, opacity: 0.5 }}
        animate={inView ? { y: 0, opacity: 1} : {}}
        exit={{ y: 20, opacity: 0.5 }}
        transition={{ duration: 0.8 }}
      ></motion.div>
   */
