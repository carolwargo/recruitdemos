import React from "react";
import { InView } from "react-intersection-observer";
import PDFViewer from "../components/DemoDownloads/PDFViewer";

  
const PlayerDownloads = () => {


  return (
    <div>

      <div className="page-container ">
        {/* Page Content */}
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`
            ${inView ? "animate-fade-in" : ""}`}
              id="downloads-page"
            >
      
          <PDFViewer  />
             </div>
           
          )}
        </InView>
        {/* END PAGE CONTENT */}
      </div>
    </div>
  );
};

export default PlayerDownloads;

/**import { BsEnvelopePaper, BsFacebook, BsPhone, BsTwitterX } from "react-icons/bs";
import {FaSnapchatSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa"; */

/**    <div className="col-sm-12 col-md-9 col-lg-9">
             <div
                className="w3-container w3-light-grey rounded w3-padding-32 w3-padding-small"
                id="contact"
                style={{ maxWidth: "700px" }}
              >
     <div className="w3-container w3-content" >
                     <div className="container-fluid text-center w3-text-black">
                          <h4 className="w3-center">
                  Contact Me
                  </h4>
                          <hr className=" my-2" />
                          <p className="w3-center fw-light small px-5">
                    Get in touch direct- message me on social media,{" "}
                    <Link>call</Link>, <Link>email</Link> or fill out the form
                    to send me a message through the site.
                  </p>
                          </div>
                         < br/>  
                  <form action="/action_page.php" target="_blank">

                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                    <input
                        className="w3-input w3-border"
                        type="text"
                        name="Name"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                    <input
                        className="w3-input w3-border"
                        type="email"
                        placeholder="Email"
                        name="Email"
                        required
                      />
                    </div>
                  </div>
               
                  <div className="my-3">
                      <textarea
                        className="w3-input w3-border"
                        type="text"
                        name="Message"
                        rows="4"
                        placeholder="Message"
                        required
                      />
                    </div>
                
                    <button
                      type="submit"
                      className="w3-button w3-block w3-black w3-margin-top"
                    >
                      Send Message
                    </button>
                  </form>
                  </div>
                  </div>
                </div> */