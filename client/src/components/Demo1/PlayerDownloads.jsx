import React from "react";
import { InView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Schedule1 from '../../assets/PDF/Schedules/Schedule1.pdf';
import Schedule2 from '../../assets/PDF/Schedules/Schedule2.pdf';
import Schedule3 from '../../assets/PDF/Schedules/Schedule3.pdf';
import Schedule4 from '../../assets/PDF/Schedules/Schedule4.pdf';
import Transcript1PDF from '../../assets/PDF/Transcripts/Transcript1PDF.pdf';
import Transcript2PDF from '../../assets/PDF/Transcripts/Transcript2PDF.pdf';
import References1 from '../../assets/PDF/References/References1.pdf';
import References2 from '../../assets/PDF/References/References2.pdf';
import References3 from '../../assets/PDF/References/References3.pdf';
import References4 from '../../assets/PDF/References/References4.pdf';
import Performance1 from '../../assets/PDF/Performance/Performance1.pdf';
import Performance2 from '../../assets/PDF/Performance/Performance2.pdf';
import Performance3 from '../../assets/PDF/Performance/Performance3.pdf';
import PlayerResume from "../../assets/PDF/PlayerResume.pdf";


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

  const handleClose = () => { 
    document.getElementById("Demo1").className = "w3-hide w3-container";
    document.getElementById("Demo2").className = "w3-hide w3-container";
    document.getElementById("Demo3").className = "w3-hide w3-container";
    document.getElementById("Demo4").className = "w3-hide w3-container";
    document.getElementById("Demo5").className = "w3-hide w3-container";
    document.getElementById("Demo6").className = "w3-hide w3-container";
  };

  const handleFileSelect = (file) => {
    const download = document.getElementById("download");
    download.href = file;
  }




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
 
    <div className="row justify-content-center d-flex shadow rounded">
 <div className="col-sm-12 col-md-4 col-lg-4 bg-dark pt-2 px-0" style={{ borderRight: "2px solid #545454" }}>
      <div className="rounded container my-2 w3-padding-large">
        <div className="w3-padding-large">
        <h4 className="w3-text-light-grey">Download Menu</h4>
        <p>Select a document to view.</p>
       


        {/** Game Schedules */}
        <button
                onClick={() => myFunction("Demo1")}
                className="w3-button w3-block mt-2 w3-left-align rounded"
              >
                <i className="fas fa-calendar-check fa-fw w3-margin-right"></i>
                Game Schedules
              </button>


               <button
                 onClick={() => myFunction("Demo2")}
                  className="w3-button w3-block w3-left-align rounded"
               >
                 <i className="fa fa-book fa-fw w3-margin-right"></i>
                 Unofficial Transcripts
               </button>
          
{/**  References (Letters)*/}
               <button
                 onClick={() => myFunction("Demo3")}
                 className="w3-button w3-block w3-left-align rounded"
               >
                 <i className="fas fa-user fa-fw w3-margin-right"></i>
                 References
               </button>
          
        

        {/**  Stats*/}
               <button
                 onClick={() => myFunction("Demo4")}
                    className="w3-button w3-block w3-left-align rounded"
               >
                     <i className="fas fa-chart-line fa-fw w3-margin-right"></i>
              Stats In Comparisson 
               </button>
  


  {/** Performance Metrics*/}
               <button
                 onClick={() => myFunction("Demo5")}
                    className="w3-button w3-block w3-left-align rounded"
               >
                 <i className="fas fa-person-running fa-fw w3-margin-right"></i>
              Performance Metrics
               </button>
           


 {/** Resume*/}
               <button
                 onClick={() => myFunction("Demo6")}
                   className="w3-button w3-block w3-left-align rounded"
               >
                 <i className="fa fa-pencil fa-fw w3-margin-right"></i>
                 Player Resume
               </button>
               </div>
             </div>
             </div>
                {/* Display the selected file */}
        <div className="col-sm-12 col-md-8 col-lg-8 align-item-center">
            {/*Calendars*/}
        <div id="Demo1" className="w3-hide w3-container">
        <div className="d-flex justify-content-end">
              {/* Close Button */}
              <button
                className="btn btn-light btn-sm"
                onClick={handleClose}
              >
               <b>X</b>
              </button>
            </div>
                <div className="row my-2">
             <p> Game Schedules</p>
                  <div className="col-6 text-center">
                    <span className=" small">
                  <Link
                      className="link-light"
                      onClick={() => handleFileSelect(Calendar1)}
                    >
                      <img src={Calendar1} alt="Calendar 1" className="w-100 py-2 shadow rounded" />
                  
                    </Link> 
                   <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2 small"
                                 href={Schedule1} >
                      <span className="text-decoration-none"> 
                <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                              
                    </a></span> 
                    </span>
                  </div>


                  <div className="col-6 text-center">
                    <span className=" small">
                  <Link
                      className="link-light"
                      onClick={() => handleFileSelect(Calendar2)}
                    >
                      <img src={Calendar2} alt="Calendar 2" className="w-100 py-2 shadow rounded" />
                  
                    </Link> 
                   <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2 small"
                                 href={Schedule2} >
                      <span className="text-decoration-none"> 
                <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                              
                    </a></span> 
                    </span>
                  </div>


                  <div className="col-6 text-center">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Calendar3)}
                    >
                      <img src={Calendar3} alt="Calendar 3" className="w-100 py-3" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2 small"
                                 href={Schedule3} >
                      <span className="text-decoration-none"> 
                      <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>
                  <div className="col-6 text-center">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Calendar4)}
                    >
                      <img src={Calendar4} alt="Calendar 4" className="w-100 py-3" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2 small"
                                 href={Schedule4} >
                      <span className="text-decoration-none"> 
                      <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                              
                    </a></span> 
                  </div>
                 </div>
               </div>
  {/* Transcripts */}
               <div id="Demo2" className="w3-hide w3-container">
               <div className="d-flex justify-content-between align-items-center">
              {/* Close Button */}
              <button
                className="btn btn-light btn-sm"
                onClick={handleClose}
              >
                <b>X</b>
              </button>
            </div>
                 <div className="row mt-2">
                 <p>Transcripts</p>
                   <div className="col-6 text-center">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Transcript1)}
                    >
                      <img src={Transcript1} alt="Transcript 1" className="w-100" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2 small"
                                 href={Transcript1PDF} >
                      <span className="text-decoration-none"> 
                  <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>
                  <div className="col-6 text-center">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Transcript2)}
                    >
                      <img src={Transcript2} alt="Transcript 2" className="w-100" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2 small"
                                 href={Transcript2PDF} >
                      <span className="text-decoration-none"> 
                  <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>
              
                 </div>
               </div>

     {/**  References (Letters)*/}
     <div id="Demo3" className="w3-hide w3-container">
     <div className="d-flex justify-content-between align-items-center">
              {/* Close Button */}
              <button
                className="btn btn-light btn-sm"
                onClick={handleClose}
              >
             <b>X</b>
              </button>
            </div>
                 <div className="row mt-2">
                 <p>Letters of Recommendation</p>
                 <div className="col-6 text-center">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Letter1)}
                    >
                      <img src={Letter1} alt="Letter 1" className="w-100" />
                      <br />
                      Coach Joe
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2 small"
                                 href={References1} >
                      <span className="text-decoration-none"> 
                  <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>
               
                  <div className="col-6 text-center">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Letter2)}
                    >
                      <img src={Letter2} alt="Letter 2" className="w-100" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2 small"
                                 href={References2} >
                      <span className="text-decoration-none"> 
                  <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>
                
                  <div className="col-6 text-center">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Letter3)}
                    >
                      <img src={Letter3} alt="Letter 3" className="w-100" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2 small"
                                 href={References3} >
                      <span className="text-decoration-none"> 
                  <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>

                  <div className="col-6 text-center">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Letter4)}
                    >
                      <img src={Letter4} alt="Letter 4" className="w-100" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2 small"
                                 href={References4} >
                      <span className="text-decoration-none"> 
                  <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>
                 </div>
               </div>

 {/**  Stats*/}
 <div id="Demo4" className="w3-hide w3-container">
 <div className="d-flex justify-content-between align-items-center">
              <p>Stats in Comparison</p>
              {/* Close Button */}
              <button
                className="btn btn-light btn-sm"
                onClick={handleClose}
              >
             <b>X</b>
              </button>
            </div>
               <div className="row mt-2">
               <div className="col-12 text-center">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Stats2)}
                    >
                      <img src={Stats2} alt="Stats 2" className=" w3-grayscale-max w-80" />
                      <br />
                      Summer 2023 - Fall 2023
                    </Link>
                  </div>
                 </div>
               </div>

      {/** Performance Metrics*/}
      <div id="Demo5" className="w3-hide w3-container">
      <div className="d-flex justify-content-between align-items-center">
              <p>Performance Metrics</p>
              {/* Close Button */}
              <button
                className="btn btn-light btn-sm"
                onClick={handleClose}
              >
               <b>X</b>
              </button>
            </div>
               <div className="row justify-content-center">
               <div className="col-6 text-center">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Metrics1)}
                    >
                      <img src={Metrics1} alt="Metrics 1" className=" w3-grayscale-max w-100" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2 small"
                                 href={Performance1} >
                      <span className="text-decoration-none"> 
                  <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>

                  <div className="col-6 text-center">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Metrics2)}
                    >
                      <img src={Metrics2} alt="Metrics 2" className=" w3-grayscale-max w-100" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2 small"
                                 href={Performance2} >
                      <span className="text-decoration-none"> 
                  <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>

                  <div className="col-6 text-center">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(MetricsAll)}
                    >
                      <img src={MetricsAll} alt="Metrics All" className=" w3-grayscale-max w-100" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2 small"
                                 href={Performance3} >
                      <span className="text-decoration-none"> 
                      <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>
                 </div>
               </div>

  {/* Resume */}
  <div id="Demo6" className="w3-hide w3-container">
  <div className="d-flex justify-content-between align-items-center">
              {/* Close Button */}
              <button
                className="btn btn-light btn-sm"
                onClick={handleClose}
              >
               <b>X</b>
              </button>
            </div>
               <div className="row justify-content-center">
               <p>Player Resume (cheatsheet)</p>
               <div className="col-6 text-center">
                    <Link
                      className="link-light text-decoration-none mt-2"
                      onClick={() => handleFileSelect(Resume1)}
                    >
                      <img src={Resume1} alt="Resume 1" className=" w3-grayscale-max w-100" />
                      <br />
                    Resume
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2 small"
                                 href={PlayerResume} >
                      <span className="text-decoration-none"> 
                  <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
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

/*
import React from "react";
import { InView } from "react-intersection-observer";
import PDFViewer from "../../components/Demo1/PDFViewer";

  const PlayerDownloads = () => {
    return (
      <div>
        <div className="page-container ">
          <InView triggerOnce={true}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`
              ${inView ? "animate-fade-in" : ""}`}
                id="downloads-page"
              >
                <PDFViewer />
              </div>
            )}
          </InView>
        </div>
      </div>
    );
  };
  
  export default PlayerDownloads;
*/