import React from "react";

const PDFViewer = () => {

    return (
        <div>

             {/**Schedules */}
 <div className="container">
            <iframe
  src={require("../assets/PDF/Schedules.pdf")}
  width="100%"
  height="980px"
  title="PDF Viewer"
/>
</div>


 {/**Transcripts */}
 <div className="container">
            <iframe
  src={require("../assets/PDF/Transcripts.pdf")}
  width="100%"
  height="980px"
  title="PDF Viewer"
/>
</div>


 {/**References */}
<div className="container">
            <iframe
  src={require("../assets/PDF/References.pdf")}
  width="100%"
  height="980px"
  title="PDF Viewer"
/>
</div>


   {/**Performance*/}
   <div className="container">
            <iframe
  src={require("../assets/PDF/Performance.pdf")}
  width="100%"
  height="980px"
  title="PDF Viewer"
/>
</div>
               {/**Resume */}
               <div className="container">
            <iframe
  src={require("../assets/PDF/PlayerResume.pdf")}
  width="100%"
  height="980px"
  title="PDF Viewer"
/>
</div>

        </div>
    );
};

export default PDFViewer;
