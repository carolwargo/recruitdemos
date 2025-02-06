import React from "react";
//import { InView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Schedule1 from '../assets/PDF/Schedules/Schedule1.pdf';
import Schedule2 from '../assets/PDF/Schedules/Schedule2.pdf';
import Schedule3 from '../assets/PDF/Schedules/Schedule3.pdf';
import Schedule4 from '../assets/PDF/Schedules/Schedule4.pdf';
import Transcript1PDF from '../assets/PDF/Transcripts/Transcript1PDF.pdf';
import Transcript2PDF from '../assets/PDF/Transcripts/Transcript2PDF.pdf';
import References1 from '../assets/PDF/References/References1.pdf';
import References2 from '../assets/PDF/References/References2.pdf';
import References3 from '../assets/PDF/References/References3.pdf';
import References4 from '../assets/PDF/References/References4.pdf';
import Performance1 from '../assets/PDF/Performance/Performance1.pdf';
import Performance3 from '../assets/PDF/Performance/Performance3.pdf';
import PlayerResume from "../assets/PDF/PlayerResume.pdf";
import ClaySmall from "../assets/images/Profiles/ClaySmall.png";

import Stats2 from "../assets/images/Video/Stats2.png";
import Resume1  from "../assets/images/Metrics/Resume1.png";
import Calendar1 from '../assets/images/Calendars/Calendar1.png';
import Calendar2 from '../assets/images/Calendars/Calendar2.png';
import Calendar3 from '../assets/images/Calendars/Calendar3.png';
import Calendar4 from '../assets/images/Calendars/Calendar4.png';
import Letter1 from '../assets/images/Letters/Letter1.png';
import Letter2 from '../assets/images/Letters/Letter2.png';
import Letter3 from '../assets/images/Letters/Letter3.png';
import Letter4 from '../assets/images/Letters/Letter4.png';
import Transcript1 from '../assets/images/Letters/Transcript1.png';
import Transcript2 from '../assets/images/Letters/Transcript2.png';
import Metrics1 from '../assets/images/Metrics/Metrics1.png';
import MetricsAll from '../assets/images/Metrics/MetricsAll.png';
/** 
const myFunction = (id) => {
  // Hide the default message
  const demo7 = document.getElementById("Demo7");
  if (demo7) {
    demo7.classList.remove("w3-show");
    demo7.classList.add("w3-hide"); 
  }

  // Hide all demo elements
  const allElements = document.querySelectorAll(".w3-show");
  allElements.forEach((element) => {
    element.classList.remove("w3-show");
    element.classList.add("w3-hide");
  });

  // Show the selected demo
  const x = document.getElementById(id);
  if (x) {
    x.classList.remove("w3-hide");
    x.classList.add("w3-show");
  }
};
*/
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
    <div className="page-container bg-white">
      <div className=" container w3-padding-large"> 
    <div className="row bg-dark shadow justify-content-center w3-padding-large align-items-top d-flex bg-dark rounded"
    style={{ boxShadow: '0px 0px 5px rgba(84, 84, 84, 0.2)' }}>
 <div className="col-sm-12 col-md-4 col-lg-4 pt-2 px-0" style={{ borderRight: "2px solid #222222" }}>
      <div className=" w3-padding-large my-2">
       <div className="card">
          <div className=" w3-padding-16">
          <div className="justify-content-center text-center">
          <div>
          <img src={ClaySmall} alt="profile" style={{ width: "70%" }} className=" w3-image rounded-circle w3-padding-large" />
          </div>
          <div>
          <h4 className=" text-dark-emphasis fw-bold"
          style={{textShadow:'1px 1px 2px '}}>JOE BASEBALL</h4>
       </div>
       </div>
        {/** Game Schedules */}   
        
        <div className="d-flex justify-content-center my-2">   
     <button
                onClick={() => myFunction("Demo1")}
                className="w3-button w3-black shadow w3-block mt-2 w3-left-align rounded"
                style={{width:'70%'}}
              >
                <i className="fas fa-calendar-check fa-fw w3-margin-right"></i>
                Game Schedules
              </button>
              </div>
              <div id="Demo1" className="w3-hide w3-container w3-padding-large w3-padding-16">
        <div className="d-flex justify-content-between align-items-center">
        <h5 className="mb-0 text-start fw-bold ">GAME SCHEDULES</h5>

