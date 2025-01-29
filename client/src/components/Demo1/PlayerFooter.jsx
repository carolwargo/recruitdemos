import React, {useState} from "react";
import { InView } from 'react-intersection-observer';
import { Link } from "react-router-dom";
import {BsTwitterX } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFileDownload, FaHome, FaPhoneSquare, FaSnapchatSquare } from "react-icons/fa";
import { PiPaperPlane } from "react-icons/pi";
import PlayerResume from "../../assets/PDF/PlayerResume.pdf";

const PlayerFooter = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <div>
<style>
  {`
  .modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
  text-align: center;
  position: relative;
  color: black;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.link-light {
  color: #ffffff;
}

.opacity-90 {
  opacity: 0.5;
}
    .tags {
    background-color: #161619;
    border-radius: 0px 0px 10px 10px;
    display: flex;
    justify-content: space-around;

}

.fa-facebook,
.fas fa-globe,
.fa-instagram,
.fa-twitter {
    text-decoration: none !important;
    cursor: pointer;
    background-color: #918E9B;
    margin: 8px;
    width: 25px;
    height: 25px;
    text-align: center;
    border-radius: 6px;
    display: inline-grid;
    align-items: center;
}

footer {
    padding-top: 2px;
    margin-top: 1px;
}

a:hover {
    opacity: 0.7;
    transition: 0.4s;
}
`}
</style>


 
<div className="text-center ">
    <InView triggerOnce={true}>
          {({ inView, ref }) => (
          <div ref={ref} className={`w3-content w3-container w3-justify w3-text-grey w3-padding-16 
            ${inView ? "animate-fade-in" : ""}`} 
        id="player-footer">


        
          <div className=" w3-padding-48"
          style={{fontFamily:'Roboto'}}>
            <div className="row w3-text-light-grey opacity-65">
              <div className="col-sm-12 col-md-5 col-lg-5 justify-content-start align-content-center">
              <div className="container w3-padding-large">
              <h6 className="w3-text-light-grey fw-bold">THANK YOU FOR VIEWING: </h6>
              <p style={{ fontFamily: "Roboto" }}>
              Feedback is welcome - Feel free to reach out to me directly, and 
              connect with me on social media. <br/>{" "} To communicate with a 3rd party when necessary, please contact {" "} <Link
                className="link-light"
                style={{ cursor: "pointer"}}
                onClick={handleOpen}
              >
                Coach Joe Doe
              </Link>
              .
            </p>
 
              <p style={{}}>DOWNLOAD<span> <a 
                  id="download"
                  download
                className=" link-light"
                 href={PlayerResume} >
                  <span className="text-decoration-none" style={{marginRight:'5px'}}> < FaFileDownload/></span><span className="text-decoration-none">Joe Baseball</span>
              
    </a></span></p>       
             </div>
              </div>

              <div className="col-sm-12 col-md-4 col-lg-4 justify-content-start align-content-center">
                <div className="container w3-padding-large">
              <h6 className="w3-text-light-grey fw-bold">CONTACT INFO </h6>
              <div className="w3-margin-bottom">
             
             <span className="icon-hover-zoom text-decoration-none">
                 <Link className=" mx-1 link-light icon-hover-zoom"
                       style={{ fontSize: "1.1rem" }}>
   <strong>
     <PiPaperPlane /><span className="fw-light" style={{fontSize:'15px', marginLeft:'10px'}}>(123) 456-7890</span>
   </strong>
                           </Link>
                           
                           </span>
<br />
                           <span className="icon-hover-zoom mt-1">
                           <Link
                              className="mx-1 link-light"
                             style={{ fontSize: "1rem" }}
                           >
                             
   <strong>
   <FaPhoneSquare /><span className="fw-light" style={{fontSize:'15px', marginLeft:'10px'}}>players-email@mail.com</span>
   </strong>      
                           </Link>
                           </span>
                           <br />
                           <span className="icon-hover-zoom mt-1">
                           <Link
                              className="mx-1 link-light"
                             style={{ fontSize: "1.1rem" }}
                           >
                             
   <strong>
   <FaHome /><span className="fw-light" style={{fontSize:'14px', marginLeft:'10px'}}>123 Any St. Town, ST. 54321</span>
   </strong>      
                           </Link>
                           </span>
                           </div>
              </div>  
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3 justify-content-start align-content-center">
                <div className="container  w3-padding-large">
              <h6 className="w3-text-light-grey fw-bold">CONTACT INFO </h6>
              <div className="w3-margin-bottom">

<span className="icon-hover-zoom mt-1">
<Link
  className=" mx-1 link-light"
  style={{ fontSize: "1rem" }}
>
<strong>
<BsTwitterX /><span className="fw-light" style={{fontSize:'14px', marginLeft:'10px'}}>@playersXhandle</span>
</strong>
</Link>
</span>
<br/>
<span className="icon-hover-zoom mt-1">
<Link
   className="mx-1 link-light"
  style={{ fontSize: "1.1rem" }}
>
<strong>
<FaSquareInstagram /><span className="fw-light" style={{fontSize:'14px', marginLeft:'10px'}}>@playerIG</span>
</strong>
</Link>
</span>
<br />
<span className="icon-hover-zoom mt-1">
<Link
className="mx-1 link-light"
  style={{ fontSize: "1.1rem" }}
>
          
<strong>
<FaSnapchatSquare /><span className="fw-light" style={{fontSize:'14px', marginLeft:'10px'}}>@playerSnap</span>
</strong>             
</Link>
</span>
</div>
              </  div>
              </div>
                </div>
            </div>
                
          {/* End Contact Section */}
        </div>
          )}
    </InView>
    {showModal && (
  <div className="modal-overlay">
    <div className="modal-content">
      <button className="close-button" onClick={handleClose}>
        ×
      </button>
      <h2 className=" text-dark-emphasis fw-bold">Coach Joe Doe</h2>
      <h6 className=" text-dark-emphasis mb-0">Head Coach- Hilton High School</h6>
      <Link className=" text-dark-emphasis my-0">Email: joe.doe@example.com</Link>
      <Link className=" text-dark-emphasis mb-2">Phone: +1 (555) 123-4567</Link>
       <div className="tags">
            <footer>
            <Link to="https://www.facebook.com/S.Zain.Asif/">
              <i className="fas fa-globe" style={{color:'black'}}></i>
            </Link>
            <Link to="https://www.facebook.com/S.Zain.Asif/">
              <i className="fab fa-facebook" style={{color:'black'}}></i>
            </Link>
            <Link
              to="https://www.instagram.com/zain._.asif/"
              className="fab fa-instagram"
              style={{color:'black'}}
              aria-label="Instagram"
            ></Link>
            <Link
              to="https://twitter.com/comeflywithme92"
              className="fab fa-twitter"
              style={{color:'black'}}
              aria-label="Twitter"
            ></Link>
          </footer>
        </div>
    </div>
  </div>
)}

    </div>
    </div>
  );
};

export default PlayerFooter;