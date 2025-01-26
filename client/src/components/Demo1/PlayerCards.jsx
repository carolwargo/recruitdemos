import React from "react";
import { Link } from "react-router-dom";
import { InView } from "react-intersection-observer";
import DBWhite from "../../assets/images/Demo1/DBWhite.png";
import UA from "../../assets/images/Round/UA.png";
import Gatorade from "../../assets/images/Round/Gadorade.png";
import Big26 from "../../assets/images/Round/Big26.png";
import USALogo from "../../assets/images/Round/USALogo.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';

const PlayerCards = () => {
  return (
    <div>
         <div className="page-container justify-content-center align-items-center">
   <style>
      {`
      .tags {
    background-color: #8ecdf8;
    border-radius: 0px 0px 10px 10px;
    display: flex;
    justify-content: space-around;

}

.fa-facebook,
.fa-github,
.fa-instagram,
.fa-twitter {
    text-decoration: none;
    cursor: pointer;
    background-color: #918E9B;
    margin: 10px;
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
   <InView triggerOnce={true}>
             {({ inView, ref }) => (
               <div
                 ref={ref}
                 className={`w3-content w3-justify w3-text-grey w3-padding-16 
               ${inView ? "animate-fade-in" : ""}`}
                 id="cards"
               >


<hr className="w3-opacity w3-text-white w3-padding-16 w3-margin-top" />
          <h1 className="w3-text-light-grey w3-margin-bottom">Team Affiliations</h1>
          
           <div className="row d-flex justify-content-center align-items-center">
  
  
  
  
  
  {/* High School Card */}
   <div className="col-sm-12 col-md-4 col-lg-4 text-center w3-padding-small">
   <div>
      <div 
  className="card"
  style={{
   
    backgroundImage: `url(${DBWhite})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'black',
    border: '1px solid black',
    filter: 'grayscale(100%)', // Apply grayscale to the background
    position: 'relative', // Ensure text layers properly
  }}
>
  {/* Dark Mask */}
  <div
    className="mask"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: 1, // Ensure mask is above background but below text
    }}
  ></div>

  {/* Text Content */}
  <div
    className="container w3-padding-large text-white"
    style={{
      position: 'relative', // Ensure this content isn't affected by grayscale
      zIndex: 2,
    }}
  >
    <div className="card-body w3-padding-24">
      <h4
        style={{
          color: '#8ecdf8',
          textShadow: '1px 1px 2px black',
          lineHeight: '1',
          fontSize: '32px',
        }}
      >
        <b>ST. MARYS</b> <br />{' '}
        <span style={{fontSize:'24px', marginTop:'0px'}}>High School</span>
      </h4>
      <h6 className="fw-bold my-4"
        style={{
          color: '#8ecdf8',
          textShadow: '1px 1px 2px black',
        }}
        >
        SMAACC <br />
         State Ranking #1
       </h6>
       <div>
        <p
          className="small mb-2"
          style={{
            color: '#8ecdf8',
            textShadow: '1px 1px 2px black',
          }}
        >
          <i className="fas fa-location-pin"></i>{' '}
          <Link
            style={{
              color: '#8ecdf8',
              textShadow: '1px 1px 2px black',
              marginLeft: '5px',
            }}
          >
            Annapolis, MD.
          </Link>
        </p>
        <p
            className="small mb-2"
          style={{
            color: '#8ecdf8',
            textShadow: '1px 1px 2px black',
          }}
        >
          <i className="fas fa-video-camera"></i>{' '}
          <Link
            className="mt-2"
            style={{
              color: '#8ecdf8',
              textShadow: '1px 1px 2px black',
              marginLeft: '5px',
            }}
          >
            Watch Games Live
          </Link>
        </p>
       
        <p
           className="small mb-1"
          style={{
            color: '#8ecdf8',
            textShadow: '1px 1px 2px black',
          }}
        >
          <i className="fas fa-globe mr-2"></i>{' '}
          <Link
            className="mt-2"
            style={{
              color: '#8ecdf8',
              textShadow: '1px 1px 2px black',
              marginLeft: '5px',
            }}
          >
            Program Highlights
          </Link>
        </p>
      </div>
    </div>
    <div className="tags mt-0 mb-2">
      <footer>
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
      </div>
   </div>


