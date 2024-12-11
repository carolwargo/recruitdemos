import React from "react";
import DemoSocialAccordion from "../components/DemoSocial/DemoSocialAccordian";
import ClaySmall from "../assets/images/Profiles/ClaySmall.png";
import PlayerPerformance from "../components/DemoSocial/PlayerPerformance";


const DemoSocial = () => {


    return (
        <div>
            <style>
                {`
                html, body, h1, h2, h3, h4, h5 {font-family: "Open Sans", sans-serif}
                `}
            </style>
  



<div className="w3-theme-l5">


{/*} Page Container */}
<div className="w3-container w3-content" 
style={{maxWidth:"1400px", marginTop:"80px"}}>    
  {/*} The Grid */}
  <div className="w3-row">
    {/*} Left Column */}
    <div className="w3-col m3">
      {/*} Profile */}
      <div className="w3-card w3-round w3-white">
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
      <br/>
      
    
      
      {/*} Interests 
      <div className="w3-card w3-round w3-white w3-hide-small">
        <div className="w3-container">
          <p className=" mt-2 mb-1">Interests</p>
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
      */} 

      
      {/*} Alert Box */}
      <div className="w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small">
        <span onclick="this.parentElement.style.display='none'" className="w3-button w3-theme-l3 w3-display-topright">
          <i className="fa fa-remove"></i>
        </span>
        <p className=" mt-3 mb-2"><strong>Hey!</strong></p>
        <p>People are looking at your profile. Find out who.</p>
      </div>
    

      <p className=" mt-3 mb-2"><strong>Downloads</strong></p>
    <DemoSocialAccordion />
      <br/>
      
    {/*} End Left Column */}
    </div>
    
    {/*} Middle Column */}
    <div className="w3-col m7">
    
      <div className="w3-row-padding">
        <div className="w3-col m12">
          <div className="w3-card w3-round w3-white">
          
          </div>
        </div>
      </div>
      

      <div className="demo1-player-performance w3-padding-large" id="demo1-player-performance">
        <PlayerPerformance/>
        </div>
    
      <div className="w3-container w3-card w3-white w3-round w3-margin"><br/>
        <img src="/w3images/avatar6.png" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{width:"60px"}}/>
        <span className="w3-right w3-opacity">32 min</span>
        <h4>Angie Jane</h4><br/>
        <hr className="w3-clear"/>
        <p>Have you seen this?</p>
        <img src="/w3images/nature.jpg" alt="Avatar" style={{width:"100%"}} className="w3-margin-bottom"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom"><i className="fa fa-thumbs-up"></i>  Like</button> 
        <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom"><i className="fa fa-comment"></i>  Comment</button> 
      </div> 
      
    {/*} End Middle Column */}
    </div>
    
    {/*} Right Column */}
    <div className="w3-col m2">
      <div className="w3-card w3-round w3-white w3-center">
        <div className="w3-container">
          <p className=" mt-2 mb-1">Upcoming Events:</p>
          <img src="/w3images/forest.jpg" alt="Forest" style={{width:"100px"}}/>
          <p><strong>Holiday</strong></p>
          <p>Friday 15:00</p>
          <p><button className="w3-button w3-block w3-theme-l4">Info</button></p>
        </div>
      </div>
      <br/>
      
      <div className="w3-card w3-round w3-white w3-center">
        <div className="w3-container">
          <p className=" mt-2 mb-1">Friend Request</p>
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
        <p className=" mt-2 mb-1">ADS</p>
      </div>
      <br/>
      
      <div className="w3-card w3-round w3-white w3-padding-32 w3-center">
        <p><i className="fa fa-bug w3-xxlarge"></i></p>
      </div>
      
    {/*} End Right Column */}
    </div>
    
  {/*} End Grid */}
  </div>
  
{/*} End Page Container */}
</div>
<br/>

{/*} Footer */}
<footer className="w3-container w3-theme-d3 w3-padding-16">
  <h5>Footer</h5>
</footer>

<footer className="w3-container w3-theme-d5">
  <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp">w3.css</a></p>
</footer>

        </div>
        </div>
    );
    };

export default DemoSocial;