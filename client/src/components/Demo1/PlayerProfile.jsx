import React from "react";
import { Link } from "react-router-dom";
import { InView } from "react-intersection-observer";
import ClaySmall from "../../assets/images/Profiles/ClaySmall.png";
import { RiHome6Line } from "react-icons/ri";
import { HiAcademicCap } from "react-icons/hi";
import { GrScorecard } from "react-icons/gr";
import { GiRotaryPhone } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import PlayerResume from "../../assets/PlayerResume.pdf";

const PlayerProfile = () => {
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
 `}
      </style>
      <div className="page-container">
        {/* Page Content */}

        {/* Performance Section */}
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w3-content w3-justify w3-text-grey w3-padding-16 
               ${inView ? "animate-fade-in" : ""}`}
              id="profile"
            >
              {/**   style={{backgroundImage: `url(${ProfileBG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
         
         }}
          */}
          
              <div className="row d-flex justify-content-center align-items-center g-3 py-2">
                {/* Main row with column 4 and nested columns in column 8 */}
                <div className="col-sm-12 col-md-4 col-lg-4 w3-hide-small w3-hide-medium">
                  <div>
                    <img src={ClaySmall} alt="clay" style={{ width: "80%" }} />
                  </div>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-8">
                  <div className="row d-flex justify-content-center align-items-center g-2">
                    <div className="w3-text-white">
                      <h1 className="w3-text-light-grey">Player Profile</h1>
                      <hr className="w3-opacity" />
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <div className="py-2">
                        <p
                          className="my-0 py-0 text-white"
                          style={{ marginBottom: "4px" }}
                        >
                          <span
                            className="fa-fw"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className=" text-white-50"
                              style={{ fontSize: "1.3rem" }}
                            >
                              <RiHome6Line />
                            </b>{" "}
                          </span>
                          <span
                            className="text-white"
                            style={{ fontSize: "1rem" }}
                          >
                            {" "}
                            CATCHER
                          </span>
                          <br />
                        </p>

                        <p
                          className="my-0 py-0 text-white"
                          style={{ marginBottom: "4px" }}
                        >
                          <span
                            className="fa-fw"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className=" text-white-50"
                              style={{ fontSize: "1.3rem" }}
                            >
                              {" "}
                              <HiAcademicCap />
                            </b>
                          </span>{" "}
                          <span
                            className="text-white"
                            style={{ fontSize: "1rem" }}
                          >
                            {" "}
                            2024
                          </span>
                          <br />
                        </p>

                        <p
                          className="my-0 py-0 text-white"
                          style={{ marginBottom: "4px" }}
                        >
                          <span
                            className="fa-fw"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className="text-white-50"
                              style={{ fontSize: "1.2rem" }}
                            >
                              {" "}
                              <GrScorecard />
                            </b>
                          </span>{" "}
                          <span
                            className="text-white"
                            style={{ fontSize: "1rem" }}
                          >
                            {" "}
                            SAT-9000 | GPA- 5.0
                          </span>
                          <br />
                        </p>

                        <p
                          className="my-0 py-0 text-white"
                          style={{ marginBottom: "4px" }}
                        >
                          <span
                            className="fa-fw text-white"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className=" text-white-50"
                              style={{ fontSize: "1.3rem" }}
                            >
                              <GiRotaryPhone />
                            </b>{" "}
                          </span>{" "}
                          <Link
                            className="text-white"
                            style={{ fontSize: "1rem" }}
                          >
                            (123) 456-7890
                          </Link>
                          <br />
                        </p>

                        <p
                          className="my-0 py-0 text-white"
                          style={{ marginBottom: "4px" }}
                        >
                          <span
                            className="fa-fw text-white"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className=" text-white-50"
                              style={{ fontSize: "1.3rem" }}
                            >
                              <MdOutlineEmail />{" "}
                            </b>
                          </span>{" "}
                          <Link
                            className="text-white"
                            style={{ fontSize: "1rem" }}
                          >
                            EMAIL@MAIL.COM
                          </Link>
                          <br />
                        </p>
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <div className="py-2">
                        <p
                          className="mt-0 py-0 text-white"
                          style={{ marginBottom: "4px", fontSize: "1.1rem" }}
                        >
                          {" "}
                          Bats:{" "}
                          <span
                            className=" text-white-50"
                            style={{ marginRight: "4px" }}
                          >
                            {" "}
                            R/L
                          </span>
                          Throws:
                          <span
                            className=" text-white-50"
                            style={{ marginRight: "4px" }}
                          >
                            {" "}
                            R
                          </span>
                        </p>

                        <p
                          className="mt-0 py-0 text-white"
                          style={{ marginBottom: "4px", fontSize: "1.1rem" }}
                        >
                          {" "}
                          Height:{" "}
                          <span
                            className=" text-white-50"
                            style={{ marginRight: "4px" }}
                          >
                            {" "}
                            6'0
                          </span>{" "}
                          Weight:
                          <span
                            className=" text-white-50"
                            style={{ marginRight: "4px" }}
                          >
                            {" "}
                            335 lbs
                          </span>
                        </p>

                        <p
                          className="mt-0 py-0 text-white"
                          style={{ marginBottom: "4px", fontSize: "1.1rem" }}
                        >
                          {" "}
                          Born:{" "}
                          <span
                            className=" text-white-50"
                            style={{ marginRight: "4px" }}
                          >
                            {" "}
                            11-01-2006, <i>ST.</i>
                          </span>
                        </p>

                        <a id="download" download href={PlayerResume}>
                          <button className="w3-button rounded text-decoration-none w3-white w3-padding mt-3">
                            Download Metrics
                          </button>
                        </a>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/**START TEAMS
                <div className="row w3-padding-16 d-flex justify-content-center align-items-center g-3">
                <div className="w3-text-white">
                <h3 className="w3-text-light-grey">Team Affiliations</h3>
          
                </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
                  <div className="w3-text-white">
              <h5 className="fw-bold text-white mt-2">HIGH SCHOOL</h5>
           
            </div>

            <p className="mt-0 py-0 text-white"
            style={{ marginBottom: "4px" }}>Hometown High <span 
            className=" text-white-50"
            style={{ marginRight: "4px" }}> <i className='text-white opacity-70 fw-light'> Anytown, ST.</i>
                      </span>
                    </p>
                    <p className="mt-0 py-0 text-white"
            style={{ marginBottom: "4px" }}>Head Coach <span 
            className=" text-white-50"
            style={{ marginRight: "4px" }}>
              <i className="text-white opacity-70 fw-light">Coach Joe Athlete</i>
                      </span>
                    </p>
                 
                    <p className="mt-0 py-0 text-white"
            style={{ marginBottom: "4px" }}>Coach Cell <span 
            className=" text-white-50"
            style={{ marginRight: "4px" }}>
              <NavLink href="#/link" className=' link-light opacity-70 fw-light link-offset-3-hover'> <i>(123)456-7890</i></NavLink>
                      </span>
                    </p>

                    <p className="mt-0 py-0 text-white"
            style={{ marginBottom: "4px" }}>Coach Email<span 
            className=" text-white-50"
            style={{ marginRight: "4px" }}>  <NavLink href="#/link" className=' link-light opacity-70 fw-light link-offset-3-hover'><i>coachemail@mail.com</i></NavLink>
                       
                      </span>
                    </p>

                  </div>
         
                  <div className="col-sm-12 col-md-4 col-lg-4">
                      <div className="w3-text-white">
                  <h5 className="fw-bold text-white mt-2">SUMMER TEAM</h5>
               
                </div>

                <p className="mt-0 py-0 text-white"
                style={{ marginBottom: "4px" }}>
                  Dirtbags Baseball<span 
                style={{ marginRight: "4px" }}> 
                <i className=" text-white opacity-70 fw-light"> Anytown, ST.</i>
                          </span>
                        </p>
                        <p className="mt-0 py-0 text-white"
                style={{ marginBottom: "4px" }}>Head Coach <span 
                className=" text-white-50"
                
                style={{ marginRight: "4px" }}>  
               <i className=" text-white opacity-70 fw-light">Coach Joe Dirtbag</i>
                          </span>
                        </p>
                     
                        <p className="mt-0 py-0 text-white"
                style={{ marginBottom: "4px" }}>Coach Cell <span 
                className=" text-white-50"
                style={{ marginRight: "4px" }}> 
                  <NavLink href="#/link" className=' link-light opacity-70 fw-light link-offset-3-hover'> <i>(123)456-7890</i></NavLink>
                          </span>
                        </p>

                        <p className="mt-0 py-0 text-white"
                style={{ marginBottom: "4px" }}>Coach Email <span 
                className=" text-white-50"
                style={{ marginRight: "4px" }}> 
                 <NavLink href="#/link" className=' link-light opacity-70 fw-light link-offset-3-hover'><i>coachemail@mail.com</i></NavLink>
                          </span>
                         
                      
                        </p>
                      </div>

                  <div className="col-sm-12 col-md-4 col-lg-4">
                  <div className="w3-text-white">
              <h5 className="fw-bold text-white mt-2">SPECIAL TEAMS</h5>
           
            </div>

            <p className="mt-0 py-0 text-white"
            style={{ marginBottom: "4px" }}><b className="text-danger">U</b><b>S</b><b style={{color:'#81cefa'}}>A</b>BASEBALL <span><i><Link className=' link-light opacity-70 fw-light link-offset-3-hover'  style={{ marginRight: "6px" }}>18U National</Link></i>
                      </span>
                    </p>
                    <p className="mt-0 py-0 text-white"
            style={{ marginBottom: "4px" }}><b>THE</b><b className="text-danger">BIG26</b> <span> <i><Link className=' link-light opacity-70 fw-light link-offset-3-hover'  style={{ marginRight: "6px"}}>Team Maryland</Link></i>
                      </span>
                    </p>

                    <p className="mt-0 py-0 text-white"
            style={{ marginBottom: "4px" }}><b>WWBA</b> <span> <i><Link className=' link-light opacity-70 fw-light link-offset-3-hover'  style={{ marginRight: "6px"}}>Perfect Game</Link></i>
                      </span>
                    </p>

                    <p className="mt-0 py-0 text-white"
            style={{ marginBottom: "4px" }}><b>ALL-METROPOLITAN</b><b className="text-danger"></b> <span> <i><Link className=' link-light opacity-70 fw-light link-offset-3-hover'  style={{ marginRight: "6px"}}>First Team</Link></i>
                      </span>
                    </p>
                  </div>
            </div>
*/}
            </div>
          )}
        </InView>

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

