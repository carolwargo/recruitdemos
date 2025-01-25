import React from "react";
import { InView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import {FaSnapchatSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const myFunction = (id) => {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") === -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  };
  
const PlayerDownloads = () => {
  return (
    <div>
      <style>
        {`
  button-gradient {
        backgroundImage: 'linear-gradient(to bottom right,#c6c5c5, #e4e2e2, #8d8d8d)'
                }
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

      <div className="page-container">
        {/* Page Content */}
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w3-content w3-justify w3-text-grey w3-padding-16 
            ${inView ? "animate-fade-in" : ""}`}
              id="downloads"
            >
         
    <div className="row d-flex justify-content-center">
    <hr className="w3-opacity w3-text-white w3-padding-16 w3-margin-top" />      
 <div className="col-sm-12 col-md-3 col-lg-3 rounded">
 <h1 className="w3-text-light-grey w3-margin-bottom">Downloads</h1>
     
      <div className="rounded">
               <button
                 onClick={() => myFunction("Demo1")}
                 className="w3-button w3-block  w3-left-align rounded mt-3"
               >
                     <i className="fas fa-calendar-check fa-fw w3-margin-right mt-2"></i>
              Schedule     
               </button>

               <div id="Demo1" className="w3-hide w3-container">
                 <ul className="text-decoration-none mt-2">
                   <li>
                    <Link className=" link-light">2022 Summer</Link>
                   </li>
                   <li>
                    <Link className=" link-light">2022 Fall</Link>
                   </li>
                   <li>
                    <Link className=" link-light">2023 Spring</Link>
                   </li>
                 </ul>
               </div>

               <button
                 onClick={() => myFunction("Demo2")}
                 className="w3-button w3-block  w3-left-align rounded"
               >
                 <i className="fa fa-book fa-fw w3-margin-right"></i>
                 Unofficial Transcripts
               </button>
               <div id="Demo2" className="w3-hide w3-container">
                 <ul className="text-decoration-none mt-2">
                   <li>
                    <Link className=" link-light">2020 Freshman</Link>
                   </li>
                   <li>
                    <Link className=" link-light">2021 Sophomore</Link>
                   </li>
                   <li>
                    <Link className=" link-light">2022 Junior</Link>
                   </li>
                 </ul>
               </div>

               <button
                 onClick={() => myFunction("Demo3")}
                 className="w3-button w3-block  w3-left-align rounded"
               >
                 <i className="fas fa-user fa-fw w3-margin-right"></i>
                 References
               </button>
               <div id="Demo3" className="w3-hide w3-container">
                 <ul className="text-decoration-none mt-2">
                   <li>
                     <Link className=" link-light">Coach Joe</Link>
                   </li>
                   <li>
                    <Link className=" link-light">Coach Jack</Link>
                   </li>
                   <li>
                    <Link className=" link-light">Principal Jock</Link>
                   </li>
                   <li>
                    <Link className=" link-light">Teacher Jane</Link>
                   </li>
                 </ul>
               </div>
        
               <button
                 onClick={() => myFunction("Demo4")}
                 className="w3-button w3-block  w3-left-align rounded"
               >
                     <i className="fas fa-chart-line fa-fw w3-margin-right"></i>
              Stats In Comparisson 
               </button>

               <div id="Demo4" className="w3-hide w3-container">
                 <ul className="text-decoration-none mt-2">
                   <li>
                    <Link className=" link-light">2022 Summer</Link>
                   </li>
                   <li>
                    <Link className=" link-light">2022 Fall</Link>
                   </li>
                   <li>
                    <Link className=" link-light">2023 Spring</Link>
                   </li>
                 </ul>
               </div>

               <button
                 onClick={() => myFunction("Demo5")}
                 className="w3-button w3-block  w3-left-align rounded"
               >
                 <i className="fas fa-person-running fa-fw w3-margin-right"></i>
              Performance Metrics
               </button>
               <div id="Demo5" className="w3-hide w3-container">
                 <ul className="text-decoration-none mt-2">
                   <li>
                    <Link className=" link-light">2020 Freshman</Link>
                   </li>
                   <li>
                    <Link className=" link-light">2021 Sophomore</Link>
                   </li>
                   <li>
                    <Link className=" link-light">2022 Junior</Link>
                   </li>
                 </ul>
               </div>

               <button
                 onClick={() => myFunction("Demo6")}
                 className="w3-button w3-block  w3-left-align rounded mb-3"
               >
                 <i className="fa fa-pencil fa-fw w3-margin-right"></i>
                 Player Resume
               </button>
               <div id="Demo6" className="w3-hide w3-container">
                 <ul className="text-decoration-none mt-2 ">
                 <li>
                    <Link className=" link-light">Player Resume</Link>
                   </li>
                 </ul>
               </div>
             </div>
             </div>
             <div className="col-sm-12 col-md-9 col-lg-9">
             <div
                className="w3-container w3-light-grey rounded w3-padding-32 w3-padding-small"
                id="contact"
                style={{ maxWidth: "700px" }}
              >
     <div className="w3-container" >
                  <div className="row d-flex justify-content-end align-items-center">
                  <div className="col-sm-4 col-md-4 col-lg-4">
                          <div className="container-fluid text-center w3-text-black">
                          <h4 className="w3-center">
                  Contact Me
                  </h4>
                          <hr className=" my-2" />
                          <p className="text-body-emphasis fw-bold small mb-2"> 
                            <span>PHONE: <Link className="link-secondary fw-light"> (123)456-7890</Link></span> 
               </p>  
                     <p className="text-body-emphasis fw-bold small mb-2">      
                     <span>EMAIL: <Link className="link-secondary fw-light"> mail@gmail.com</Link></span>
                     </p>  
                            <Link
                              className="text-decoration-none link-dark w3-opacity"
                              style={{ fontSize: "1.2rem" }}
                            >
                              <strong>
                                <BsTwitterX className="" />
                              </strong>{" "}
                            </Link>
                            <Link
                              className="text-decoration-none link-dark w3-opacity"
                              style={{ fontSize: "1.3rem" }}
                            >
                              <strong>
                                <BsFacebook className="" />
                              </strong>{" "}
                            </Link>
                            <Link
                              className="text-decoration-none link-dark w3-opacity"
                              style={{ fontSize: "1.5rem" }}
                            >
                              <strong>
                            < FaInstagram/>
                              </strong>{" "}
                            </Link>
                            <Link
                              className="text-decoration-none w3-opacity link-dark"
                              style={{ fontSize: "1.4rem" }}
                            >
                              <strong>
                                <FaSnapchatSquare />
                              </strong>
                            </Link>
                          </div>
                        </div>

                        <div className="col-sm-8 col-md-8 col-lg-8">
                         
                  {/** 
                  <p className="w3-center">
                    Get in touch direct- message me on social media,{" "}
                    <Link>call</Link>, <Link>email</Link> or fill out the form
                    to send me a message through the site.
                  </p>
                  */}
                  <form action="/action_page.php" target="_blank">

                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                    <input
                        className="w3-input w3-border"
                        type="text"
                        name="Name"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                    <input
                        className="w3-input w3-border"
                        type="email"
                        placeholder="Email"
                        name="Email"
                        required
                      />
                    </div>
                  </div>
               
                  <div className="my-3">
                      <textarea
                        className="w3-input w3-border"
                        type="text"
                        name="Message"
                        rows="4"
                        placeholder="Message"
                        required
                      />
                    </div>
                
                    <button
                      type="submit"
                      className="w3-button w3-block w3-black w3-margin-top"
                    >
                      Send Message
                    </button>
                  </form>
                  </div>
                  </div>
                </div>
      </div>
             </div>
             </div>
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

export default PlayerDownloads;
