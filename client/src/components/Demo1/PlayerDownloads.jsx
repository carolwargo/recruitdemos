import React, {useState} from "react";
import { InView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Stats2 from "../../assets/images/Video/Stats2.png";
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

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

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

      <div className="page-container ">
        {/* Page Content */}
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w3-content w3-justify w3-text-grey w3-padding-16 
            ${inView ? "animate-fade-in" : ""}`}
              id="downloads"
            >
                  <hr className="w3-opacity w3-text-white w3-padding-16 w3-margin-top" /> 
          <h1 className="w3-text-light-grey w3-margin-bottom">Downloads</h1>
    <div className="row justify-content-center align-items-center d-flex shadow rounded" style={{ border: "2px solid #232323" }}>
 <div className="col-sm-12 col-md-4 col-lg-4 bg-dark  pt-2 px-0" style={{ borderRight: "2px solid #232323" }}>
      <div className="rounded container my-2 w3-padding-large">
        <div className="container w3-padding">
        <h4 className="w3-text-light-grey">Download Menu</h4>
        <p>Select a document to view. PDF versions with clickable links are an option.</p>
        </div>


        {/** Game Schedules */}
        <button
                onClick={() => myFunction("Demo1")}
                className="w3-button w3-block mt-2 w3-left-align rounded"
              >
                <i className="fas fa-calendar-check fa-fw w3-margin-right mt-2"></i>
                Game Schedules
              </button>
              <div id="Demo1" className="w3-hide w3-container">
              <div className="row justify-content-center mt-2">
                  <div className="col-6 text-center">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Calendar1)}
                    >
                      <img src={Calendar1} alt="Calendar 1" className="w-100" />
                      <br />
                      Sample 1
                    </Link>
                  </div>
                  <div className="col-6 text-center">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Calendar2)}
                    >
                      <img src={Calendar2} alt="Calendar 2" className="w-100" />
                      <br />
                      Sample 2
                    </Link>
                  </div>

                  <div className="col-6 text-center">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Calendar3)}
                    >
                      <img src={Calendar3} alt="Calendar 3" className="w-100" />
                      <br />
                      Sample 3
                    </Link>
                  </div>
                  <div className="col-6 text-center">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Calendar4)}
                    >
                      <img src={Calendar4} alt="Calendar 4" className="w-100" />
                      <br />
                      Sample 4
                    </Link>
                  </div>
                 </div>
               </div>

               <button
                 onClick={() => myFunction("Demo2")}
                  className="w3-button w3-block mt-2 w3-left-align rounded"
               >
                 <i className="fa fa-book fa-fw w3-margin-right"></i>
                 Unofficial Transcripts
               </button>
               <div id="Demo2" className="w3-hide w3-container">
               <div className="row justify-content-center mt-2">
                   <div className="col-6 text-center">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Transcript1)}
                    >
                      <img src={Transcript1} alt="Transcript 1" className="w-100" />
                      <br />
                      Sample 1
                    </Link>
                  </div>
                  <div className="col-6 text-center">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Transcript2)}
                    >
                      <img src={Transcript2} alt="Transcript 2" className="w-100" />
                      <br />
                      Sample 2
                    </Link>
                  </div>
              
                 </div>
               </div>
{/**  References (Letters)*/}
               <button
                 onClick={() => myFunction("Demo3")}
                 className="w3-button w3-block mt-2 w3-left-align rounded"
               >
                 <i className="fas fa-user fa-fw w3-margin-right"></i>
                 References
               </button>
               <div id="Demo3" className="w3-hide w3-container">
               <div className="row justify-content-center mt-2">
                 <div className="col-6 text-center">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Letter1)}
                    >
                      <img src={Letter1} alt="Letter 1" className="w-100" />
                      <br />
                      Coach Joe
                    </Link>
                  </div>
               
                  <div className="col-6 text-center">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Letter2)}
                    >
                      <img src={Letter2} alt="Letter 2" className="w-100" />
                      <br />
                      Coach Jack
                    </Link>
                  </div>
                
                  <div className="col-6 text-center">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Letter3)}
                    >
                      <img src={Letter3} alt="Letter 3" className="w-100" />
                      <br />
                      Principal Joe
                    </Link>
                  </div>

                    
                  <div className="col-6 text-center">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Letter4)}
                    >
                      <img src={Letter4} alt="Letter 4" className="w-100" />
                      <br />
                      Teacher Jane
                    </Link>
                  </div>
                 </div>
               </div>
        

        {/**  Stats*/}
               <button
                 onClick={() => myFunction("Demo4")}
                    className="w3-button w3-block mt-2 w3-left-align rounded"
               >
                     <i className="fas fa-chart-line fa-fw w3-margin-right"></i>
              Stats In Comparisson 
               </button>

               <div id="Demo4" className="w3-hide w3-container">
               <div className="row justify-content-center mt-2">
               <div className="col-12 text-center">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Stats2)}
                    >
                      <img src={Stats2} alt="Stats 2" className=" w3-grayscale-max w-100" />
                      <br />
                      Summer 2023 - Fall 2023
                    </Link>
                  </div>
                 </div>
               </div>


  {/** Performance Metrics*/}
               <button
                 onClick={() => myFunction("Demo5")}
                    className="w3-button w3-block mt-2 w3-left-align rounded"
               >
                 <i className="fas fa-person-running fa-fw w3-margin-right"></i>
              Performance Metrics
               </button>
               <div id="Demo5" className="w3-hide w3-container">
               <div className="row justify-content-center mt-2">
               <div className="col-12 text-center">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Metrics1)}
                    >
                      <img src={Metrics1} alt="Metrics 1" className=" w3-grayscale-max w-100" />
                      <br />
                      Metrics
                    </Link>
                  </div>

                  <div className="col-12 text-center">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Metrics2)}
                    >
                      <img src={Metrics2} alt="Metrics 2" className=" w3-grayscale-max w-100" />
                      <br />
                      Metrics
                    </Link>
                  </div>

                  <div className="col-12 text-center">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(MetricsAll)}
                    >
                      <img src={MetricsAll} alt="Metrics All" className=" w3-grayscale-max w-100" />
                      <br />
                      Metrics
                    </Link>
                  </div>
                 </div>
               </div>


 {/** Resume*/}
               <button
                 onClick={() => myFunction("Demo6")}
                   className="w3-button w3-block mt-2 w3-left-align rounded"
               >
                 <i className="fa fa-pencil fa-fw w3-margin-right"></i>
                 Player Resume
               </button>
               <div id="Demo6" className="w3-hide w3-container">
               <div className="row  justify-content-center mt-2">

               <div className="col-6 text-center">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Resume1)}
                    >
                      <img src={Resume1} alt="Resume 1" className=" w3-grayscale-max w-100" />
                      <br />
                    Resume
                    </Link>
                  </div>
                 </div>
               </div>

               <div className="container text-center px-3 mt-4 mb-4">
        <Link to="/" className=" link-light small" >Check Out the Impact of Clickable Links Inbedded in Your Graphics!</Link>
        </div>
             </div>
             </div>
                {/* Display the selected file */}
        <div className="col-sm-12 col-md-8 col-lg-8 ">
          <div
            className="p-2"
            style={{
              height: "500px",  
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {selectedFile ? (
              
              <img
                src={selectedFile}
                alt="Selected File"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            ) : (
              <p>No file selected. Click a link to preview a file.</p>
            )}
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