import React, { useState } from "react";
import { Link } from "react-router-dom";
import CSBG from "../../assets/images/BG/CSBG.png";

export default function ProductHeader() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Function to toggle sidebar
  const w3_open = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // Function to close sidebar
  const w3_close = () => {
    setSidebarVisible(false);
  };

  return (
    <div>
      <style>
        {`
        body, h1, h2, h3, h4, h5, h6 {
          font-family: "Raleway", sans-serif;
        }

        body, html {
          height: 100%;
          line-height: 1.8;
        }

        .bgimg-1 {
          background-position: center;
          background-size: cover;
          background-image: url("${CSBG}");
          min-height: 100vh;
          background-attachment: fixed;
        }

        /* Ensure compatibility with mobile devices */
        @media (max-width: 1024px) {
          .bgimg-1 {
            min-height: 50vh;
          }
        }

        /* Reduce horizontal padding on small and medium screens */
        @media (max-width: 1024px) {
          .header-content {
            padding: 24px;
          }
        }

        .w3-bar .w3-button {
          padding: 12px;
        }
        `}
      </style>

      <div className="body">
        <div className="w3-top">
          <div className="w3-bar w3-white w3-card" id="myNavbar">
            <Link to="#home" className="w3-bar-item w3-button"
            style={{textShadow: "1px 1px 2px"}} 
            >
              con-scribe.com
            </Link>

            {/* Right-sided navbar links */}
            <div className="w3-right w3-hide-small">
              <a href="#about" className="w3-bar-item w3-button">ABOUT</a>
              <a href="#team" className="w3-bar-item w3-button"><i className="fa fa-user"></i> TEAM</a>
              <a href="#work" className="w3-bar-item w3-button"><i className="fa fa-th"></i> WORK</a>
              <a href="#pricing" className="w3-bar-item w3-button"><i className="fa fa-usd"></i> PRICING</a>
              <a href="#contact" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i> CONTACT</a>
            </div>

            {/* Menu icon for small screens */}
            <button
              className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
              onClick={w3_open}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

        {/* Sidebar for small screens */}
        <nav
          className={`w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large ${
            sidebarVisible ? "w3-show" : "w3-hide"
          }`}
        >
          <button
            onClick={w3_close}
            className="w3-bar-item w3-button w3-large w3-padding-16"
          >
            Close ×
          </button>
          <a href="#about" onClick={w3_close} className="w3-bar-item w3-button">ABOUT</a>
          <a href="#team" onClick={w3_close} className="w3-bar-item w3-button">TEAM</a>
          <a href="#work" onClick={w3_close} className="w3-bar-item w3-button">WORK</a>
          <a href="#pricing" onClick={w3_close} className="w3-bar-item w3-button">PRICING</a>
          <a href="#contact" onClick={w3_close} className="w3-bar-item w3-button">CONTACT</a>
        </nav>

        {/* Header section with background image */}
        <header
          className="bgimg-1 w3-display-container w3-grayscale-min"
          id="home"
        >
          <div className="w3-display-left w3-text-white header-content" style={{ padding: "48px" }}>
            <span className="w3-jumbo w3-hide-small">Take the Lead</span>
            <span className="w3-xxlarge w3-hide-large w3-hide-medium">Take the Lead</span>
            <br />
            <span className="w3-large">Stop wasting opportunities to connect on a level they haven't seen yet.</span>
            <p>
              <Link
                to="/product"
                className="w3-button rounded w3-padding-large w3-large w3-margin-top w3-hover-opacity"
                style={{
                  backgroundColor: "white",
                  color: " black",
                  boxShadow: "2px 4px 8px 0 #f1aeae",
                }}
              >
                LEARN MORE & GET STARTED
              </Link>
            </p>
          </div>
        </header>
      </div>
    </div>
  );
}
