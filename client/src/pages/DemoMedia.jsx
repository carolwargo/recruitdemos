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
import { Link } from 'react-router-dom';

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
              className={`w3-hide-small w3-hide-medium w3-text-grey w3-padding-large w3-padding-16 
            ${inView ? "animate-fade-in" : ""}`}
              id="Media"
            >
        
        <div className="w3-padding-32">
        <div className="row">
                   <hr className="w3-opacity w3-text-white w3-padding-16 w3-margin-top" />
                           <h1 className="w3-text-light-grey w3-margin-bottom">Video Library</h1>
             
            <div className="col-sm-12 col-md-8 col-lg-8">
          <div>
<video src={ClaySmall} controls className="img-fluid shadow" style={{width:'100%'}}></video>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
             
            <Box
         className="text-white"
            style={{backgroundColor:'#323334'}}
      sx={{
        position: 'relative',
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
        color: "white", // Unselected tabs
        transition: "color 0.3s ease", // Smooth transition
      },
      ".Mui-selected": {
        color: "primary.main", // Selected tab color
      },
    }}
  >
    <Tab label="Hitting" {...a11yProps(0)} />
    <Tab label="BullPens" {...a11yProps(1)} />
    <Tab label="In-Game" {...a11yProps(2)} />
  </Tabs>
</AppBar>



{/**CAGE WORK PANEL START */}
      <TabPanel value={value} index={0} dir={theme.direction}>
      <div className="hitting-container">
  <div className="row d-flex justify-content-between align-items-center">
  <div className="col-12 col-sm-5">
      <img src={Offense} alt="small" className=' img-fluid shadow w3-grayscale-max' />
    </div>
    <div className="col-12 col-sm-7 ">
        <Link className=' link-light link-offset-2-hover' to={'/demo'}>
    <p className="py-0 mb-0 text-white" style={{fontSize:'14px'}}>CAGE WORK</p>
    </Link>
      <p className="py-0 mb-0" style={{fontSize:'11px'}}><i>Lorem ipsum dolor sit, amet to the consectetur adipisicing elit.</i></p>
      <p className="py-0 mb-0 w3-text-grey" style={{fontSize:'11px'}}><i>Jan. 1, 2025</i></p>
    </div>

  </div>
 

  <hr
  className="d-block bg-secondary rounded justify-content-start align-items-center my-3"
  style={{
    paddingTop: '.5px',
    paddingBottom: '.5px',
    boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, 0.5)', 
  }}
>
</hr>



<div className="row d-flex justify-content-between align-items-center ">
  <div className="col-12 col-sm-5">
      <img src={Defense} alt="small" className=' img-fluid shadow  w3-grayscale-max' />
    </div>
    <div className="col-12 col-sm-7 text-start">
         <Link className=' link-light link-offset-2-hover' to={'/demo'}>
      <p className="py-0 mb-0 text-white" style={{fontSize:'14px'}}>BP <span className='fw-light'>(Live At-Bats)</span></p>
      </Link>
      <p className="py-0 mb-0" style={{fontSize:'11px'}}><i>Lorem ipsum dolor sit, amet to the consectetur adipisicing elit.</i></p>
      <p className="py-0 mb-0 w3-text-grey" style={{fontSize:'11px'}}><i>Jan. 1, 2025</i></p>
      </div>
  </div>


 <hr
  className="d-block bg-secondary rounded justify-content-start align-items-center my-3"
  style={{
    paddingTop: '.5px',
    paddingBottom: '.5px',
    boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, 0.5)', 
  }}
>
</hr>


<div className="row d-flex justify-content-between align-items-center">
  <div className="col-12 col-sm-5">
      <img src={MLB} alt="small" className=' img-fluid shadow-lg  w3-grayscale-max' />
    </div>
    <div className="col-12 col-sm-7 text-start">
     <Link className=' link-light link-offset-2-hover' to={'/demo'}>
      <p className="py-0 mb-0 text-white" style={{fontSize:'14px'}}>LIVE (IN-GAME)</p>
      </Link>
      <p className="py-0 mb-0" style={{fontSize:'11px'}}><i>Lorem ipsum dolor sit, amet to the consectetur adipisicing elit.</i></p>
      <p className="py-0 mb-0 w3-text-grey" style={{fontSize:'11px'}}><i>Jan. 1, 2025</i></p>
    </div>
  </div>
  </div>