</div>
<span className="py-2 w3-text-gray small fw-light">Click download below the selected file to view or print.</span>
<div className="row w3-padding-top-16">
           <div className="col-6 text-center">
                    <span className=" small">
                  <Link
                      className="link-light"
                      onClick={() => handleFileSelect(Calendar1)}
                    >
                      <img src={Calendar1} alt="Calendar 1"  className="w-100 my-2" />
                  
                    </Link> 
                   <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2"
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
                      <img src={Calendar2} alt="Calendar 2"  className="w-100 my-2" />
                  
                    </Link> 
                   <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2"
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
                      <img src={Calendar3} alt="Calendar 3"  className="w-100 my-2" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2"
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
                      <img src={Calendar4} alt="Calendar 4" className="w-100 my-2" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary"
                                 href={Schedule4} >
                      <span className="text-decoration-none"> 
                      <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                              
                    </a></span> 
                  </div>
                 </div>
               </div>
           

   {/** Transcripts */}
              <div className="d-flex justify-content-center my-2">
               <button
                 onClick={() => myFunction("Demo2")}
                  className="w3-button w3-black  shadow w3-block w3-left-align rounded"
                  style={{width:'70%'}}
               >
                 <i className="fa fa-book fa-fw w3-margin-right"></i>
                 Unofficial Transcripts
               </button>
          </div>


{/**  References (Letters)*/}
<div className="d-flex justify-content-center">
               <button
                 onClick={() => myFunction("Demo3")}
                 className="w3-button w3-black  shadow w3-block w3-left-align rounded"
                 style={{width:'70%'}}
              >
                 <i className="fas fa-user fa-fw w3-margin-right"></i>
                 References
               </button>
          </div>
        

        {/**  Stats*/}
        <div className="d-flex justify-content-center my-2">
               <button
                 onClick={() => myFunction("Demo4")}
                    className="w3-button w3-black  shadow w3-block w3-left-align rounded"
                    style={{width:'70%'}}
              >
                     <i className="fas fa-chart-line fa-fw w3-margin-right"></i>
              Stats In Comparisson 
               </button>
  </div>


  {/** Performance Metrics*/}
  <div className="d-flex justify-content-center">
               <button
                 onClick={() => myFunction("Demo5")}
                    className="w3-button w3-black  shadow w3-block w3-left-align rounded"
                    style={{width:'70%'}}
               >
                 <i className="fas fa-person-running fa-fw w3-margin-right"></i>
              Performance Metrics
               </button>
           </div>  


 {/** Resume*/}
 <div className="d-flex justify-content-center my-2">
    <button
      onClick={() => myFunction("Demo6")}
      className="w3-button w3-black shadow w3-block w3-left-align rounded"
      style={{ width: "70%" }}
    >
      <i className="fa fa-pencil fa-fw w3-margin-right"></i>
      Player Resume
    </button>
  </div>
               </div>
               </div>
               </div>
             </div>
           
                {/* Display the selected file */}
        <div className="col-sm-12 col-md-8 col-lg-8 align-item-center w3-padding-16 w3-dark">
            {/*Calendars*/}
     
        <div id="Demo1" className="w3-hide w3-container w3-padding-16">
        <div className="d-flex justify-content-between align-items-center w3-margin-left">
        <h5 className="mb-0 text-start fw-bold w3-text-white">GAME SCHEDULES</h5>
        <button className="btn w3-pale-blue w3-hover-opacity btn-sm w3-margin-right"  
  onClick={handleClose}
  style={{textShadow:'1px 1px 1px #000', fontSize:'11px'}}>   
    <b>close X</b>
  </button>
