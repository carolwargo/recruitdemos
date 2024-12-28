import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { InView } from "react-intersection-observer";
import ClaySmall from '../assets/images/Profiles/ClaySmall.png';
import Offense from '../assets/images/Video/Offense.png';
import Defense from '../assets/images/Video/Defense.png';
import MLB from '../assets/images/Video/MLB.png';

/*import AllState from "../../assets/images/PlayerPosts/AllState.png";
import Signing from "../../assets/images/PlayerPosts/Signing.png";
import MVP from "../../assets/images/PlayerPosts/MVP.png";
import Big26 from "../../assets/images/PlayerPosts/Big26.png";
import SBC from "../../assets/images/PlayerPosts/SBC.png";
import NCAA from "../../assets/images/PlayerPosts/NCAA.png";
*/

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 4 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}





export default function FloatingActionButtonZoom() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className='bg-black'>
     

    <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w3-text-grey  w3-padding-16 
            ${inView ? "animate-fade-in" : ""}`}
              id="Media"
            >
        <div className="container">
        <div className="row d-flex justify-content-center align-items-center w3-padding-large">
            <div className="col-sm-12 col-md-8">
              
      <video
        src={ClaySmall}
        controls
        className=" border border-dark"
        style={{ width: "100%" }}
      ></video>
              </div>
  <div className="col-sm-12 col-md-4">
    <Box
      className=" w3-text-white"
      style={{backgroundColor:'#222'}}
      sx={{
        position: "relative",
        minHeight: 200,
      }}
    >
<AppBar
  position="static"
  className="w3-text-white"
  style={{ backgroundColor: '#1c1d1e' }}
>
  <Tabs
    value={value}
    onChange={handleChange}
    indicatorColor="primary"
    textColor="inherit"
    variant="scrollable"
    aria-label="action tabs example"
    sx={{
      ".MuiTab-root": {
        color: "white !important", // Force white text for unselected tabs
        transition: "color 0.3s ease", // Smooth transition
      },
      ".Mui-selected": {
        color: "primary.main !important", // Ensure active tab is primary color
      },
    }}
  >
    <Tab label="Hitting" {...a11yProps(0)} />
    <Tab label="BullPens" {...a11yProps(1)} />
    <Tab label="In-Game" {...a11yProps(2)} />
  </Tabs>
</AppBar>


 {/**start HITTING */}
      <TabPanel value={value} index={0} dir={theme.direction}>
    
      <div className="">
      <div className="row d-flex align-items-center">
  <div className="col-6 col-sm-5 col-md-5">
    <img src={Offense} alt="small" className="img-fluid shadow" />
  </div>
  <div className="col-6 col-sm-7 col-md-7 text-start">
    <p className="py-0 mb-0 text-white" style={{ fontSize: "12px" }}>CAGE WORK</p>
    <p className="py-0 mb-0" style={{ fontSize: "12px" }}>
      <i>January 1st, 2025</i>
    </p>
  </div>
</div>

 

  <hr
  className="d-block bg-secondary rounded justify-content-start align-items-center my-3"
  style={{
    paddingTop: '.5px',
    paddingBottom: '.5px',
    boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, 0.5)', // Customize as needed
  }}
>
</hr>



    <div className="row d-flex align-items-center">
  <div className="col-6 col-sm-5 col-md-5">
      <img src={Defense} alt="small" className=' img-fluid shadow' />
    </div>
   <div className="col-6 col-sm-7 col-md-7 text-start">
      <p className="py-0 mb-0 text-white" style={{ fontSize: "12px" }}>BP <span className='fw-light'>(Live At-Bats)</span></p>
      <p className="py-0 mb-0" style={{fontSize:'12px'}}><i>January 1st, 2025</i></p>
    </div>
  </div>


 <hr
  className="d-block bg-secondary rounded justify-content-start align-items-center my-3"
  style={{
    paddingTop: '.5px',
    paddingBottom: '.5px',
    boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, 0.5)', // Customize as needed
  }}
>
</hr>


    <div className="row d-flex align-items-center">
  <div className="col-6 col-sm-5 col-md-5">
      <img src={MLB} alt="small" className=' img-fluid' />
    </div>
   <div className="col-6 col-sm-7 col-md-7 text-start">
      <p className="py-0 mb-0 text-white" style={{ fontSize: "12px" }}>LIVE (IN-GAME)</p>
      <p className="py-0 mb-0" style={{fontSize:'12px'}}><i>January 1st, 2025</i></p>
    </div>
  </div>
  </div>
</TabPanel>

 {/**start BULLPENS */}
      <TabPanel value={value} index={1} dir={theme.direction}>
      <div className="">
 <div className="row d-flex justify-content-between  align-items-center">
  <div className="col-6 col-sm-5 col-md-5">
      <img src={Offense} alt="small" className=' img-fluid shadow' />
    </div>
   <div className="col-6 col-sm-7 col-md-7 text-start">
    <p className="py-0 mb-0 text-white" style={{ fontSize: "12px" }}>BULLPEN <i style={{fontSize:'12px'}} className=' text-secondary fw-light'>JOE PITCHER</i></p>
      <p className="py-0 mb-0" style={{fontSize:'12px'}}><i>January 1st, 2025</i></p>
    </div>
  </div>
 

  <hr
  className="d-block bg-secondary rounded justify-content-start align-items-center my-3"
  style={{
    paddingTop: '.5px',
    paddingBottom: '.5px',
    boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, 0.5)', // Customize as needed
  }}
>
</hr>



<div className="row d-flex justify-content-between align-items-center ">
  <div className="col-6 col-sm-5 col-md-5">
      <img src={Defense} alt="small" className=' img-fluid shadow' />
    </div>
   <div className="col-6 col-sm-7 col-md-7 text-start">
    <p className="py-0 mb-0 text-white" style={{ fontSize: "12px" }}>BULLPEN <i style={{fontSize:'12px'}} className=' text-secondary fw-light'>JOSH PITCHER</i></p>
      <p className="py-0 mb-0" style={{fontSize:'12px'}}><i>March 31st, 2025</i></p>
    </div>
  </div>


 <hr
  className="d-block bg-secondary rounded justify-content-start align-items-center my-3"
  style={{
    paddingTop: '.5px',
    paddingBottom: '.5px',
    boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, 0.5)', // Customize as needed
  }}
>
</hr>


    <div className="row d-flex align-items-center">
  <div className="col-6 col-sm-5 col-md-5">
      <img src={MLB} alt="small" className=' img-fluid' />
    </div>
   <div className="col-6 col-sm-7 col-md-7 text-start">
    <p className="py-0 mb-0 text-white" style={{ fontSize: "12px" }}>BULLPEN <i style={{fontSize:'12px'}} className=' text-secondary fw-light'>JOSH PITCHER</i></p>
      <p className="py-0 mb-0" style={{fontSize:'12px'}}><i>April 21st, 2025</i></p>
    </div>
  </div>
  </div>
      </TabPanel>

      {/**start in-game */}
      <TabPanel value={value} index={2} dir={theme.direction}>
      <div className="">
 <div className="row d-flex justify-content-between align-items-center">
  <div className="col-6 col-sm-5 col-md-5">
      <img src={Offense} alt="small" className=' img-fluid shadow' />
    </div>
   <div className="col-6 col-sm-7 col-md-7 text-start">
    <p className="py-0 mb-0 text-white" style={{ fontSize: "12px" }}>VS. OPPONENT</p>
      <p className="py-0 mb-0" style={{fontSize:'12px'}}><i>January 1st, 2025</i></p>
    </div>
  </div>
 

  <hr
  className="d-block bg-secondary rounded justify-content-start align-items-center my-3"
  style={{
    paddingTop: '.5px',
    paddingBottom: '.5px',
    boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, 0.5)', // Customize as needed
  }}
>
</hr>



<div className="row d-flex justify-content-between align-items-center ">
  <div className="col-6 col-sm-5 col-md-5">
      <img src={Defense} alt="small" className=' img-fluid shadow' />
    </div>
   <div className="col-6 col-sm-7 col-md-7 text-start">
      <p className="py-0 mb-0 text-white" style={{ fontSize: "12px" }}>@ OPPONENT</p>
      <p className="py-0 mb-0" style={{fontSize:'12px'}}><i>March 4th, 2025</i></p>
    </div>
  </div>


  <hr
  className="d-block bg-secondary rounded justify-content-start align-items-center my-3"
  style={{
    paddingTop: '.5px',
    paddingBottom: '.5px',
    boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, 0.5)', // Customize as needed
  }}
>
</hr>


    <div className="row d-flex align-items-center">
  <div className="col-6 col-sm-5 col-md-5">
      <img src={MLB} alt="small" className=' img-fluid' />
    </div>
   <div className="col-6 col-sm-7 col-md-7 text-start">
      <p className="py-0 mb-0 text-white" style={{ fontSize: "12px" }}>VS. OPPONENT</p>
      <p className="py-0 mb-0" style={{fontSize:'12px'}}><i>April 9th, 2025</i></p>
    </div>
  </div>
  </div>
</TabPanel>



    {/**start reels */}
    <TabPanel value={value} index={3} dir={theme.direction}>
      <div className="">
      <p className='border-bottom text-start text-white'><b>SOCIAL MEDIA REELS</b></p>
      
      {/**1 of 6*/}
  <div className="row d-flex justify-content-between  align-items-center">
  <div className="col-6 col-sm-5 col-md-5">
      <img src={Offense} alt="small" className=' img-fluid shadow' />
    </div>
   <div className="col-6 col-sm-7 col-md-7 text-start">
    <p className="py-0 mb-0 text-white" style={{ fontSize: "12px" }}>VS. OPPONENT</p>
      <p className="py-0 mb-0" style={{fontSize:'12px'}}><i>January 1st, 2025</i></p>
    </div>
  </div>
 

  <hr
  className="d-block bg-secondary rounded justify-content-start align-items-center my-3"
  style={{
    paddingTop: '.5px',
    paddingBottom: '.5px',
    boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, 0.5)', // Customize as needed
  }}
>
</hr>

 {/**2 of 6*/}
<div className="row d-flex justify-content-between  align-items-center">
  <div className="col-6 col-sm-5 col-md-5">
      <img src={Offense} alt="small" className=' img-fluid shadow' />
    </div>
   <div className="col-6 col-sm-7 col-md-7 text-start">
    <p className="py-0 mb-0 text-white" style={{ fontSize: "12px" }}>VS. OPPONENT</p>
      <p className="py-0 mb-0" style={{fontSize:'12px'}}><i>January 1st, 2025</i></p>
    </div>
  </div>
 

  <hr
  className="d-block bg-secondary rounded justify-content-start align-items-center my-3"
  style={{
    paddingTop: '.5px',
    paddingBottom: '.5px',
    boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, 0.5)', // Customize as needed
  }}
>
</hr>


 {/**3 of 6*/}
<div className="row d-flex justify-content-between  align-items-center">
  <div className="col-6 col-sm-5 col-md-5">
      <img src={Offense} alt="small" className=' img-fluid shadow' />
    </div>
   <div className="col-6 col-sm-7 col-md-7 text-start">
    <p className="py-0 mb-0 text-white" style={{ fontSize: "12px" }}>VS. OPPONENT</p>
      <p className="py-0 mb-0" style={{fontSize:'12px'}}><i>January 1st, 2025</i></p>
    </div>
  </div>
 
  <hr
  className="d-block bg-secondary rounded justify-content-start align-items-center my-3"
  style={{
    paddingTop: '.5px',
    paddingBottom: '.5px',
    boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, 0.5)', // Customize as needed
  }}
>
</hr>

 {/**4 of 6*/}
<div className="row d-flex justify-content-between align-items-center ">
  <div className="col-6 col-sm-5 col-md-5">
      <img src={Defense} alt="small" className=' img-fluid shadow' />
    </div>
   <div className="col-6 col-sm-7 col-md-7 text-start">
      <p className="py-0 mb-0 text-white" style={{ fontSize: "12px" }}>@ OPPONENT</p>
      <p className="py-0 mb-0" style={{fontSize:'12px'}}><i>March 4th, 2025</i></p>
    </div>
  </div>

  <hr
  className="d-block bg-secondary rounded justify-content-start align-items-center my-3"
  style={{
    paddingTop: '.5px',
    paddingBottom: '.5px',
    boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, 0.5)', // Customize as needed
  }}
>
</hr>

 {/**5 of 6*/}
    <div className="row d-flex align-items-center">
  <div className="col-6 col-sm-5 col-md-5">
      <img src={MLB} alt="small" className=' img-fluid' />
    </div>
   <div className="col-6 col-sm-7 col-md-7 text-start">
      <p className="py-0 mb-0 text-white" style={{ fontSize: "12px" }}>VS. OPPONENT</p>
      <p className="py-0 mb-0" style={{fontSize:'12px'}}><i>April 9th, 2025</i></p>
    </div>
  </div>

  <hr
  className="d-block bg-secondary rounded justify-content-start align-items-center my-3"
  style={{
    paddingTop: '.5px',
    paddingBottom: '.5px',
    boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, 0.5)', // Customize as needed
  }}
>
</hr>

 {/**6 of 6*/}
    <div className="row d-flex align-items-center">
  <div className="col-6 col-sm-5 col-md-5">
      <img src={MLB} alt="small" className=' img-fluid' />
    </div>
   <div className="col-6 col-sm-7 col-md-7 text-start">
      <p className="py-0 mb-0 text-white" style={{ fontSize: "12px" }}>VS. OPPONENT</p>
      <p className="py-0 mb-0" style={{fontSize:'12px'}}><i>April 9th, 2025</i></p>
    </div>
  </div>
  </div>
</TabPanel>
    </Box>
            </div>
        </div>
        </div>
        </div>
    
)}
</InView>





    </div>

  );
}