</TabPanel>
{/**CAGE WORK PANEL START */}


{/**BULLPEN PANEL START */}
      <TabPanel value={value} index={1} dir={theme.direction}>
      <div className="defense-container">
  <div className="row d-flex justify-content-between  align-items-center">
  <div className="col-12 col-sm-5">
      <img src={Offense} alt="small" className=' img-fluid shadow  w3-grayscale-max' />
    </div>
    <div className="col-12 col-sm-7 text-start">
    <p className="py-0 mb-0 text-white" style={{fontSize:'14px'}}> <Link className=' link-light link-offset-2-hover' to={'/demo'}>
    BULLPEN </Link><span><i className=' w3-text-gray'>(Joe Pitcher )</i></span></p>
    <p className="py-0 mb-0" style={{fontSize:'11px'}}><i style={{fontSize:'11px'}}>Lorem ipsum dolor sit, amet to the consectetur adipisicing elit.</i></p>
      <p className="py-0 mb-0 w3-text-grey" style={{fontSize:'11px'}}><i>Jan. 1, 2025</i></p> 
    </div>
  </div>
 

  <hr
  className="d-block bg-secondary rounded justify-content-start align-items-center my-3"
  style={{
    paddingTop: '.5px',
    paddingBottom: '.5px',
    boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, 0.5)', 
  }}
>
</hr>



<div className="row d-flex justify-content-between align-items-center ">
  <div className="col-12 col-sm-5">
      <img src={Defense} alt="small" className=' img-fluid shadow  w3-grayscale-max' />
    </div>
    <div className="col-12 col-sm-7 text-start">
    <p className="py-0 mb-0 text-white" style={{fontSize:'14px'}}> <Link className=' link-light link-offset-2-hover' to={'/demo'}>
    BULLPEN </Link><span><i className=' w3-text-gray'>(Joe Pitcher )</i></span></p>
    <p className="py-0 mb-0" style={{fontSize:'11px'}}><i style={{fontSize:'11px'}}>Lorem ipsum dolor sit, amet to the consectetur adipisicing elit.</i></p>
      <p className="py-0 mb-0 w3-text-grey" style={{fontSize:'11px'}}><i>Jan. 1, 2025</i></p> 
    </div>
  </div>


 <hr
  className="d-block bg-secondary rounded justify-content-start align-items-center my-3"
  style={{
    paddingTop: '.5px',
    paddingBottom: '.5px',
    boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, 0.5)', 
  }}
>
</hr>


<div className="row d-flex justify-content-between align-items-center">
  <div className="col-12 col-sm-5">
      <img src={MLB} alt="small" className=' img-fluid shadow-lg w3-grayscale-max' />
    </div>
    <div className="col-12 col-sm-7 text-start">
    <p className="py-0 mb-0 text-white" style={{fontSize:'14px'}}> <Link className=' link-light link-offset-2-hover' to={'/demo'}>
    BULLPEN </Link><span><i className=' w3-text-gray'>(Joe Pitcher )</i></span></p>
    <p className="py-0 mb-0" style={{fontSize:'11px'}}><i style={{fontSize:'11px'}}>Lorem ipsum dolor sit, amet to the consectetur adipisicing elit.</i></p>
      <p className="py-0 mb-0 w3-text-grey" style={{fontSize:'11px'}}><i>Jan. 1, 2025</i></p>     
    </div>
  </div>
  </div>
      </TabPanel>
{/**BULLPEN PANEL END */}


