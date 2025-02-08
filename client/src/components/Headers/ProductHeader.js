import React from "react";
import { Link } from "react-router-dom";
import MetricsAll from "../../assets/images/Metrics/MetricsAll.png";

export default function ProductHeader() {
  return (
    <div>
      <style>
        {` 
.body,h1,h2,h3,h4,h5,h6 {
font-family: "Raleway", 
sans-serif
}

.body, html {
  height: 100%;
  line-height: 1.8;
}

.bgimg-1 {
  background-position: center;
  background-size: cover;
  background-image: url("${MetricsAll}");
  min-height: 100%;
}

.w3-bar .w3-button {
  padding: 16px;
}`}
      </style>

      <div className="body">
        <div className="w3-top">
          <div className="w3-bar w3-white w3-card" id="myNavbar">
            <Link to="#home" className="w3-bar-item w3-button w3-wide">
              LOGO
            </Link>
            {/*Right-sided navbar links */}
            <div className="w3-right w3-hide-small">
              <a href="#about" className="w3-bar-item w3-button">
                ABOUT
              </a>
              <a href="#team" className="w3-bar-item w3-button">
                <i className="fa fa-user"></i> TEAM
              </a>
              <a href="#work" className="w3-bar-item w3-button">
                <i className="fa fa-th"></i> WORK
              </a>
              <a href="#pricing" className="w3-bar-item w3-button">
                <i className="fa fa-usd"></i> PRICING
              </a>
              <a href="#contact" className="w3-bar-item w3-button">
                <i className="fa fa-envelope"></i> CONTACT
              </a>
            </div>

            {/*} Hide right-floated links on small screens and replace them with a menu icon */}

            <a
              href="/"
              className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
              onclick="w3_open()"
            >
              <i className="fas fa-bars"></i>
            </a>
          </div>
        </div>
        {/** Sidebar on small screens when clicking the menu icon */}
        <nav
          className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large"
          style={{ display: "none" }}
          id="mySidebar"
        >
          <a
            href="/"
            onclick="w3_close()"
            className="w3-bar-item w3-button w3-large w3-padding-16"
          >
            Close ×
          </a>
          <a
            href="#about"
            onclick="w3_close()"
            className="w3-bar-item w3-button"
          >
            ABOUT
          </a>
          <a
            href="#team"
            onclick="w3_close()"
            className="w3-bar-item w3-button"
          >
            TEAM
          </a>
          <a
            href="#work"
            onclick="w3_close()"
            className="w3-bar-item w3-button"
          >
            WORK
          </a>
          <a
            href="#pricing"
            onclick="w3_close()"
            className="w3-bar-item w3-button"
          >
            PRICING
          </a>
          <a
            href="#contact"
            onclick="w3_close()"
            className="w3-bar-item w3-button"
          >
            CONTACT
          </a>
        </nav>
        {/**Header with full-height image  */}
        <header
          className="bgimg-1 w3-display-container w3-grayscale-min"
          style={{
            backgroundImage: `url(${MetricsAll})`, 
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }} 
          id="home"
        >
            <div
            className="mask d-flex align-items-center h-100"
            style={{ 
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                minHeight: "100vh",
                backgroundBlendMode: "darken",
                    

                        }}>

            </div>
          <div
            className="w3-display-left w3-text-white"
            style={{ padding: "48px" }}
          >
            <span className="w3-jumbo w3-hide-small">
              Start something that matters
            </span>
            <br />
            <span className="w3-xxlarge w3-hide-large w3-hide-medium">
              Start something that matters
            </span>
            <br />
            <span className="w3-large">
              Stop wasting valuable time with projects that just isn't you.
            </span>
            <p>
              <a
                href="#about"
                className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off"
              >
                Learn more and start today
              </a>
            </p>
          </div>
          <div
            className="w3-display-bottomleft w3-text-grey w3-large"
            style={{ padding: "24px 48px" }}
          >
            <i className="fa fa-facebook-official w3-hover-opacity"></i>
            <i className="fa fa-instagram w3-hover-opacity"></i>
            <i className="fa fa-snapchat w3-hover-opacity"></i>
            <i className="fa fa-pinterest-p w3-hover-opacity"></i>
            <i className="fa fa-twitter w3-hover-opacity"></i>
            <i className="fa fa-linkedin w3-hover-opacity"></i>
          </div>
        </header>
      </div>

      <script>
        {`
 {/* Modal Image Gallery*/}
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}
`}
      </script>
    </div>
  );
}