{/**Summer Team */}
   <div className="col-sm-12 col-md-4 col-lg-4 text-center w3-padding-small">
   <div>
      <div 
  className="card"
  style={{
   
    backgroundImage: `url(${DBWhite})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'black',
    border: '1px solid black',
    filter: 'grayscale(100%)', // Apply grayscale to the background
    position: 'relative', // Ensure text layers properly
  }}
>
  {/* Dark Mask */}
  <div
    className="mask"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: 1, // Ensure mask is above background but below text
    }}
  ></div>

  {/* Text Content */}
  <div
    className="container w3-padding-large text-white"
    style={{
      position: 'relative', // Ensure this content isn't affected by grayscale
      zIndex: 2,
    }}
  >
    <div className="card-body w3-padding-24">
      <h4
        style={{
          color: '#8ecdf8',
          textShadow: '1px 1px 2px black',
          lineHeight: '1',
          fontSize: '32px',
        }}
      >
        <b>DIRTBAGS</b> <br />{' '}
        <span style={{fontSize:'24px', marginTop:'0px'}}>Baseball</span>
      </h4>
      <h6 className="fw-bold my-4"
        style={{
          color: '#8ecdf8',
          textShadow: '1px 1px 2px black',
        }}
      >
         All-Blacks <br />
         National Ranking #1
      </h6>
      <div>
        <p
          className="small mb-2"
          style={{
            color: '#8ecdf8',
            textShadow: '1px 1px 2px black',
          }}
        >
          <i className="fas fa-location-pin"></i>{' '}
          <Link
            style={{
              color: '#8ecdf8',
              textShadow: '1px 1px 2px black',
              marginLeft: '5px',
            }}
          >
            Burlington, N.C.
          </Link>
        </p>
        <p
            className="small mb-2"
          style={{
            color: '#8ecdf8',
            textShadow: '1px 1px 2px black',
          }}
        >
          <i className="fas fa-video-camera"></i>{' '}
          <Link
            className="mt-2"
            style={{
              color: '#8ecdf8',
              textShadow: '1px 1px 2px black',
              marginLeft: '5px',
            }}
          >
            Watch Games Live
          </Link>
        </p>
       
        <p
           className="small mb-1"
          style={{
            color: '#8ecdf8',
            textShadow: '1px 1px 2px black',
          }}
        >
          <i className="fas fa-globe mr-2"></i>{' '}
          <Link
            className="mt-2"
            style={{
              color: '#8ecdf8',
              textShadow: '1px 1px 2px black',
              marginLeft: '5px',
            }}
          >
            Program Highlights
          </Link>
        </p>
      </div>
    </div>
    <div className="tags mt-0 mb-2">
      <footer>
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

      </div>
   </div>


{/*Select Team */}  
   <div className="col-sm-12 col-md-4 col-lg-4 text-center w3-padding-small">
   
   <div>
      <div 
  className="card"
  style={{
   
    backgroundImage: `url(${DBWhite})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'black',
    border: '1px solid black',
    filter: 'grayscale(100%)', // Apply grayscale to the background
    position: 'relative', // Ensure text layers properly
  }}
