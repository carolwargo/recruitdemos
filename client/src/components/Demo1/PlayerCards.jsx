import React from "react";
import { Link } from "react-router-dom";
import { InView } from "react-intersection-observer";
import DBWhite from "../../assets/images/Demo1/DBWhite.png";
import DBBlack from "../../assets/images/Demo1/DBBlack.png";

const PlayerCards = () => {
  return (
    <div className="sm-service-cards" id="sm-service-cards">
         <div className="page-container">
   
           <InView triggerOnce={true}>
             {({ inView, ref }) => (
               <div
                 ref={ref}
                 className={`w3-content w3-justify w3-text-grey w3-padding-16 
               ${inView ? "animate-fade-in" : ""}`}
                 id="cards"
               >


<hr className="w3-opacity w3-text-white w3-padding-16 w3-margin-top" />
          <h1 className="w3-text-light-grey w3-margin-bottom">Team Affiliations</h1>
          
              
              <div className="row d-flex justify-content-center align-items-center w3-padding-24">
               
  {/* high school */}
  <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-0">
                <div className=" container-fluid">
                  <div className="position-relative">
                    <img
                      src={DBWhite}
                      alt="card link"
                      style={{ width: "100%" }}
                      className="rounded shadow shadow-5-strong hover-shadow"
                    />
                    {/* Dark Overlay */}
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-secondary opacity-70  shadow shadow-5-strong w3-hover-blue rounded"></div>
                  </div>
                  {/* Text */}
                  <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                    <h3
                     style={{ color:'#fcedb8',textShadow:'1px 1px 2px black'}}><b>ST. MARYS</b> High School</h3>
                    <p>Conference SMAC- <br />State Ranked #1</p>
                   <span className=" opacity-60">
                    <span className=" small"> <i className="fas fa-location-pin"></i>  <Link
                        className="w3-text-light-grey  mt-2"
                        style={{
                          color: "black",
                          textShadow: "6px 6px 17px rgba(0, 0, 0, 8)",
                        }}
                      >Annapolis, Maryland
                      </Link>
                      </span>
                      <br />

                      <span className=" small"> <i className="fas fa-video-camera"></i>  <Link
                        className="w3-text-light-grey  mt-2"
                        style={{
                          color: "black",
                          textShadow: "6px 6px 17px rgba(0, 0, 0, 8)",
                        }}
                      >Watch Games Live
                      </Link>
                      </span>
                      <br />
                      <span className=" small"> <i className="fas fa-globe mr-2"></i>  <Link
                        className="w3-text-light-grey  mt-2"
                        style={{
                          color: "black",
                          textShadow: "6px 6px 17px rgba(0, 0, 0, 8)",
                        }}
                      > Program Highlights
                      </Link>
                      </span>
                      </span>
                  </div>
                </div>
                </div>
               
               {/* summer team */}
                <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-0">
                 <div className=" container-fluid">
                  <div className="position-relative">
                    <img
                      src={DBWhite}
                      alt="video editing card link"
                      style={{ width: "100%" }}
                      className="rounded shadow shadow-5-strong hover-shadow"
                    />
                    {/* Dark Overlay */}
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-70  shadow shadow-5-strong w3-hover-yellow rounded"></div>
                  </div>
                  <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                  <h3
                     style={{ color:'#fcedb8',textShadow:'1px 1px 2px black'}}><b>DIRTBAGS</b> National</h3>
                    <p>17U National Team Ranked #8</p>
                    <span className=" small"> <i className="fas fa-video-camera"></i>  <Link
                        className="w3-text-light-grey  mt-2"
                        style={{
                          color: "black",
                          textShadow: "6px 6px 17px rgba(0, 0, 0, 8)",
                        }}
                      >Watch Games Live
                      </Link>
                      </span>
                      <br />
                      <span className=" small"> <i className="fas fa-globe mr-2"></i>  <Link
                        className="w3-text-light-grey  mt-2"
                        style={{
                          color: "black",
                          textShadow: "6px 6px 17px rgba(0, 0, 0, 8)",
                        }}
                      > Program Highlights
                      </Link>
                      </span>
             
                  </div>
                </div>
                </div>
  {/*Honor team */}
                <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-0">
                <div className=" container-fluid">
                  <div className="position-relative">
                    <img
                      src={DBBlack}
                      alt="webdesign card link"
                      style={{ width: "100%" }}
                      className=" w3-grayscale-max rounded shadow shadow-5-strong hover-shadow"
                    />
                    {/* Dark Overlay */}
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-70 shadow shadow-5-strong w3-hover-red rounded"></div>
                  </div>
                  {/* Text */}
                  <div className="position-absolute top-50 start-50 translate-middle text-black text-center">
                  <h3
                     style={{ color:'#fcedb8',textShadow:'1px 1px 2px black'}}><b>SELECT</b> TEAMS</h3>
                   
                   <Link
                        className=" link-black mt-2 small"
                        style={{
                          color: "white",
                          textShadow: "1px 1px 3px rgba(0, 0, 0, 8)",
                        }}
                      >
                  
                  
                    <span><b>TEAM USA</b> 16U <br />

                    <b>BIG 26</b> Team Maryland<br />

                   

                    <b>ALL-MET</b> First Team</span>
</Link>
<p className="small text-white mt-2"
style={{textShadow:'1px 1px 3px black'}}>Click team above for more..</p>
          </div>
                  </div>
                </div>
              </div>
{/**
              <div className="row d-flex justify-content-center align-items-center">
                <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-0">
                  <div className="position-relative">
                    <img
                      src={DBBlack}
                      alt="Left"
                      style={{ width: "100%" }}
                      className=" shadow shadow-5-strong hover-shadow w3-hover-pink"
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-70  shadow shadow-5-strong  w3-hover-pink"></div>
                  </div>
                  <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                    <h2 className="w3-text-gray">Text on Top</h2>
                    <p className="w3-text-gray">
                      This is the text overlaid on the image.
                    </p>
                  </div>
                </div>
                <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-0">
                  <div className="position-relative">
                    <img
                      src={DBBlack}
                      alt="Center"
                      style={{ width: "100%" }}
                      className=" shadow shadow-5-strong hover-shadow w3-hover-pink"
                    />
                  
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-70  shadow shadow-5-strong  w3-hover-pink"></div>
                  </div>
                  <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                    <h2 className="w3-text-pink">Text on Top</h2>
                    <p className="w3-text-pink">
                      This is the text overlaid on the image.
                    </p>
                  </div>
                </div>
                <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-0">
                  <div className="position-relative">
                    <img
                      src={DBWhite}
                      alt="Right"
                      style={{ width: "100%" }}
                      className=" shadow shadow-5-strong hover-shadow w3-hover-pink"
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-70  shadow shadow-5-strong  w3-hover-pink"></div>
                  </div>
                  <div className="position-absolute top-50 start-50 translate-middle text-black text-center">
                    <h2>Text on Top</h2>
                    <p>This is the text overlaid on the image.</p>
                  </div>
                </div>
              </div>
 */}
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
