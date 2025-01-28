import React from 'react';

import PlayerResume from "../../assets/PDF/PlayerResume.pdf";

const PDFViewer = () => {

  return (
    <div className='bg-dark'>

       <div className="row d-flex justify-content-center align-items-center">
       <div className="col-sm-4 col-md-4 col-lg-4"></div>
        <div className="col-sm-8 col-md-8 col-lg-8">
        <div className="container w3-padding-large w3-padding-32">
        <iframe src={PlayerResume} 
        title="Player Resume" 
        width="100%" 
        height="800"
        frameborder="12">

        </iframe>
   
        <div className="container w3-padding">
       
            <p>Click a link to preview the PDF.</p>
            </div>
            </div>
        </div>
       
      </div>
      </div>
  );
};

export default PDFViewer;
