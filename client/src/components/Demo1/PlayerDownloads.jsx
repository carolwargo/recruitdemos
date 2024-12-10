import React from "react";
import { InView } from "react-intersection-observer";
import { Link } from "react-router-dom";

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

        {/* Contact Section */}

        <hr />

        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w3-content w3-justify w3-text-grey w3-padding-16 
            ${inView ? "animate-fade-in" : ""}`}
              id="downloads"
            >
              {/* Contact section */}
              <div
                className="rounded w3-padding-32 w3-padding-large w3-theme-l1"
              >
             
<h2>Downloads</h2>
<hr />
     <div className="row">
      <div className="col">
               <button
                 onClick={() => myFunction("Demo1")}
                 className="w3-button w3-block w3-theme-l1 w3-left-align mt-2"
               >
                     <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i>
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
                 className="w3-button w3-block w3-theme-l1 w3-left-align"
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
                 className="w3-button w3-block w3-theme-l1 w3-left-align"
               >
                 <i className="fa fa-pencil fa-fw w3-margin-right"></i>
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
             </div>
             <div className="col">
               <button
                 onClick={() => myFunction("Demo4")}
                 className="w3-button w3-block w3-theme-l1 w3-left-align mt-2"
               >
                     <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i>
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
                 className="w3-button w3-block w3-theme-l1 w3-left-align"
               >
                 <i className="fa fa-book fa-fw w3-margin-right"></i>
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
                 className="w3-button w3-block w3-theme-l1 w3-left-align"
               >
                 <i className="fa fa-pencil fa-fw w3-margin-right"></i>
                 Player Resume
               </button>
               <div id="Demo6" className="w3-hide w3-container">
                 <ul className="text-decoration-none mt-2">
                 <li>
                    <Link className=" link-light">Player Resume</Link>
                   </li>
               
                 </ul>
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
