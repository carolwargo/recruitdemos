import React, {useState} from "react";
//import { Link } from "react-router-dom";
import ClaySmall from "../assets/images/Profiles/ClaySmall.png";


/**col-4 image thumbnail is selected */
//import Resume1  from "../assets/images/Metrics/Resume1.png";
//import Calendar1 from '../assets/images/Calendars/Calendar1.png';
//import Calendar2 from '../assets/images/Calendars/Calendar2.png';
//import Letter1 from '../assets/images/Letters/Letter1.png';
//import Letter2 from '../assets/images/Letters/Letter2.png';

/**TO APPEAR in col-8 WHEN col-4 image thumbnail is selected */
//import PlayerResume from "../assets/PDF/PlayerResume.pdf";
//import Schedule1 from "../assets/PDF/Schedules/Schedule1.pdf";
//import Schedule2 from "../assets/PDF/Schedules/Schedule2.pdf";
//import References1 from "../assets/PDF/References/References1.pdf";
//import References2 from "../assets/PDF/References/References2.pdf";


const PlayerDownloads = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);

  // Open Sidebar
  const w3_open = () => {
    setSidebarOpen(true);
  };

  // Close Sidebar
  const w3_close = () => {
    setSidebarOpen(false);
  };

  // Toggle Accordion
  const myAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };



  return (
  <div>
    <style>
      {`
      body {font-family: "Roboto", sans-serif}
.w3-bar-block .w3-bar-item {
  padding: 16px;
  font-weight: bold;
  color: #fff;  
}`}
    </style>
    <div className="body ">
      {/* Sidebar */}
      <nav
        className={`w3-sidebar w3-bar-block w3-collapse w3-animate-left w3-card ${
          sidebarOpen ? "d-block" : "d-none"
        }`}
        style={{ zIndex: "3", width: "250px" }}
        id="mySidebar"
      >
        <a className=" w3-border-bottom w3-large" href="#1">
          <img src={ClaySmall} alt="clay"  style={{ width: "100%" }} />
        </a>

        <a className="w3-bar-item w3-button w3-hide-large w3-large" 
        href='#1'
        onClick={w3_close}>
          Close <i className="fa fa-remove"></i>
        </a>

        <a className="w3-bar-item w3-button w3-black teal" href="#1">
          Home
        </a>
        <a className="w3-bar-item w3-button" href="#1.1">
          Link 1
        </a>
        <a className="w3-bar-item w3-button" href="#1.2">
          Link 2
        </a>
        <a className="w3-bar-item w3-button" href="#1.3">
          Link 3
        </a>
        <a className="w3-bar-item w3-button" href="#1.4">
          Link 4
        </a>

        {/* Accordion */}
        <div>
          <a className="w3-bar-item w3-button" onClick={myAccordion} href="#2">
            Dropdown <i className="fa fa-caret-down"></i>
          </a>
          <div className={`w3-hide ${accordionOpen ? "w3-show" : ""}`} id="demo">
            <a className="w3-bar-item w3-button" href="#2.1">
              Link
            </a>
            <a className="w3-bar-item w3-button" href="#2.2">
              Link
            </a>
            <a className="w3-bar-item w3-button" href="#2.3">
              Link
            </a>
          </div>
        </div>
      </nav>
      
      {/* Open Sidebar Button */}
      <button className="w3-button w3-black w3-hide-large" onClick={w3_open}>
        ☰ Open Sidebar
      </button>
      <div className="w3-over w3-hide-large w3-animate-opacity" onclick="w3_close()" style={{cursor: "pointer"}} id="myOverlay"></div>
<div className="w3-main" style={{marginLeft:"250px"}}>

<div id="myTop" className="w3-container w3-top w3-theme w3-large">
  <p><i className="fa fa-bars w3-button w3-black w3-hide-large w3-xlarge" onclick="w3_open()"></i>
  <span id="myIntro" className="w3-hide">W3.CSS: Introduction</span></p>
</div>

<header className="w3-container w3-theme" style={{padding:"64px 32px"}}>
  <h1 className="w3-xxxlarge">W3.CSS</h1>
</header>

<div className="w3-container" style={{padding:"32px"}}>

<h2>What is W3.CSS?</h2>

<p>W3.CSS is a modern CSS framework with built-in responsiveness:</p>

<ul className="w3-leftbar w3-theme-border" style={{listStyle:"none"}}>
 <li>Smaller and faster than other CSS frameworks.</li>
 <li>Easier to learn, and easier to use than other CSS frameworks.</li>
 <li>Uses standard CSS only (No jQuery or JavaScript library).</li>
 <li>Speeds up mobile HTML apps.</li>
 <li>Provides CSS equality for all devices. PC, laptop, tablet, and mobile:</li>
</ul>
<br/>
<img src="img_responsive.png" style={{width:"100%"}} alt="Responsive"/>

<hr/>
<h2>W3.CSS is Free</h2>
<p>W3.CSS is free to use. No license is necessary.</p>

<hr/>
<h2>Easy to Use</h2>
<div className="w3-container w3-sand w3-leftbar">
<p><i>Make it as simple as possible, but not simpler.</i><br/>
Albert Einstein</p>
</div>

<hr/>
<h2>W3.CSS Web Site Templates</h2>

<p>We have created some responsive W3CSS templates for you to use.</p>
<p>You are free to modify, save, share, use or do whatever you want with them:</p>


<div className="w3-panel w3-light-grey w3-padding-16 w3-card">
<h3 className="w3-center">Band Template</h3>
<div className="w3-content" style={{maxWidth:"800px"}}>
<a href="tryw3css_templates_band.htm" target="_blank"  title="Band Demo">
  <img src="img_temp_band.jpg" style={{width: '98%', margin:"20px 0"}} 
  alt="Band Template"/></a><br/>
<div className="w3-row">
  <div className="w3-col m6">
    <a href="tryw3css_templates_band.htm" target="_blank" className="w3-button w3-padding-large w3-dark-grey" style={{width:"98.5%"}}>Demo</a>
  </div>
  <div className="w3-col m6">
    <a href="w3css_templates.asp" className="w3-button w3-padding-large w3-dark-grey" style={{width:"98.5%"}}>More Templates »</a>
  </div>
</div>
</div>
</div>

<div className="w3-container w3-padding-16 w3-card" style={{backgroundColor: "#eee"}}>
<h3 className="w3-center">Blog Template</h3>
<div className="w3-content" style={{maxWidth: "800px"}}>
<img src={ClaySmall} style={{width:'98%', margin:"20px 0"}} alt="Blog Template"/><br/>
<div className="w3-row">
  <div className="w3-col m6">
    <a href="tryw3css_templates_blog.htm" target="_blank" className="w3-button w3-padding-large w3-dark-grey" style={{width:"98.5%"}}>Demo</a>
  </div>
  <div className="w3-col m6">
    <a href="w3css_templates.asp" className="w3-button w3-padding-large w3-dark-grey" style={{width:"98.5%"}}>More Templates »</a>
  </div>
</div>
</div>
</div>
</div>
    </div>
</div>
</div>
  );
};