</div>
<span className="py-2 w3-text-gray small fw-light w3-margin-left">Click download below the selected file to view or print.</span>
<div className="row w3-padding-top-16">
           <div className="col-6 text-center">
                    <span className=" small">
                  <Link
                      className="link-light"
                      onClick={() => handleFileSelect(Calendar1)}
                    >
                      <img src={Calendar1} alt="Calendar 1"  className="w-100 p-2 mb-3 shadow" />
                  
                    </Link> 
                   <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2"
                                 href={Schedule1} >
                      <span className="text-decoration-none"> 
                <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                              
                    </a></span> 
                    </span>
                  </div>


                  <div className="col-6 text-center py-2">
                    <span className=" small">
                  <Link
                      className="link-light"
                      onClick={() => handleFileSelect(Calendar2)}
                    >
                      <img src={Calendar2} alt="Calendar 2"  className="w-100 p-2 mb-3 shadow" />
                  
                    </Link> 
                   <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2"
                                 href={Schedule2} >
                      <span className="text-decoration-none"> 
                <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                              
                    </a></span> 
                    </span>
                  </div>


                  <div className="col-6 text-center py-2">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Calendar3)}
                    >
                      <img src={Calendar3} alt="Calendar 3"  className="w-100 p-2 mb-3 shadow" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2"
                                 href={Schedule3} >
                      <span className="text-decoration-none"> 
                      <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>
                  <div className="col-6 text-center py-2">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Calendar4)}
                    >
                      <img src={Calendar4} alt="Calendar 4" className="w-100 p-2 mb-3 shadow" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary"
                                 href={Schedule4} >
                      <span className="text-decoration-none"> 
                      <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                              
                    </a></span> 
                  </div>
                 </div>
               </div>
  {/* Transcripts */}
               <div id="Demo2" className="w3-hide w3-container w3-padding-16">
               <div className="d-flex justify-content-between align-items-center w3-margin-left">
               <h5 className="mb-0 text-start fw-bold w3-text-white">TRANSCRIPTS</h5>
               <button className="btn w3-pale-blue w3-hover-opacity btn-sm w3-margin-right"  
  onClick={handleClose}
  style={{textShadow:'1px 1px 1px #000', fontSize:'11px'}}>   
    <b>close X</b>
  </button>
</div>
<span className="py-2 w3-text-gray small fw-light w3-margin-left">Click download below the selected file to view or print.</span>
<div className="row w3-padding-top-16">
                <div className="col-6 text-center py-2">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Transcript1)}
                    >
                      <img src={Transcript1} alt="Transcript 1"  className="w-100 p-2 mb-3 shadow" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2"
                                 href={Transcript1PDF} >
                      <span className="text-decoration-none"> 
                  <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>
                  <div className="col-6 text-center py-2">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Transcript2)}
                    >
                      <img src={Transcript2} alt="Transcript 2"  className="w-100 p-2 mb-3 shadow" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2"
                                 href={Transcript2PDF} >
                      <span className="text-decoration-none"> 
                  <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>
              
                 </div>
               </div>

     {/**  References (Letters)*/}
     <div id="Demo3" className="w3-hide w3-container w3-padding-16">
     <div className="d-flex justify-content-between align-items-center w3-margin-left">
     <h4 className="mb-0 text-start fw-bold w3-text-white">RECOMMENDATIONS </h4>
     <button className="btn w3-pale-blue w3-hover-opacity btn-sm" 
  onClick={handleClose}
  style={{textShadow:'1px 1px 1px #000', fontSize:'11px'}}>   
    <b>close X</b>
  </button>
</div>
<span className="py-2 w3-text-gray small fw-light w3-margin-left">Click download below the selected file to view or print.</span>
<div className="row w3-padding-top-16">
               <div className="col-6 text-center py-2">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Letter1)}
                    >
                      <img src={Letter1} alt="Letter 1"  className="w-100 p-2 mb-3 shadow" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2"
                                 href={References1} >
                      <span className="text-decoration-none"> 
                  <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>
               
                  <div className="col-6 text-center py-2">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Letter2)}
                    >
                      <img src={Letter2} alt="Letter 2"  className="w-100 p-2 mb-3 shadow" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2"
                                 href={References2} >
                      <span className="text-decoration-none"> 
                  <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>
                
                  <div className="col-6 text-center py-2">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Letter3)}
                    >
                      <img src={Letter3} alt="Letter 3"  className="w-100 p-2 mb-3 shadow" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2"
                                 href={References3} >
                      <span className="text-decoration-none"> 
                  <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>

                  <div className="col-6 text-center py-2">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Letter4)}
                    >
                      <img src={Letter4} alt="Letter 4"  className="w-100 p-2 mb-3 shadow" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2"
                                 href={References4} >
                      <span className="text-decoration-none"> 
                  <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>
                 </div>
               </div>

 {/**  Stats*/}
 <div id="Demo4" className="w3-hide w3-container w3-padding-16">
 <div className="d-flex justify-content-between align-items-center w3-margin-left">
 <h5 className="mb-0 text-start fw-bold w3-text-white">STATS IN COMPARISON</h5>
 <button className="btn w3-pale-blue w3-hover-opacity btn-sm" 
  onClick={handleClose}
  style={{textShadow:'1px 1px 1px #000', fontSize:'11px'}}>   
    <b>close X</b>
  </button>