{/**IN-GAME PANEL START */}
      <TabPanel value={value} index={2} dir={theme.direction}>
      <div className="in-game-container">

  <div className="row d-flex justify-content-between  align-items-center">
  <div className="col-12 col-sm-5">
      <img src={Offense} alt="small" className=' img-fluid shadow  w3-grayscale-max' />
    </div>
    <div className="col-12 col-sm-7 text-start">
    <Link className=' link-light link-offset-2-hover' to={'/demo'}>
    <p className="py-0 mb-0 text-white" style={{fontSize:'14px'}}>VS. OPPONENT</p>
   </Link>  
    <p className="py-0 mb-0" style={{fontSize:'11px'}}><i style={{fontSize:'11px'}}>Lorem ipsum dolor sit, amet to the consectetur adipisicing elit.</i></p>
    <p className="py-0 mb-0 w3-text-grey" style={{fontSize:'11px'}}><i>Jan. 1, 2025</i></p> 
  </div>
  </div>
 

  <hr
  className="d-block bg-secondary rounded justify-content-start align-items-center my-3"
  style={{
    paddingTop: '.5px',
    paddingBottom: '.5px',
    boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, 0.5)', 
  }}
>
</hr>



<div className="row d-flex justify-content-between align-items-center ">
  <div className="col-12 col-sm-5">
      <img src={Defense} alt="small" className=' img-fluid shadow  w3-grayscale-max' />
    </div>
    <div className="col-12 col-sm-7 text-start">
    <Link className=' link-light link-offset-2-hover' to={'/demo'}>
      <p className="py-0 mb-0 text-white" style={{fontSize:'14px'}}>@ OPPONENT</p>
     </Link>
      <p className="py-0 mb-0" style={{fontSize:'11px'}}><i style={{fontSize:'11px'}}>Lorem ipsum dolor sit, amet to the consectetur adipisicing elit.</i></p>
      <p className="py-0 mb-0 w3-text-grey" style={{fontSize:'11px'}}><i>Mar. 4, 2025</i></p> 
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


<div className="row d-flex justify-content-between align-items-center">
  <div className="col-12 col-sm-5">
      <img src={MLB} alt="small" className=' img-fluid shadow-lg w3-grayscale-max' />
    </div>
    <div className="col-12 col-sm-7 text-start">
    <Link className=' link-light link-offset-2-hover' to={'/demo'}>
      <p className="py-0 mb-0 text-white" style={{fontSize:'14px'}}>VS. OPPONENT</p>
     </Link>
      <p className="py-0 mb-0" style={{fontSize:'11px'}}><i style={{fontSize:'11px'}}>Lorem ipsum dolor sit, amet to the consectetur adipisicing elit.</i></p>
      <p className="py-0 mb-0" style={{fontSize:'12px'}}><i>April 9th, 2025</i></p>
    </div>
  </div>
  </div>
</TabPanel>
{/**IN-GAME PANEL END */}
    </Box>
            </div>
        </div>
   
    </div>
    </div>
    
)}
</InView>




<InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w3-hide-large w3-text-grey  w3-padding-16 
            ${inView ? "animate-fade-in" : ""}`}
              id="Media"
            >
        <div className="container">
        <div className="row d-flex justify-content-center align-items-center w3-padding-large">
            <div className="col-sm-12 col-md-8 col-lg-8">
              
      <video
        src={ClaySmall}
        controls
        className=" border border-dark"
        style={{ width: "100%" }}
      ></video>
              </div>
  <div className="col-sm-12 col-md-4 col-lg-4">
    <Box
      className=" w3-text-white"
      style={{backgroundColor:'#222'}}
      sx={{
        position: "relative",
        minHeight: 200,
      }}
    >
<AppBar position="static" className=" w3-text-white bg-dark" >
  <style>
    {`
    @media (max-width: 600px) {
  .MuiTabs-root {
    overflow-x: auto;
  }
}
    `}
  </style>
  <Tabs
    value={value}
    onChange={handleChange}
    indicatorColor="primary"
    aria-label="action tabs example"
    variant="scrollable"
    scrollButtons="auto"
    sx={{
      ".MuiTabs-flexContainer": {
        justifyContent: "flex-center", // Align tabs to the left
      },
      ".MuiTab-root": {
        color: "white",
        fontWeight: "light",
      },
      ".Mui-selected": {
        color: "primary.main",
        fontWeight: "bold",
      },
    }}
  >
    <Tab label="Hitting" {...a11yProps(0)} />
    <Tab label="BullPens" {...a11yProps(1)} />
    <Tab label="In-Game" {...a11yProps(2)} />
  </Tabs>
</AppBar>


 {/**CAGEWORK START */}
      <TabPanel value={value} index={0} dir={theme.direction}>
      <div className="">
      <div className="row d-flex align-items-center">
  <div className="col-6 col-sm-5 col-md-4">
    <img src={Offense} alt="small" className="img-fluid shadow w3-grayscale-max" />
  </div>
  <div className="col-6 col-sm-7 col-md-8 text-start">
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
  <div className="col-6 col-sm-5 col-md-4">
      <img src={Defense} alt="small" className=' img-fluid shadow  w3-grayscale-max' />
    </div>
   <div className="col-6 col-sm-7 col-md-8 text-start">
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
  <div className="col-6 col-sm-5 col-md-4">
      <img src={MLB} alt="small" className=' img-fluid shadow-lg w3-grayscale-max' />
    </div>
   <div className="col-6 col-sm-7 col-md-8 text-start">
      <p className="py-0 mb-0 text-white" style={{ fontSize: "12px" }}>LIVE (IN-GAME)</p>
      <p className="py-0 mb-0" style={{fontSize:'12px'}}><i>January 1st, 2025</i></p>
    </div>
  </div>
  </div>
</TabPanel>
{/**CAGEWORK END */}  

 {/**start BULLPENS */}
      <TabPanel value={value} index={1} dir={theme.direction}>
      <div className="">
  <div className="row d-flex justify-content-between  align-items-center">
  <div className="col-6 col-sm-5 col-md-4">
      <img src={Offense} alt="small" className=' img-fluid shadow  w3-grayscale-max' />
    </div>
   <div className="col-6 col-sm-7 col-md-8 text-start">
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
  <div className="col-6 col-sm-5 col-md-4">
      <img src={Defense} alt="small" className=' img-fluid shadow  w3-grayscale-max' />
    </div>
   <div className="col-6 col-sm-7 col-md-8 text-start">
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
  <div className="col-6 col-sm-5 col-md-4">
      <img src={MLB} alt="small" className=' img-fluid shadow-lg w3-grayscale-max' />
    </div>
   <div className="col-6 col-sm-7 col-md-8 text-start">
    <p className="py-0 mb-0 text-white" style={{ fontSize: "12px" }}>BULLPEN <i style={{fontSize:'12px'}} className=' text-secondary fw-light'>JOSH PITCHER</i></p>
      <p className="py-0 mb-0" style={{fontSize:'12px'}}><i>April 21st, 2025</i></p>
    </div>
  </div>
  </div>
      </TabPanel>
 {/**END BULLPENS */}

      {/**start in-game */}
      <TabPanel value={value} index={2} dir={theme.direction}>
      <div className="">
  <div className="row d-flex justify-content-between  align-items-center">
  <div className="col-6 col-sm-5 col-md-4">
      <img src={Offense} alt="small" className=' img-fluid shadow  w3-grayscale-max' />
    </div>
   <div className="col-6 col-sm-7 col-md-8 text-start">
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
  <div className="col-6 col-sm-5 col-md-4">
      <img src={Defense} alt="small" className=' img-fluid shadow  w3-grayscale-max' />
    </div>
   <div className="col-6 col-sm-7 col-md-8 text-start">
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
  <div className="col-6 col-sm-5 col-md-4">
      <img src={MLB} alt="small" className=' img-fluid shadow-lg w3-grayscale-max' />
    </div>
   <div className="col-6 col-sm-7 col-md-8 text-start">
      <p className="py-0 mb-0 text-white" style={{ fontSize: "12px" }}>VS. OPPONENT</p>
      <p className="py-0 mb-0" style={{fontSize:'12px'}}><i>April 9th, 2025</i></p>
    </div>
  </div>
  </div>
</TabPanel>
 {/**END in-game */}



    {/**start reels
    <TabPanel value={value} index={3} dir={theme.direction}>
  <div className="row d-flex justify-content-between  align-items-center">
  <div className="col-6 col-sm-5 col-md-4">
      <img src={Offense} alt="small" className=' img-fluid shadow  w3-grayscale-max' />
    </div>
   <div className="col-6 col-sm-7 col-md-8 text-start">
    <p className="py-0 mb-0 text-white" style={{ fontSize: "12px" }}>VS. OPPONENT</p>
      <p className="py-0 mb-0" style={{fontSize:'12px'}}><i>January 1st, 2025</i></p>
    </div>
 

  <hr
  className="d-block bg-secondary rounded justify-content-start align-items-center my-3"
  style={{
    paddingTop: '.5px',
    paddingBottom: '.5px',
    boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, 0.5)',
  }}
>
</hr>

<div className="row d-flex justify-content-between  align-items-center">
  <div className="col-6 col-sm-5 col-md-4">
      <img src={Offense} alt="small" className=' img-fluid shadow  w3-grayscale-max' />
    </div>
   <div className="col-6 col-sm-7 col-md-8 text-start">
    <p className="py-0 mb-0 text-white" style={{ fontSize: "12px" }}>VS. OPPONENT</p>
      <p className="py-0 mb-0" style={{fontSize:'12px'}}><i>January 1st, 2025</i></p>
    </div>
  </div>
 

  <hr
  className="d-block bg-secondary rounded justify-content-start align-items-center my-3"
  style={{
    paddingTop: '.5px',
    paddingBottom: '.5px',
    boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, 0.5)', 
  }}
>
</hr>



<div className="row d-flex justify-content-between  align-items-center">
  <div className="col-6 col-sm-5 col-md-4">
      <img src={Offense} alt="small" className=' img-fluid shadow  w3-grayscale-max' />
    </div>
   <div className="col-6 col-sm-7 col-md-8 text-start">
    <p className="py-0 mb-0 text-white" style={{ fontSize: "12px" }}>VS. OPPONENT</p>
      <p className="py-0 mb-0" style={{fontSize:'12px'}}><i>January 1st, 2025</i></p>
    </div>
  </div>
 
  <hr
  className="d-block bg-secondary rounded justify-content-start align-items-center my-3"
  style={{
    paddingTop: '.5px',
    paddingBottom: '.5px',
    boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, 0.5)', 
  }}
>
</hr>


<div className="row d-flex justify-content-between align-items-center ">
  <div className="col-6 col-sm-5 col-md-4">
      <img src={Defense} alt="small" className=' img-fluid shadow  w3-grayscale-max' />
    </div>
   <div className="col-6 col-sm-7 col-md-8 text-start">
      <p className="py-0 mb-0 text-white" style={{ fontSize: "12px" }}>@ OPPONENT</p>
      <p className="py-0 mb-0" style={{fontSize:'12px'}}><i>March 4th, 2025</i></p>
    </div>
  </div>

  <hr
  className="d-block bg-secondary rounded justify-content-start align-items-center my-3"
  style={{
    paddingTop: '.5px',
    paddingBottom: '.5px',
    boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, 0.5)', 
  }}
>
</hr>


    <div className="row d-flex align-items-center">
  <div className="col-6 col-sm-5 col-md-4">
      <img src={MLB} alt="small" className=' img-fluid shadow-lg w3-grayscale-max' />
    </div>
   <div className="col-6 col-sm-7 col-md-8 text-start">
      <p className="py-0 mb-0 text-white" style={{ fontSize: "12px" }}>VS. OPPONENT</p>
      <p className="py-0 mb-0" style={{fontSize:'12px'}}><i>April 9th, 2025</i></p>
    </div>
  </div>

  <hr
  className="d-block bg-secondary rounded justify-content-start align-items-center my-3"
  style={{
    paddingTop: '.5px',
    paddingBottom: '.5px',
    boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, 0.5)', 
  }}
>
</hr>


    <div className="row d-flex align-items-center">
  <div className="col-6 col-sm-5 col-md-4">
      <img src={MLB} alt="small" className=' img-fluid shadow-lg w3-grayscale-max' />
    </div>
   <div className="col-6 col-sm-7 col-md-8 text-start">
      <p className="py-0 mb-0 text-white" style={{ fontSize: "12px" }}>VS. OPPONENT</p>
      <p className="py-0 mb-0" style={{fontSize:'12px'}}><i>April 9th, 2025</i></p>
    </div>
  </div>
  </div>
</TabPanel>
 */}
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
