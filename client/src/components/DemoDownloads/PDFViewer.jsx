import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../../assets/images/Round/Profile.png";
import PlayerResume from "../../assets/PDF/PlayerResume.pdf";
import Schedules from "../../assets/PDF/Schedules/Schedules.pdf";
import References from "../../assets/PDF/References/References.pdf";
import Transcripts from "../../assets/PDF/Transcripts/Transcripts.pdf";
import Performance from "../../assets/PDF/Performance/Performance.pdf";


const PDFViewer = () => {
  const [selectedPDF, setSelectedPDF] = useState(); // Default to PlayerResume

  const handlePDFSelect = (pdf) => {
    setSelectedPDF(pdf);
  };

  return (
<div style={{ backgroundColor: "#f1f1f1" }}>
  <div
    className="d-flex justify-content-center align-items-center"
    style={{ minHeight: "100vh" }}
  >
    <div className="container-fluid w3-padding-large">
      <div className="row">
        {/* Left Menu */}
        <div className="col-sm-12 col-md-4 col-lg-3 px-0">
          <div className="rounded container">
            <div className="w3-padding-16">
            <div className="w3-padding w3-margin-left">
              <img
                src={Profile}
                alt="profile"
                style={{ width: "80%" }}
                className="w3-image rounded-circle mb-2 w3-padding-large"
              />
              <h3 className="text-dark-emphasis fw-bold ">
                Joe Baseball
              </h3>
              <h5 className="text-dark-emphasis fw-bold  mb-0">
                Downloads Menu
              </h5>
              <p className="text-dark-emphasis mt-1 ">
                Select a file below to view.
              </p>
              </div>
              <hr
                className="w3-margin-left text-center"
                style={{ width: "250px" }}
              />
              {/* Buttons */}
              <button
                className="w3-button w3-block w3-left-align rounded"
                onClick={() => handlePDFSelect(Schedules)}
              >
                <i className="fas fa-calendar-check fa-fw w3-margin-right link-dark"></i>
                <Link className="link-dark text-decoration-none">
                  GAME SCHEDULES
                </Link>
              </button>
              <button
                className="w3-button w3-block w3-left-align rounded"
                onClick={() => handlePDFSelect(Transcripts)}
              >
                <i className="fa fa-book fa-fw w3-margin-right link-dark"></i>
                <Link className="link-dark text-decoration-none">
                  TRANSCRIPTS
                </Link>
              </button>
              <button
                className="w3-button w3-block w3-left-align rounded"
                onClick={() => handlePDFSelect(References)}
              >
                <i className="fa fa-user fa-fw w3-margin-right link-dark"></i>
                <Link className="link-dark text-decoration-none">
                  REFERENCES
                </Link>
              </button>
              <button
                className="w3-button w3-block w3-left-align rounded"
                onClick={() => handlePDFSelect(Performance)}
              >
                <i className="fa fa-chart-line fa-fw w3-margin-right link-dark"></i>
                <Link className="link-dark text-decoration-none">
                  PERFORMANCE
                </Link>
              </button>
              <button
                className="w3-button w3-block w3-left-align rounded"
                onClick={() => handlePDFSelect(PlayerResume)}
              >
                <i className="fa fa-file-pdf fa-fw w3-margin-right link-dark"></i>
                <Link className="link-dark text-decoration-none">
                  PLAYER CHEATSHEET
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* Right Container to Display Selected PDF */}
        <div className="col-sm-12 col-md-8 col-lg-9 bg-dark">
          <div className="container w3-padding-24">
            {selectedPDF ? (
              <iframe
                src={`${selectedPDF}`}
                title="Selected PDF"
                width="100%"
                height="500"
                style={{
                  borderLeft: "2px solid #232323",
                  minHeight: "100vh",
                  borderRadius: "5px",
                }}
              ></iframe>
            ) : (
              <div
                className="w3-container w3-padding-24 d-flex justify-content-center align-items-center"
                style={{ height: "100vh" }}
              >
                <p
                  className="text-white px-3 text-center opacity-65"
                  style={{ textShadow: "1px 1px 2px black" }}
                >
                  No PDF selected. <br /> Please choose a file to preview.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default PDFViewer;



/**
 *     <div className=" w3-hide-small w3-hide-medium rounded container w3-padding-large">
                  <div className="w3-padding-large">
             
          <div className="w3-padding-16">
          <img src={Profile} alt="profile" style={{ width: "70%", marginLeft:'28px' }} className=" w3-image rounded-circle mb-3 shadow border" />
                    <h3 className="text-dark-emphasis fw-bold w3-margin-left"  >Joe Baseball</h3>
             
          <h5 className="text-dark-emphasis fw-bold  w3-margin-left mb-0">Downloads Menue</h5>
          <p className="text-dark-emphasis mt-1 w3-margin-left small">Select a file below to view.</p>
               
                 <hr className=" w3-margin-left text-center" style={{width:'200px'}}/>
             
                  <button
                  className="w3-button w3-block w3-left-align rounded"
                  onClick={() => handlePDFSelect(Schedules)}
                >
                  <i className="fas fa-calendar-check fa-fw w3-margin-right link-dark"></i>
                  <Link className="link-dark text-decoration-none">Game Schedules</Link>
                </button>
  
                <button
                  className="w3-button w3-block w3-left-align rounded"
                  onClick={() => handlePDFSelect(Transcripts)}
                >
                  <i className="fa fa-book fa-fw w3-margin-right link-dark"></i>
                  <Link className="link-dark text-decoration-none">Transcripts</Link>
                </button>
  
                <button
                  className="w3-button w3-block w3-left-align rounded"
                  onClick={() => handlePDFSelect(References)}
                >
                  <i className="fa fa-user fa-fw w3-margin-right link-dark"></i>
                  <Link className="link-dark text-decoration-none">References</Link>
                </button>
  
                <button
                  className="w3-button w3-block w3-left-align rounded"
                  onClick={() => handlePDFSelect(Performance)}
                >
                  <i className="fa fa-chart-line fa-fw w3-margin-right link-dark"></i>
                  <Link className="link-dark text-decoration-none">Performance</Link>
                </button>
  
                <button
                  className="w3-button w3-block w3-left-align rounded"
                  onClick={() => handlePDFSelect(PlayerResume)}
                >
                  <i className="fa fa-file-pdf fa-fw w3-margin-right link-dark"></i>
                  <Link className="link-dark text-decoration-none">Player Resume</Link>
                </button>
                    
                           </div>
                           </div>
                         </div>
 */
/**
 *    <div className="col-12 col-md-4 col-lg-3">
            <div className="d-flex flex-column align-items-center">
              <img
                src={Profile}
                alt="PDF"
                style={{ width: "70%" }}
                className="w3-padding-large w3-image rounded-circle"
              />
              <h4 className="text-dark-emphasis fw-bold">Joe Baseball</h4>
              <h6 className="text-dark-emphasis fw-bold">Download Menu</h6>
            </div>

            <div className="d-flex flex-column">
              <button
                className="w3-button w3-block w3-left-align rounded"
                onClick={() => handlePDFSelect(Schedules)}
              >
                <i className="fas fa-calendar-check fa-fw w3-margin-right link-dark"></i>
                <Link className="link-dark text-decoration-none">Game Schedules</Link>
              </button>

              <button
                className="w3-button w3-block w3-left-align rounded"
                onClick={() => handlePDFSelect(Transcripts)}
              >
                <i className="fa fa-book fa-fw w3-margin-right link-dark"></i>
                <Link className="link-dark text-decoration-none">Transcripts</Link>
              </button>

              <button
                className="w3-button w3-block w3-left-align rounded"
                onClick={() => handlePDFSelect(References)}
              >
                <i className="fa fa-user fa-fw w3-margin-right link-dark"></i>
                <Link className="link-dark text-decoration-none">References</Link>
              </button>

              <button
                className="w3-button w3-block w3-left-align rounded"
                onClick={() => handlePDFSelect(Performance)}
              >
                <i className="fa fa-chart-line fa-fw w3-margin-right link-dark"></i>
                <Link className="link-dark text-decoration-none">Performance</Link>
              </button>

              <button
                className="w3-button w3-block w3-left-align rounded"
                onClick={() => handlePDFSelect(PlayerResume)}
              >
                <i className="fa fa-file-pdf fa-fw w3-margin-right link-dark"></i>
                <Link className="link-dark text-decoration-none">Player Resume</Link>
              </button>
            </div>
          </div>
 */

/**
 * 
            <div className="container text-center mt-4 mb-4">
            <p><span className="py-1 small">
              <i className=" fas fa-star" style={{marginRight:'2px'}}></i> </span> <Link 
            to="/" 
            className="link-dark small opacity-65 alert-style"
          >
            Check Out the Impact of Clickable Links Embedded in Your Graphics!
          </Link></p>
    
                     </div>
 */


                     /**
                      * 
            /**  References (Letters) Button
            <button    className="w3-button w3-block w3-left-align rounded"
            onClick={() => handlePDFSelect(References)}>
              <i className="fas fa-user fa-fw w3-margin-right"></i>

              <Link
                className="link-dark text-decoration-none"
                onClick={() => handlePDFSelect(References)}
              >
                References
              </Link>
            </button>
            <div className="container w3-padding">
            <iframe
              src={References}
              title="Player Resume"
              width="100%"
              height="700"
              frameborder="12"
            ></iframe>
          </div>
*/



            /** Performance Button
            <button className="w3-button w3-block mt-2 w3-left-align rounded"
            onClick={() => handlePDFSelect(Performance)}>
              <i className="fas fa-chart-line fa-fw w3-margin-right"></i>

              <Link
                className="link-dark text-decoration-none"
              >
                Performance
              </Link>
            </button>
            <div className="container w3-padding">
            <iframe
              src={Performance}
              title="Player Resume"
              width="100%"
              height="700"
              frameborder="12"
            ></iframe>
          </div>
*/


         /* Resume Button
            <button className="w3-button w3-block mt-2 w3-left-align rounded"
            onClick={() => handlePDFSelect(PlayerResume)}>
              <i className="fas fa-person-running fa-fw w3-margin-right"></i>
              <Link
                className="link-dark text-decoration-none"
              >
                Player Resume
              </Link>
            </button>
            <div>
            <div className="container w3-padding">
            <iframe
              src={PlayerResume}
              title="Player Resume"
              width="100%"
              height="700"
              frameborder="12"
            ></iframe>
          </div>
            </div>
                      */