</div>
<div className="row w3-padding-top-16">
<span className="w3-text-gray small fw-light w3-margin-left">Click download below the selected file to view or print.</span>

               <div className="col-12 text-center py-2">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Stats2)}
                    >
                      <img src={Stats2} alt="Stats 2"  className="w-100 p-2 mb-3 shadow w3-grayscale-max" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2"
                                 href={Stats2} >
                      <span className="text-decoration-none"> 
                  <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>
                 </div>
               </div>

      {/** Performance Metrics*/}
      <div id="Demo5" className="w3-hide w3-container w3-padding-16">
      <div className="d-flex justify-content-between align-items-center w3-margin-left">
      <h5 className="mb-0 text-start fw-bold w3-text-white">PERFORMANCE METRICS</h5>
      <button className="btn w3-pale-blue w3-hover-opacity btn-sm" 
  onClick={handleClose}
  style={{textShadow:'1px 1px 1px #000', fontSize:'11px'}}>   
    <b>close X</b>
  </button>
</div>
<span className="py-2 w3-text-gray small fw-light w3-margin-left">Click download below the selected file to view or print.</span>
<div className="row w3-padding-top-16">
               <div className="col-12 text-center py-2">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Metrics1)}
                    >
                      <img src={Metrics1} alt="Metrics 1"  className="w-100 p-2 mb-3 shadow w3-grayscale-max" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2"
                                 href={Performance1} >
                      <span className="text-decoration-none"> 
                  <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>

                  <div className="col-12 text-center py-2">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(MetricsAll)}
                    >
                      <img src={MetricsAll} alt="Metrics All"  className="w-100 p-2 mb-3 shadow w3-grayscale-max" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2"
                                 href={Performance3} >
                      <span className="text-decoration-none"> 
                      <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>
                 </div>
               </div>

  {/* Resume */}
  <div id="Demo6" className="w3-hide w3-container w3-padding-16">
  <div className="d-flex justify-content-between align-items-center w3-margin-left">
  <h5 className="mb-0 text-start fw-bold w3-text-white">PLAYER CHEATSHEET</h5>
  <button className="btn w3-pale-blue w3-hover-opacity btn-sm" 
  onClick={handleClose}
  style={{textShadow:'1px 1px 1px #000', fontSize:'11px'}}>   
    <b>close X</b>
  </button>
</div>
<span className="py-2 w3-text-gray small fw-light w3-margin-left">Click download below the selected file to view or print.</span>
<div className="row w3-padding-top-16">
<div className="col-12 text-center py-2">
                    <Link
                      className="link-light text-decoration-none mt-2"
                      onClick={() => handleFileSelect(Resume1)}
                    >
                      <img src={Resume1} alt="Resume 1"  className="w-100 p-2 mb-3 shadow w3-grayscale-max" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2"
                                 href={PlayerResume} >
                      <span className="text-decoration-none"> 
                  <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>
                 </div>
                 </div>



                 <div id="Demo7"
  className="w3-hide w3-container d-flex justify-content-center align-items-center"
  style={{ height: "100vh" }}
>
  <div className="text-center">
    <p className="text-decoration-none" style={{textShadow:'1px 1px 2px #000'}}>
      No Selection Has Been Made- <br /> <i className="fas fa-hand-point-left"></i>  Choose a File to Display
    </p>
  </div>
</div>

               
        </div>
      </div>
             </div>
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
  );
};

export default PlayerDownloads;


/** 
import React from "react";
import { InView } from "react-intersection-observer";
import PlayerDownloads from "../components/Demo1/PlayerDownloads";

const DownloadsPage = () => {
  return (
    <div className="">
      <div className="page-container ">
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`
            ${inView ? "animate-fade-in" : ""}`}
              id="downloads-page"
            >
              <PlayerDownloads />
            </div>
          )}
        </InView>
      </div>
    </div>
  );
};

export default DownloadsPage;


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
                      className="w3-button w3-black  shadow w3-block w3-black w3-margin-top"
                    >
                      Send Message
                    </button>
                  </form>
                  </div>
                  </div>
                </div> */
