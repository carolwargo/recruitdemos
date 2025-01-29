import React, { useState } from "react";
import { Link } from "react-router-dom";

import PlayerResume from "../../assets/PDF/PlayerResume.pdf";
import Schedules from "../../assets/PDF/Schedules/Schedules.pdf";
import References from "../../assets/PDF/References/References.pdf";
import Transcripts from "../../assets/PDF/Transcripts/Transcripts.pdf";
import Performance from "../../assets/PDF/Performance/Performance.pdf";

const PDFViewer = () => {
  const [selectedPDF, setSelectedPDF] = useState(PlayerResume); // Default to PlayerResume

  const handlePDFSelect = (pdf) => {
    setSelectedPDF(pdf);
  };

  return (
    <div className=""
    style={{ backgroundColor: "#f1f1f1", minHeight: "100vh" }}>
<div className="w3-container">
      <div className="row d-flex justify-content-center">
        {/** Left Menu */}
        <div className="col-sm-12 col-md-3 col-lg-3">
            <div className="container w3-padding-large w3-padding-24">
            <div className="w3-padding-16 w3-margin-top">
              <h2 className=" text-dark-emphasis fw-bold">Download Menu</h2>
              <p className="small text-black">
                Select a document to view. PDF versions with clickable links are
                an option.
              </p>
            </div>  
           

            {/** Buttons for PDF Selection */}
            <button
              className="w3-button w3-block w3-left-align rounded"
              onClick={() => handlePDFSelect(Schedules)}
            >
              <i className="fas fa-calendar-check fa-fw w3-margin-right link-dark"></i>
              <Link className="link-dark text-decoration-none">
                Game Schedules
              </Link>
            </button>

            <button
              className="w3-button w3-block mt-2 w3-left-align rounded"
              onClick={() => handlePDFSelect(Transcripts)}
            >
              <i className="fa fa-book fa-fw w3-margin-right link-dark"></i>
              <Link className="link-dark text-decoration-none">
                Transcripts
              </Link>
            </button>

            <button
              className="w3-button w3-block mt-2 w3-left-align rounded"
              onClick={() => handlePDFSelect(References)}
            >
              <i className="fa fa-user fa-fw w3-margin-right link-dark "></i>
              <Link className="link-dark text-decoration-none">
                References
              </Link>
            </button>

            <button
              className="w3-button w3-block mt-2 w3-left-align rounded"
              onClick={() => handlePDFSelect(Performance)}
            >
              <i className="fa fa-chart-line fa-fw w3-margin-right link-dark"></i>
              <Link className="link-dark text-decoration-none">
                Performance
              </Link>
            </button>

            <button
              className="w3-button w3-block mt-2 w3-left-align rounded"
              onClick={() => handlePDFSelect(PlayerResume)}
            >
              <i className="fa fa-file-pdf fa-fw w3-margin-right link-dark"></i>
              <Link className="link-dark text-decoration-none">
                Player Resume
              </Link>
            </button>
          </div>
          </div>

        {/** Right Container to Display Selected PDF */}
        <div className="col-sm-12 col-md-9 col-lg-9 ">
            {selectedPDF ? (
              <iframe
                src={selectedPDF}
                title="Selected PDF"
                width="100%"
                height="500"
                style={{
                  borderLeft: "2px solid #232323",
                  borderRadius: "2px",
                }}
              ></iframe>
            ) : (
              <p className="text-black">No PDF selected. Please choose a file to preview.</p>
            )}
          </div>
       
        </div>
      </div>
    </div>
    
  );
};

export default PDFViewer;


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
            <button className="w3-button w3-block mt-2 w3-left-align rounded"
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