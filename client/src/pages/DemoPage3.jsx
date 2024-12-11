import React, { useState } from "react";
import ClaySmall from "../assets/images/Profiles/ClaySmall.png";
import PlayerPerformance from "../components/Demo1/PlayerPerformance";

const DemoPage3 = () => {
  const [activeSection, setActiveSection] = useState(null);

  // Toggles a section open or closed
  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  // Content for each section
  const sectionContent = {
    Demo1: <p>Content for My Groups.</p>,
    Demo2: <p>Content for My Events.</p>,
    Demo3: (
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
    ),
  };

  return (
    <div>
      <style>
        {`
                html, body, h1, h2, h3, h4, h5 {font-family: "Open Sans", sans-serif}
                `}
      </style>

      <div className="w3-theme-l5">
        {/* Page Container */}
        <div
          className="w3-container w3-content"
          style={{ maxWidth: "1400px", marginTop: "80px" }}
        >
          <div className="w3-row">
            <div className="w3-col m3">

            <div className="w3-card w3-round">
                <div className="w3-container">
                  <h4 className="w3-center mt-2">Joe Baseball</h4>
                  <p className="w3-center">
                    <img
                      src={ClaySmall}
                      className="w3-circle shadow"
                      style={{ height: "136px", width:"136px" }}
                      alt="Avatar"
                    />
                  </p>
                  <hr />
                  <p>
                    <i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i>{" "}
                    Designer, UI
                  </p>
                  <p>
                    <i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i>{" "}
                    London, UK
                  </p>
                  <p>
                    <i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i>{" "}
                    April 1, 1988
                  </p>
                </div>
              </div>
            
              {/* Accordion */}
              <div className="w3-card w3-round w3-theme-l1 mt-2">
                <div className="container">
                <h5 className="pt-3 w3-padding-small">Downloads</h5>
                </div>
                  <button
                    onClick={() => toggleSection("Demo1")}
                    className="w3-button w3-block w3-theme-l1 w3-left-align rounded-top mt-2"
                  >
                    <i className="fa fa-circle fa-fw w3-margin-right w3-text-theme"></i>{" "}
                    My Groups
                  </button>
                  <button
                    onClick={() => toggleSection("Demo2")}
                    className="w3-button w3-block w3-theme-l1 w3-left-align"
                  >
                    <i className="fa fa-calendar fa-fw w3-margin-right w3-text-theme"></i>{" "}
                    My Events
                  </button>
                  <button
                    onClick={() => toggleSection("Demo3")}
                    className="w3-button w3-block w3-theme-l1 w3-left-align rounded-bottom"
                  >
                    <i className="fa fa-film fa-fw w3-margin-right w3-text-theme"></i> Media
                  </button>
              
            </div>
            </div>
            {/* Render Container */}
            <div className="w3-col m9">
                
            <div className="container w3-padding-small">
                 {/* Performance Section */}
            <div className="w3-card w3-round">
        <div className="demo1-player-performance w3-padding-large" id="demo1-player-performance">
        <PlayerPerformance/>
        </div>
        </div>
                <br />
      
            <div className="w3-card w3-round">
                {activeSection && sectionContent[activeSection]}
              </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        {/* Footer */}
        <footer className="w3-container w3-theme-d3 w3-padding-16">
          <h5>Footer</h5>
        </footer>

        <footer className="w3-container w3-theme-d5">
          <p>
            Powered by{" "}
            <a href="https://www.w3schools.com/w3css/default.asp">w3.css</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default DemoPage3;

/**
 *   <div className="w3-card w3-round w3-theme-l1">
                <div className="w3-container">
                    <div className=" my-3"></div>
                  <h4 className="w3-center">My Profile</h4>
                  <p className="w3-center">
                    <img
                      src={ClaySmall}
                      className="w3-circle shadow"
                      style={{ height: "136px", width:"136px" }}
                      alt="Avatar"
                    />
                  </p>
                  <hr />
                  <p>
                    <i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i>{" "}
                    Designer, UI
                  </p>
                  <p>
                    <i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i>{" "}
                    London, UK
                  </p>
                  <p>
                    <i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i>{" "}
                    April 1, 1988
                  </p>
                </div>
              </div>
              <br />
 */

/*} Navbar */
/**
        <div
          id="navDemo"
          className={`w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large ${
            isNavOpen ? "w3-show" : ""
          }`}
        >
          <a href="#home" className="w3-bar-item w3-button w3-padding-large">
            Link 1
          </a>
          <a href="#home" className="w3-bar-item w3-button w3-padding-large">
            Link 2
          </a>
          <a href="#home" className="w3-bar-item w3-button w3-padding-large">
            Link 3
          </a>
          <a href="#home" className="w3-bar-item w3-button w3-padding-large">
            My Profile
          </a>
        </div>
    */
/*} Navbar */
/**
 *     <div className="w3-top">
          <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
            <a
              className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"
              href="#home"
              onClick={toggleNav}
            >
              <i className="fa fa-bars"></i>
            </a>
            <a
              href="#home"
              className="w3-bar-item w3-button w3-padding-large w3-theme-d4"
            >
              <i className="fa fa-home w3-margin-right"></i>Logo
            </a>
            <a
              href="#home"
              className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
              title="News"
            >
              <i className="fa fa-globe"></i>
            </a>
            <a
              href="#home"
              className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
              title="Account Settings"
            >
              <i className="fa fa-user"></i>
            </a>
            <a
              href="#home"
              className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
              title="Messages"
            >
              <i className="fa fa-envelope"></i>
            </a>
            <div className="w3-dropdown-hover w3-hide-small">
              <button
                className="w3-button w3-padding-large"
                title="Notifications"
              >
                <i className="fa fa-bell"></i>
                <span className="w3-badge w3-right w3-small w3-green">3</span>
              </button>
              <div
                className="w3-dropdown-content w3-card-4 w3-bar-block"
                style={{ width: "300px" }}
              >
                <a href="#home" className="w3-bar-item w3-button">
                  One new friend request
                </a>
                <a href="#home" className="w3-bar-item w3-button">
                  John Doe posted on your wall
                </a>
                <a href="#home" className="w3-bar-item w3-button">
                  Jane likes your post
                </a>
              </div>
            </div>
            <a
              href="#home"
              className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white"
              title="My Account"
            >
              <img
                src="/w3images/avatar2.png"
                className="w3-circle"
                style={{ height: "23px;width:23px" }}
                alt="Avatar"
              />
            </a>
          </div>
        </div>

 */

/**Alert Box */
/**   <div className="w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small">
        <span onclick="this.parentElement.style.display='none'" className="w3-button w3-theme-l3 w3-display-topright">
          <i className="fa fa-remove"></i>
        </span>
        <p><strong>Hey!</strong></p>
        <p>People are looking at your profile. Find out who.</p>
      </div> 
      */

/*} Interests */
/** 
      <div className="w3-card w3-round w3-white w3-hide-small">
        <div className="w3-container">
          <p>Interests</p>
          <p>
            <span className="w3-tag w3-small w3-theme-d5">News</span>
            <span className="w3-tag w3-small w3-theme-d4">W3Schools</span>
            <span className="w3-tag w3-small w3-theme-d3">Labels</span>
            <span className="w3-tag w3-small w3-theme-d2">Games</span>
            <span className="w3-tag w3-small w3-theme-d1">Friends</span>
            <span className="w3-tag w3-small w3-theme">Games</span>
            <span className="w3-tag w3-small w3-theme-l1">Friends</span>
            <span className="w3-tag w3-small w3-theme-l2">Food</span>
            <span className="w3-tag w3-small w3-theme-l3">Design</span>
            <span className="w3-tag w3-small w3-theme-l4">Art</span>
            <span className="w3-tag w3-small w3-theme-l5">Photos</span>
          </p>
        </div>
      </div>
      <br/>
 */
/*} Right Column 
    <div className="w3-col m2">
      <div className="w3-card w3-round w3-white w3-center">
        <div className="w3-container">
          <p>Upcoming Events:</p>
          <img src="/w3images/forest.jpg" alt="Forest" style={{width:"100px"}}/>
          <p><strong>Holiday</strong></p>
          <p>Friday 15:00</p>
          <p><button className="w3-button w3-block w3-theme-l4">Info</button></p>
        </div>
      </div>
      <br/>
      
      <div className="w3-card w3-round w3-white w3-center">
        <div className="w3-container">
          <p>Friend Request</p>
          <img src="/w3images/avatar6.png" alt="Avatar" style={{width:"50%"}}/><br/>
          <span>Jane Doe</span>
          <div className="w3-row w3-opacity">
            <div className="w3-half">
              <button className="w3-button w3-block w3-green w3-section" title="Accept"><i className="fa fa-check"></i></button>
            </div>
            <div className="w3-half">
              <button className="w3-button w3-block w3-red w3-section" title="Decline"><i className="fa fa-remove"></i></button>
            </div>
          </div>
        </div>
      </div>
      <br/>
      
      <div className="w3-card w3-round w3-white w3-padding-16 w3-center">
        <p>ADS</p>
      </div>
      <br/>
      
      <div className="w3-card w3-round w3-white w3-padding-32 w3-center">
        <p><i className="fa fa-bug w3-xxlarge"></i></p>
      </div>
    </div>
    */