export default PlayerProfile;

/**
                <p className="mt-0 py-0 text-white"
                style={{ marginBottom: "4px" }}> Bats: <span 
                className=" text-white-50"
                style={{ marginRight: "4px" }}> R/L
                          </span>
                          Throws: 
                          <span 
                className=" text-white-50"
                style={{ marginRight: "4px" }}> R
                          </span>
                        </p>

                        <p className="mt-0 py-0 text-white"
                style={{ marginBottom: "4px" }}> Height: <span 
                className=" text-white-50"
                style={{ marginRight: "4px" }}> 6'0
                          </span> Weight: 
                          <span 
                className=" text-white-50"
                style={{ marginRight: "4px" }}> 335 lbs
                          </span>
                        </p>
                     
                        <p className="mt-0 py-0 text-white"
                style={{ marginBottom: "4px" }}> Born: <span 
                className=" text-white-50"
                style={{ marginRight: "4px" }}> 11-01-2006, <i>ST.</i>
                          </span> 
                        </p>

                        <p className="mt-0 py-0 text-white"
                style={{ marginBottom: "4px" }}> Home: <span 
                className=" text-white-50"
                style={{ marginRight: "4px" }}><i>1234 Anywhere St. ST. 12345</i>
                          </span> 
                        </p>
                         */
