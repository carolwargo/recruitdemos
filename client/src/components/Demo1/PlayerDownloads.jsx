import React from "react";
import { InView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { RiBarChartBoxLine } from "react-icons/ri";
import Resume1  from "../../assets/images/Metrics/Resume1.png";
import Calendar1 from '../../assets/images/Calendars/Calendar1.png';
import Calendar2 from '../../assets/images/Calendars/Calendar2.png';
import Calendar3 from '../../assets/images/Calendars/Calendar3.png';
import Calendar4 from '../../assets/images/Calendars/Calendar4.png';
import Letter1 from '../../assets/images/Letters/Letter1.png';
import Letter2 from '../../assets/images/Letters/Letter2.png';
import Letter3 from '../../assets/images/Letters/Letter3.png';
import Letter4 from '../../assets/images/Letters/Letter4.png';
import Transcript1 from '../../assets/images/Letters/Transcript1.png';
import Transcript2 from '../../assets/images/Letters/Transcript2.png';
import Metrics1 from '../../assets/images/Metrics/Metrics1.png';
import Metrics2 from '../../assets/images/Metrics/Metrics2.png';
import MetricsAll from '../../assets/images/Metrics/MetricsAll.png';


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
        {/** Game Schedules */}
               <button
                 onClick={() => myFunction("Demo1")}
                     className="w3-button w3-block mt-2 w3-left-align rounded
                  btn-outline-secondary-light"
               >
                     <i className="fas fa-calendar-check fa-fw w3-margin-right mt-2"></i>
              Game Schedules     
               </button>

               <div id="Demo1" className="w3-hide w3-container">
               <div className="row mt-2">
                   <div className="col-sm-12 col-md-6 col-lg-6">
                   <div className="m-1 small text-center">
                   <Link className=" link-light text-decoration-none"> 
                   <img src={Calendar1} alt="sample" className="w-100" />
                 </Link>
                    <br/>Sample 1
                   </div>
                   </div>

                   <div className="col-sm-12 col-md-6 col-lg-6">
                   <div className="m-1 small text-center">
                   <Link className=" link-light text-decoration-none"> 
                   <img src={Calendar2} alt="sample" className="w-100" /></Link>
                    <br/>Sample 2
                   </div>
                   </div>

                   <div className="col-sm-12 col-md-6 col-lg-6">
                   <div className="m-1 small text-center">
                   <Link className=" link-light text-decoration-none"> 
                   <img src={Calendar3} alt="sample" className="w-100" /></Link>
                    <br/>Sample 3
                   </div>
                   </div>

                   <div className="col-sm-12 col-md-6 col-lg-6">
                   <div className="m-1 small text-center">
                   <Link className=" link-light text-decoration-none"> 
                   <img src={Calendar4} alt="sample" className="w-100" /></Link>
                    <br/>Sample 4
                   </div>
                   </div>
                 </div>
               </div>

               <button
                 onClick={() => myFunction("Demo2")}
                  className="w3-button w3-block mt-2 w3-left-align rounded
                  btn-outline-secondary-light"
               >
                 <i className="fa fa-book fa-fw w3-margin-right"></i>
                 Unofficial Transcripts
               </button>
               <div id="Demo2" className="w3-hide w3-container">
                 <div className="row mt-2">
                   <div className="col-sm-12 col-md-6 col-lg-6">
                   <div className="m-1 small text-center">
                   <Link className=" link-light text-decoration-none"> 
                   <img src={Transcript1} alt="sample" className="w-100" />
               </Link>
                    <br/>Freshman
                   </div>
                   </div>


                   <div className="col-sm-12 col-md-6 col-lg-6">
                   <div className="m-1 small text-center">
                   <Link className=" link-light text-decoration-none"> 
                   <img src={Transcript2} alt="sample" className="w-100" /></Link>
                    <br/>Sophomore
                   </div>
                   </div>
              
                 </div>
               </div>
{/**  References*/}
               <button
                 onClick={() => myFunction("Demo3")}
                 className="w3-button w3-block mt-2 w3-left-align rounded
                  btn-outline-secondary-light"
               >
                 <i className="fas fa-user fa-fw w3-margin-right"></i>
                 References
               </button>
               <div id="Demo3" className="w3-hide w3-container">
                 <div className="row mt-2">
                   <div className="col-sm-12 col-md-6 col-lg-6">
                   <div className="m-1 small text-center">
                     <Link className=" link-light text-decoration-none">
                     <img src={Letter1} alt="sample" className="w-100" />
                     </Link> <br />Coach Joe
                   </div>
                   </div>


                   <div className="col-sm-12 col-md-6 col-lg-6">
                   <div className="m-1 small text-center">
                    <Link className=" link-light text-decoration-none">
                    <img src={Letter2} alt="sample" className="w-100" /></Link>
                    <br />
                    Coach Jack
                   </div>
                   </div>
                   <div className="col-sm-12 col-md-6 col-lg-6">
                   <div className="m-1 small text-center">
                    <Link className=" link-light text-decoration-none">
                    <img src={Letter4} alt="sample" className="w-100" /></Link>
                    <br />
                    Principal Joe
                    </div>
                   </div>
                   <div className="col-sm-12 col-md-6 col-lg-6">
                   <div className="m-1 small text-center">
                    <Link className=" link-light text-decoration-none">
                  <img src={Letter3} alt="sample" className="w-100" /></Link>
                    <br />
                    Teacher Jane
                   </div>
                   </ div>
                 </div>
               </div>
        
               <button
                 onClick={() => myFunction("Demo4")}
                    className="w3-button w3-block mt-2 w3-left-align rounded
                  btn-outline-secondary-light"
               >
                     <i className="fas fa-chart-line fa-fw w3-margin-right"></i>
              Stats In Comparisson 
               </button>

               <div id="Demo4" className="w3-hide w3-container">
               <div className="row mt-2">
                   <div className="col-sm-12 col-md-6 col-lg-6">
                   <div className="m-1 small text-center">
                     <Link className=" link-light text-decoration-none">
                     <RiBarChartBoxLine style={{fontSize:'3rem'}}/>
                     </Link> <br />Fall
                   </div>
                   </div>


                   <div className="col-sm-12 col-md-6 col-lg-6">
                   <div className="m-1 small text-center">
                    <Link className=" link-light text-decoration-none">
                    <RiBarChartBoxLine style={{fontSize:'3rem'}}/></Link>
                    <br />
                    High School
                   </div>
                   </div>
                   <div className="col-sm-12 col-md-6 col-lg-6">
                   <div className="m-1 small text-center">
                    <Link className=" link-light text-decoration-none">
                    <RiBarChartBoxLine style={{fontSize:'3rem'}}/></Link>
                    <br />
                    Summer
                    </div>
                   </div>
                   <div className="col-sm-12 col-md-6 col-lg-6">
                   <div className="m-1 small text-center">
                    <Link className=" link-light text-decoration-none">
                    <RiBarChartBoxLine style={{fontSize:'3rem'}}/></Link>
                    <br />
                    Overall
                   </div>
                   </ div>
                 </div>
               </div>

               <button
                 onClick={() => myFunction("Demo5")}
                    className="w3-button w3-block mt-2 w3-left-align rounded
                  btn-outline-secondary-light"
               >
                 <i className="fas fa-person-running fa-fw w3-margin-right"></i>
              Performance Metrics
               </button>
               <div id="Demo5" className="w3-hide w3-container">
               <div className="row">
                   <div className="col-sm-12 col-md-12 col-lg-12">
                   <div className="small text-center my-2">
                     <Link className=" link-light text-decoration-none">
                   <img src={Metrics1} alt="metric" className="w-100"/>
                     </Link> <br /> <span className="mt-2">Metrics</span>
                   </div>
                   <div className="small text-center my-2">
                     <Link className=" link-light text-decoration-none">
                   <img src={Metrics2} alt="metric" className="w-100"/>
                     </Link> <br /> <span className="mt-2">Metrics</span>
                   </div>
                 
                   <div className="small text-center my-2">
                     <Link className=" link-light text-decoration-none">
                   <img src={MetricsAll} alt="metric" className="w-100"/>
                     </Link> <br /> <span className="mt-2">Metrics</span>
                   </div>
                   </div>
                 </div>
               </div>

               <button
                 onClick={() => myFunction("Demo6")}
                   className="w3-button w3-block mt-2 w3-left-align rounded
                  btn-outline-secondary-light"
               >
                 <i className="fa fa-pencil fa-fw w3-margin-right"></i>
                 Player Resume
               </button>
               <div id="Demo6" className="w3-hide w3-container">
               <div className="row">
                   <div className="col-sm-12 col-md-12 col-lg-12">
                   <div className="small text-center my-2">
                     <Link className=" link-light text-decoration-none">
                   <img src={Resume1} alt="metric" className="w-100"/>
                     </Link> <br /> <span className="mt-2">Resume</span>
                   </div>
                   </div>
                 </div>
               </div>
             </div>
             </div>
             <div className="col-sm-12 col-md-9 col-lg-9">
             <iframe
  width="100%"
  height="500px"
  title="PDF Viewer"
/>

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

/**import { BsEnvelopePaper, BsFacebook, BsPhone, BsTwitterX } from "react-icons/bs";
import {FaSnapchatSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa"; */

/**    <div className="col-sm-12 col-md-9 col-lg-9">
             <div
                className="w3-container w3-light-grey rounded w3-padding-32 w3-padding-small"
                id="contact"
                style={{ maxWidth: "700px" }}
              >
     <div className="w3-container w3-content" >
                     <div className="container-fluid text-center w3-text-black">
                          <h4 className="w3-center">
                  Contact Me
                  </h4>
                          <hr className=" my-2" />
                          <p className="w3-center fw-light small px-5">
                    Get in touch direct- message me on social media,{" "}
                    <Link>call</Link>, <Link>email</Link> or fill out the form
                    to send me a message through the site.
                  </p>
                          </div>
                         < br/>  
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
                </div> */