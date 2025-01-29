import React, { useState } from "react";
import TeacherLetter from "../../assets/images/Letters/TeacherLetter.png"; // Replace with the actual image path
import Teacher from "../../assets/images/Profiles/Teacher.png"; // Replace with the actual teacher profile image

const LetterModals = () => {
  const [activeLetter, setActiveLetter] = useState(null);

  const handleViewLetter = (letter) => {
    setActiveLetter(letter); // Open the modal and set the letter to display
  };

  const handleCloseModal = () => {
    setActiveLetter(null); // Close the modal
  };

  return (
    <div className="container">
      <div className="row">
        {/* Testimonial Example */}
        <div className="col-sm-12 col-md-6 col-lg-6 w3-padding-large">
          <div className="container">
            <img
              src={Teacher}
              alt="Teacher"
              className="w3-left w3-circle w3-margin-right w3-grayscale-max w3-image"
              style={{ width: "80px" }}
            />
            <p>
              <span className="w3-large fw-bold">REBECCA FLEX- </span>
              <br />
              <i>Teacher- Htown High School</i>.
              <br />
              <span>
                <i className="small">
                  "Joe Baseball is the best. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Voluptate quibusdam totam
                  pariatur accusamus, quam velit at ad enim animi aliquam, porro
                  nulla molestias tempore fuga neque similique. Necessitatibus,
                  iusto ex."
                </i>
                <br />
                <span
                  className="text-primary small"
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => handleViewLetter(TeacherLetter)}
                >
                  View Letter
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeLetter && (
        <div
          className="modal d-block"
          tabIndex="-1"
          style={{
            backgroundColor: "rgba(0,0,0,0.8)",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1050,
          }}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            style={{ maxWidth: "600px" }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">View Letter</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={activeLetter}
                  alt="Letter"
                  className="w-100"
                  style={{ maxHeight: "500px", objectFit: "contain" }}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LetterModals;
