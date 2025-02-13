import React from "react";
import TableStriped from "../components/Tables/StripedTable";
import { Link } from "react-router-dom";
import DisplayCards from "../components/Displays/DisplayCards";

const DemoTablesPage = () => {
  return (
    <div className="bg-dark">
      <div className="container text-center w3-padding-48">
        <h1 className="mb-0 text-light" style={{ fontWeight: "900" }}>
          WELCOME TO
        </h1>
        <Link
          to="/"
          className="mt-0 mb-5 text-light text-decoration-none"
          style={{
            fontFamily: "Montserrat, sans-serif",
            textShadow: "1px 1px 1px #181818",   
            letterSpacing: "-2.5px",
            fontSize: "2rem",
          }}
        >
          con-<span className=" w3-text-pink"
              style={{
                fontFamily: "Montserrat, sans-serif",
                textShadow: "1px 1px 1px #181818",   
                letterSpacing: "-1.5px",
                fontSize: "2rem",
              }}>scribe</span>.com
        </Link>
      </div>


      <div className="container w3-padding-48">
        <DisplayCards/>
      </div>
      <div className="container w3-padding-48">
        <TableStriped />
      </div>
    </div>
  );
};

export default DemoTablesPage;
