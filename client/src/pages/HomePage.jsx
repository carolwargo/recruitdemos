import React from "react";
import DisplayCards from "../components/Displays/DisplayCards";
import TableStriped from "../components/Tables/StripedTable";


const HomePage = () => {
  return (
    <div className="w3-black">
   
     <div className="container w3-padding-48">
        <DisplayCards/>
      </div>
     
      <div className="container w3-padding-48">
        <TableStriped />
      </div>
    

    </div>
  );
};

export default HomePage;