export default PlayerDownloads;




/** 
 *     
    <div className="bg-secondary-subtle">
    <div className="page-container w3-padding-16 d-flex">
      <div className="container w3-margin-top"
      style={{ maxWidth: "600px" }}> 
    <div className="w3-padding-large my-2 text-center">
              <img src={ClaySmall} alt="profile" 
              className="w-50 rounded-circle w3-padding-large" />
              <h4 className="text-dark-emphasis fw-bold" style={{ textShadow: '1px 1px 2px' }}>JOE BASEBALL</h4>
  <div className=" w3-padding-large">
          
              <button
                onClick={() => myFunction("Demo1")}
                className="w3-button w3-black shadow w3-block mt-2 w3-left-align rounded"
                style={{width: "100%"}}  >
                <i className="fas fa-calendar-check fa-fw w3-margin-right"></i> Game Schedules
              </button>
  
              <div id="Demo1" className="w3-hide w3-container w3-padding-large w3-padding-16">
              <div className=" w3-left-align mb-2">
                    <Link 
                    onClick={() => handleFileSelect(Calendar1)}
                    className="w3-left-align text-dark-emphasis w3-padding-16">
2023 Fall 
                    </Link>
                    </div>
                    <div className=" w3-left-align mb-2">
                    <Link 
                    onClick={() => handleFileSelect(Calendar1)}
                    className="w3-left-align text-dark-emphasis w3-padding-16">
2023-2024 High School 
                    </Link>
                    </div>
                  </div>
             
<button
                onClick={() => myFunction("Demo1")}
                className="w3-button w3-black shadow w3-block mt-2 w3-left-align rounded">
                <i className="fas fa-calendar-check fa-fw w3-margin-right"></i> Game Schedules
              </button>
  
              <div id="Demo2" className="w3-hide w3-container w3-padding-large w3-padding-16">
                <div className="row w3-padding-top-16">
                  <div className="col-6 text-center">
                    <Link onClick={() => handleFileSelect(Calendar1)}>
                      <img src={Calendar1} alt="Calendar 1" className="w-100 my-2 shadow rounded" />
                    </Link>
                  </div>
                  <div className="col-6 text-center">
                    <Link onClick={() => handleFileSelect(Schedule2)}>
                      <img src={Calendar2} alt="Calendar 2" className="w-100 my-2 shadow rounded" />
                    </Link>
                  </div>
                </div>
              </div>
              </div>
            </div>
      </div>
    </div>
  </div>
*/