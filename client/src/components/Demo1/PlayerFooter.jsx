import React from "react";
import { InView } from 'react-intersection-observer';
import { Link } from "react-router-dom";
import {BsTwitterX } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFileDownload, FaHome, FaPhoneSquare, FaSnapchatSquare } from "react-icons/fa";
import { PiPaperPlane } from "react-icons/pi";
import PlayerResume from "../../assets/PlayerResume.pdf";

const PlayerFooter = () => {

  return (
    <div>

      <style>
        {`
  
        /*start ANIMATIONS*/
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideLeft {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

.animate-fade-in {
  animation: fadeIn 2s ease-in-out;
}

.animate-slide-left {
  animation: slideLeft 2s ease-in-out;
}

/*end ANIMATIONS*/
body, h1,h2,h3,h4,h5,h6 {font-family: "Montserrat", sans-serif}
.w3-row-padding img {margin-bottom: 12px}
.w3-sidebar {width: 120px;background: #222;}
#main {margin-left: 120px}
@media only screen and (max-width: 600px) 
{#main {margin-left: 0}}
 `}
      </style>

 
<div className="text-center">

    <InView triggerOnce={true}>
          {({ inView, ref }) => (
          <div ref={ref} className={`w3-content w3-justify w3-text-grey w3-padding-16 
            ${inView ? "animate-fade-in" : ""}`} 
        id="player-footer">


            <hr />
         
        
          <div className="w3-container w3-padding-48">
            <div className="row">
              <div className="col-sm-12 col-md-5 col-lg-5 justify-content-start align-content-end">
              <h6 className="w3-text-light-grey">CONNECT WITH ME:</h6>
              <p>Thank you for visiting. Feedback is welcome—feel free to reach out directly or connect with me on social media.</p> 
              <p style={{}}>DOWNLOAD MY RESUME <span> <a 
                  id="download"
                  download
                className=" link-light"
                 href={PlayerResume} >
                  <span className="text-decoration-none" style={{marginRight:'5px'}}> < FaFileDownload/></span><span className="text-decoration-none">Joe Baseball</span>
              
    </a></span></p>       
             
              </div>
              <div className="col justify-content-center align-content-end">
            <div className="w3-margin-left">
              <h6 className="w3-text-light-grey w3-margin-left">CONTACT INFO</h6>
              </div>
                <ul>
             
              <li className="icon-hover-zoom text-decoration-none">
                  <Link className=" mx-1 link-light icon-hover-zoom"
                        style={{ fontSize: "1.1rem" }}>
    <strong>
      <PiPaperPlane /><span className="fw-light" style={{fontSize:'15px', marginLeft:'10px'}}>(123) 456-7890</span>
    </strong>
                            </Link>
                            
                            </li>
<br />
                            <li className="icon-hover-zoom mt-1">
                            <Link
                               className="mx-1 link-light"
                              style={{ fontSize: "1rem" }}
                            >
                              
    <strong>
    <FaPhoneSquare /><span className="fw-light" style={{fontSize:'15px', marginLeft:'10px'}}>players-email@mail.com</span>
    </strong>      
                            </Link>
                            </li>
                            <br />
                            <li className="icon-hover-zoom mt-1">
                            <Link
                               className="mx-1 link-light"
                              style={{ fontSize: "1.1rem" }}
                            >
                              
    <strong>
    <FaHome /><span className="fw-light" style={{fontSize:'14px', marginLeft:'10px'}}>123 Any St. Town, ST. 54321</span>
    </strong>      
                            </Link>
                            </li>
                            </ul>
              </div>
              <div className="col justify-content-end  align-content-end">
              <div className="w3-margin-left">
              <h6 className="w3-text-light-grey w3-margin-left">SOCIALS</h6>
              </div>
                  <ul className="w3-margin-bottom">

                            <li className="icon-hover-zoom mt-1">
                  <Link
                              className=" mx-1 link-light"
                              style={{ fontSize: "1rem" }}
                            >
    <strong>
      <BsTwitterX /><span className="fw-light" style={{fontSize:'14px', marginLeft:'10px'}}>@playersXhandle</span>
    </strong>
    </Link>
  </li>
                            
<br />

                            <li className="icon-hover-zoom mt-1">
                            <Link
                               className="mx-1 link-light"
                              style={{ fontSize: "1.1rem" }}
                            >
    <strong>
    <FaSquareInstagram /><span className="fw-light" style={{fontSize:'14px', marginLeft:'10px'}}>@playerIG</span>
    </strong>
  </Link>
  </li>
  <br />
                            <li className="icon-hover-zoom mt-1">
                            <Link
                           className="mx-1 link-light"
                              style={{ fontSize: "1.1rem" }}
                            >
                                      
    <strong>
    <FaSnapchatSquare /><span className="fw-light" style={{fontSize:'14px', marginLeft:'10px'}}>@playerSnap</span>
    </strong>             
                            </Link>
                            </li>
                  </ul>
                </div>


                </div>
            </div>
                
          {/* End Contact Section */}
        </div>
          )}
    </InView>


  
        {/* END PAGE CONTENT */}
        
        <script>
          {`
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-theme-d1";
  } else { 
    x.className = x.className.replace("w3-show", "");
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace(" w3-theme-d1", "");
  }
}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}
  `}
        </script>
      
    </div>
    </div>
  );
};

export default PlayerFooter;