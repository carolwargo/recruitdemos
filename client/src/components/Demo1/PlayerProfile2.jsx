import React from "react";
import { Link } from "react-router-dom";
import { RiHome6Line } from "react-icons/ri";
import { HiAcademicCap } from "react-icons/hi";
import { GrScorecard } from "react-icons/gr";
import { FaPhoneVolume } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


const myFunction = (id) => {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") === -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
};

const PlayerProfile2 = () => {
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

         <div className="row w3-padding-24 d-flex justify-content-center align-items-center g-3">
   

                {/* Main row with column 4 and nested columns in column 8 */}
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className="w3-padding-large ">
                  <div className="w3-padding-16 rounded"
               style={{backgroundImage: 'linear-gradient(to right, #000000,  #737373)'}}>
                    
                  <button
                      className="w3-button fw-bolder w3-block w3-text-white w3-left-align"
                    >
                  DOWNLOADS
                    </button>
                    <button
                      onClick={() => myFunction("Demo1")}
                      className="w3-button w3-block w3-text-white w3-left-align"
                    >
                      <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i>
                      Schedule
                    </button>
                    <div id="Demo1" className="w3-hide w3-container">
                      <ul className="text-decoration-none mt-2">
                        <li>
                          <Link>2022 Summer</Link>
                        </li>
                        <li>
                          <Link>2022 Fall</Link>
                        </li>
                        <li>
                          <Link>2023 Spring</Link>
                        </li>
                      </ul>
                    </div>


                    <button
                      onClick={() => myFunction("Demo2")}
                      className="w3-button w3-block w3-text-white w3-left-align"
                    >
                      <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i>
                      Schedule
                    </button>
                    <div id="Demo2" className="w3-hide w3-container">
                      <ul className="text-decoration-none mt-2">
                        <li>
                          <Link>2022 Summer</Link>
                        </li>
                        <li>
                          <Link>2022 Fall</Link>
                        </li>
                        <li>
                          <Link>2023 Spring</Link>
                        </li>
                      </ul>
                    </div>





                    <button
                      onClick={() => myFunction("Demo3")}
                      className="w3-button w3-block w3-text-white w3-left-align"
                    >
                      <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i>
                      Schedule
                    </button>
                    <div id="Demo3" className="w3-hide w3-container">
                      <ul className="text-decoration-none mt-2">
                        <li>
                          <Link>2022 Summer</Link>
                        </li>
                        <li>
                          <Link>2022 Fall</Link>
                        </li>
                        <li>
                          <Link>2023 Spring</Link>
                        </li>
                      </ul>
                    </div>


                  </div> 
                  </div>
                  </div>
                <div className="col-sm-12 col-md-8 col-lg-8">
                  <div className="row d-flex justify-content-center align-items-center g-1">
             
                   <div className="col-sm-12 col-md-6 col-lg-6">
                        <p
                          className="mt-0 py-0 text-white"
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
                            style={{ fontSize: ".9rem" }}
                          >
                            {" "}
                            CATCHER
                          </span>
                          <br />
                        </p>

                        <p
                          className="mt-0 py-0 text-white"
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
                            style={{ fontSize: ".9rem" }}
                          >
                            {" "}
                            2024
                          </span>
                          <br />
                        </p>

                        <p
                          className="mt-0 py-0 text-white"
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
                            style={{ fontSize: ".9rem" }}
                          >
                            {" "}
                            SAT-9000 | GPA- 5.0
                          </span>
                          <br />
                        </p>

                        <p
                          className="mt-0 py-0 text-white"
                          style={{ marginBottom: "4px" }}
                        >
                          <span
                            className="fa-fw text-white"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className=" text-white-50"
                              style={{ fontSize: "1.1rem" }}
                            >
                              <FaPhoneVolume />
                            </b>{" "}
                          </span>{" "}
                          <Link
                            className="text-white"
                            style={{ fontSize: ".85rem" }}
                          >
                            (123) 456-7890
                          </Link>
                          <br />
                        </p>

                        <p
                          className="mt-0 py-0 text-white"
                          style={{ marginBottom: "4px" }}
                        >
                          <span
                            className="fa-fw text-white"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className=" text-white-50"
                              style={{ fontSize: "1.2rem" }}
                            >
                              <MdOutlineEmail />{" "}
                            </b>
                          </span>{" "}
                          <Link
                            className="text-white"
                            style={{ fontSize: ".85rem" }}
                          >
                            EMAIL@MAIL.COM
                          </Link>
                          <br />
                        </p>
                      </div>

                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <p
                          className="mt-0 py-0 text-white"
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
                            style={{ fontSize: ".9rem" }}
                          >
                            {" "}
                            CATCHER
                          </span>
                          <br />
                        </p>

                        <p
                          className="mt-0 py-0 text-white"
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
                            style={{ fontSize: ".9rem" }}
                          >
                            {" "}
                            2024
                          </span>
                          <br />
                        </p>

                        <p
                          className="mt-0 py-0 text-white"
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
                            style={{ fontSize: ".9rem" }}
                          >
                            {" "}
                            SAT-9000 | GPA- 5.0
                          </span>
                          <br />
                        </p>

                        <p
                          className="mt-0 py-0 text-white"
                          style={{ marginBottom: "4px" }}
                        >
                          <span
                            className="fa-fw text-white"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className=" text-white-50"
                              style={{ fontSize: "1.1rem" }}
                            >
                              <FaPhoneVolume />
                            </b>{" "}
                          </span>{" "}
                          <Link
                            className="text-white"
                            style={{ fontSize: ".85rem" }}
                          >
                            (123) 456-7890
                          </Link>
                          <br />
                        </p>

                        <p
                          className="mt-0 py-0 text-white"
                          style={{ marginBottom: "4px" }}
                        >
                          <span
                            className="fa-fw text-white"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className=" text-white-50"
                              style={{ fontSize: "1.2rem" }}
                            >
                              <MdOutlineEmail />{" "}
                            </b>
                          </span>{" "}
                          <Link
                            className="text-white"
                            style={{ fontSize: ".85rem" }}
                          >
                            EMAIL@MAIL.COM
                          </Link>
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/**
 <div className="col-sm-12 col-md-12 col-lg-12  justify-content-center align-items-center">  
<div>

                    
                      <div className="container w3-text-white">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                          <div className=" container text-center w3-text-white py-3">
                          <hr  style={{paddingTop:'10px', paddingBottom:'10px'}}/>
                           
                            <h5 className="">FOLLOW ME ON SOCIAL MEDIA:</h5>
                            <Link
                              className=" text-decoration-none link-light w3-opacity"
                              style={{ fontSize: "2.7rem" }}
                            >
                              <strong>
                                <BsTwitterX className="" />
                              </strong>{" "}
                            </Link>
                            <Link
                              className="text-decoration-none link-light w3-hover"
                              style={{ fontSize: "2.9rem" }}
                            >
                              <strong>
                                <FaSquareInstagram />
                              </strong>{" "}
                            </Link>
                            <Link
                              className="text-decoration-none w3-hover link-light"
                              style={{ fontSize: "2.9rem" }}
                            >
                              <strong>
                                <FaSnapchatSquare />
                              </strong>
                            </Link>
                          </div>
                        </div>
                      </div>
                      </div>
       
                      <div className="container w3-text-white">
                      <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-sm-12 col-md-12 col-lg-12">
                          <div className=" container text-center w3-text-white py-3">
                          <hr  style={{paddingTop:'10px', paddingBottom:'10px'}}/>
                       
                            <h5 className="">MESSAGE ME</h5>
                            <p
                              className="w3-opacity"
                              style={{ fontSize: "15px" }}
                            >
                              Click Message button to contact me through the
                              website-
                            </p>

                            <button className="w3-button w3-block w3-theme-l4">
                              Message
                            </button>
                      
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
 */}
              
          
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
  );
};

export default PlayerProfile2;