>
  {/* Dark Mask */}
  <div
    className="mask"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: 1, // Ensure mask is above background but below text
    }}
  ></div>

  {/* Text Content */}
  <div
    className="container w3-padding-large text-white"
    style={{
      position: 'relative', // Ensure this content isn't affected by grayscale
      zIndex: 2,
    }}
  >
    <div className="card-body w3-padding-24">
      <h4
        style={{
          color: '#8ecdf8',
          textShadow: '1px 1px 2px black',
          lineHeight: '1',
          fontSize: '32px',
        }}
      >
        <b>SELECT</b> <br />{' '}
        <span style={{fontSize:'24px', marginTop:'0px'}}>Teams</span>
      </h4>
    
        <div className="row d-flex justify-center align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6">
          <img 
        src={USALogo} 
        alt="usa-logo" 
        className=""
        style={{
       width:'40px',
       height:'auto'
        }}
        />
     
        <p
            className="small my-1"
          style={{
            color: '#8ecdf8',
            textShadow: '1px 1px 2px black',
          }}
        >
          <i className="fas fa-video-camera"></i>{' '}
          <Link
            className="mt-2"
            style={{
              color: '#8ecdf8',
              textShadow: '1px 1px 2px black',
              marginLeft: '5px',
            }}
          >
          Highlights
          </Link>
        </p>
       
        <p
           className="small mb-3"
          style={{
            color: '#8ecdf8',
            textShadow: '1px 1px 2px black',
          }}
        >
          <i className="fas fa-globe mr-2"></i>{' '}
          <Link
            className="mt-2"
            style={{
              color: '#8ecdf8',
              textShadow: '1px 1px 2px black',
              marginLeft: '5px',
            }}
          >
            Player Profile
          </Link>
        </p>
          </div>
       
          <div className="col-sm-12 col-md-6 col-lg-6">
          <img 
        src={Big26} 
        alt="26-logo" 
        className=""
        style={{
       width:'40px',
       height:'auto'
        }}
        />
     
        <p
            className="small my-1"
          style={{
            color: '#8ecdf8',
            textShadow: '1px 1px 2px black',
          }}
        >
          <i className="fas fa-video-camera"></i>{' '}
          <Link
            className="mt-2"
            style={{
              color: '#8ecdf8',
              textShadow: '1px 1px 2px black',
              marginLeft: '5px',
            }}
          >
          Highlights
          </Link>
        </p>
       
        <p
           className="small mb-3"
          style={{
            color: '#8ecdf8',
            textShadow: '1px 1px 2px black',
          }}
        >
          <i className="fas fa-globe mr-2"></i>{' '}
          <Link
            className="mt-2"
            style={{
              color: '#8ecdf8',
              textShadow: '1px 1px 2px black',
              marginLeft: '5px',
            }}
          >
            Player Profile
          </Link>
        </p>
          </div>


          <div className="col-sm-12 col-md-6 col-lg-6">
          <img 
        src={Gatorade} 
        alt="tx-logo" 
        className=""
        style={{
       width:'40px',
       height:'auto'
        }}
        />
     
        <p
            className="small my-1"
          style={{
            color: '#8ecdf8',
            textShadow: '1px 1px 2px black',
          }}
        >
          <i className="fas fa-video-camera"></i>{' '}
          <Link
            className="mt-2"
            style={{
              color: '#8ecdf8',
              textShadow: '1px 1px 2px black',
              marginLeft: '5px',
            }}
          >
          Highlights
          </Link>
        </p>
       
        <p
           className="small mb-3"
          style={{
            color: '#8ecdf8',
            textShadow: '1px 1px 2px black',
          }}
        >
          <i className="fas fa-globe mr-2"></i>{' '}
          <Link
            className="mt-2"
            style={{
              color: '#8ecdf8',
              textShadow: '1px 1px 2px black',
              marginLeft: '5px',
            }}
          >
            Player Profile
          </Link>
        </p>
          </div>


          <div className="col-sm-12 col-md-6 col-lg-6">
          <img 
        src={UA} 
        alt="usa-logo" 
        className=""
        style={{
       width:'40px',
       height:'auto'
        }}
        />
        <p
            className="small my-1"
          style={{
            color: '#8ecdf8',
            textShadow: '1px 1px 2px black',
          }}
        >
          <i className="fas fa-video-camera"></i>{' '}
          <Link
            className="mt-2"
            style={{
              color: '#8ecdf8',
              textShadow: '1px 1px 2px black',
              marginLeft: '5px',
            }}
          >
          Highlights
          </Link>
        </p>
       
        <p
           className="small mb-3"
          style={{
            color: '#8ecdf8',
            textShadow: '1px 1px 2px black',
          }}
        >
          <i className="fas fa-globe mr-2"></i>{' '}
          <Link
            className="mt-2"
            style={{
              color: '#8ecdf8',
              textShadow: '1px 1px 2px black',
              marginLeft: '5px',
            }}
          >
            Player Profile
          </Link>
        </p>
          </div>
        </div>    
      </div>
  </div>
</div>
      </div>
   </div>
  </div>
</div>
        )}
      </InView>
      </div>
    </div>
  );
};

export default PlayerCards;
