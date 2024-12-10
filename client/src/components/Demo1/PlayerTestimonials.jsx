import React from "react";
import { InView } from 'react-intersection-observer';

import Teacher from '../../assets/images/Testiminals/Teacher.png';
import Principal from '../../assets/images/Testiminals/Principal.png';
import Virginia from '../../assets/images/Testiminals/Virginia.png';
import Wake from '../../assets/images/Testiminals/Wake.png';

import '../../styles/demo.css';


const PlayerTestimonials = () => {

  return (
    <div>
          {/* Testimonial Section */}
          <InView triggerOnce={true}>
          {({ inView, ref }) => (
          <div ref={ref} className={`w3-content w3-justify w3-text-grey w3-padding-16 
            ${inView ? "animate-fade-in" : ""}`} 
          id="testimonials">
             <hr className="w3-opacity w3-text-white w3-padding-16 w3-margin-top" />
          <h1 className="w3-text-light-grey w3-margin-bottom">Reputation</h1>
          <div className="w3-row-padding w3-padding-16" style={{ margin: "0 -16px" }}>
       
          <div className="w3-col m6 my-1">  
            <div className="container">
          <img
            src={Teacher}
            alt="teacher"
            className="w3-left w3-circle w3-margin-right w3-grayscale-max w3-image"
            style={{ width: "80px" }}
          />
           <p className='w3-padding'>
            <span className="w3-large">REBECCA FLEX- </span>
            <br /><i>Teacher- Htown High School</i>.
          </p>
          <p> 
            <i style={{fontSize:'13px'}}>Joe Baseball is the best. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quibusdam totam pariatur accusamus, quam velit at ad enim animi aliquam, porro nulla molestias tempore fuga neque similique. Necessitatibus, iusto ex?
          </i>
          </p> 
          </div> 
          </div>
          
          <div className="w3-col m6 my-1">  
            <div className="container">
            <img
         src={Principal}
         alt="principal"
         className="w3-left w3-circle w3-margin-right w3-grayscale-max"
         style={{ width: "80px" }}
       />
           <p className='w3-padding'>
            <span className="w3-large w3-margin-right">KEVIN STEELE- </span>    
            <br /><i>Principal- Htown High School</i>.
          </p>
          <p> 
            <i style={{fontSize:'13px'}}>Joe Baseball is the best. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quibusdam totam pariatur accusamus, quam velit at ad enim animi aliquam, porro nulla molestias tempore fuga neque similique. Necessitatibus, iusto ex?
          </i>
          </p> 
          </div>
          </div>
      
       <div className="w3-col m6 my-1">  
         <div className="container">
       <img
         src={Virginia}
         alt="va coach"
         className="w3-left w3-circle w3-margin-right w3-grayscale-max"
         style={{ width: "80px" }}
       />
       <p className='w3-padding'>
         <span className="w3-large w3-margin-right">JAX DOE- </span>
         <br /><i>Varsity Coach- Htown High School</i>.
       </p>
     <p> 
            <i style={{fontSize:'13px'}}>Joe Baseball is the best. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quibusdam totam pariatur accusamus, quam velit at ad enim animi aliquam, porro nulla molestias tempore fuga neque similique. Necessitatibus, iusto ex?
          </i>
          </p> 
           </div> 
       </div>
       
       <div className="w3-col m6 my-1">  
         <div className="container">
       <img
         src={Wake}
         alt="wake coach"
    className="w3-left w3-circle w3-margin-right w3-grayscale-max"
         style={{ width: "80px" }}
       />
       <p className='w3-padding'>
         <span className="w3-large w3-margin-right">Jock Doe.</span>
         <br /><i>Summer Coach- Dirtbags</i>.
       </p>
     <p> 
            <i style={{fontSize:'13px'}}>Joe Baseball is the best. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quibusdam totam pariatur accusamus, quam velit at ad enim animi aliquam, porro nulla molestias tempore fuga neque similique. Necessitatibus, iusto ex?
          </i>
          </p> 
           </div>
       </div>
       </div>
        </div>
    )}
    </InView>
    </div>

  );
};

export default PlayerTestimonials;