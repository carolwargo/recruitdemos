import React, { useState } from "react";

const Accordion = () => {
  const [activeSection, setActiveSection] = useState(null);

  // Toggles a section open or closed
  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="w3-card w3-round">
      <div className="w3-white">
        {/* My Groups */}
        <button
          onClick={() => toggleSection("Demo1")}
          className="w3-button w3-block w3-theme-l1 w3-left-align"
        >
          <i className="fa fa-circle-o-notch fa-fw w3-margin-right"></i> My Groups
        </button>
        <div
          id="Demo1"
          className={`w3-container ${activeSection === "Demo1" ? "" : "w3-hide"}`}
        >
          <p>Some text..</p>
        </div>

        {/* My Events */}
        <button
          onClick={() => toggleSection("Demo2")}
          className="w3-button w3-block w3-theme-l1 w3-left-align"
        >
          <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i> My Events
        </button>
        <div
          id="Demo2"
          className={`w3-container ${activeSection === "Demo2" ? "" : "w3-hide"}`}
        >
          <p>Some other text..</p>
        </div>

        {/* My Photos */}
        <button
          onClick={() => toggleSection("Demo3")}
          className="w3-button w3-block w3-theme-l1 w3-left-align"
        >
          <i className="fa fa-users fa-fw w3-margin-right"></i> My Photos
        </button>
        <div
          id="Demo3"
          className={`w3-container ${activeSection === "Demo3" ? "" : "w3-hide"}`}
        >
          <div className="w3-row-padding">
            <br />
            <div className="w3-half">
              <img
                src="/w3images/lights.jpg"
                alt="Lights"
                style={{ width: "100%" }}
                className="w3-margin-bottom"
              />
            </div>
            <div className="w3-half">
              <img
                src="/w3images/nature.jpg"
                alt="Nature"
                style={{ width: "100%" }}
                className="w3-margin-bottom"
              />
            </div>
            <div className="w3-half">
              <img
                src="/w3images/mountains.jpg"
                alt="Mountains"
                style={{ width: "100%" }}
                className="w3-margin-bottom"
              />
            </div>
            <div className="w3-half">
              <img
                src="/w3images/forest.jpg"
                alt="Forest"
                style={{ width: "100%" }}
                className="w3-margin-bottom"
              />
            </div>
            <div className="w3-half">
              <img
                src="/w3images/nature.jpg"
                alt="Nature"
                style={{ width: "100%" }}
                className="w3-margin-bottom"
              />
            </div>
            <div className="w3-half">
              <img
                src="/w3images/snow.jpg"
                alt="Snow"
                style={{ width: "100%" }}
                className="w3-margin-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
