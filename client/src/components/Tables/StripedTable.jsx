import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faVideoCamera,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import Table from "react-bootstrap/Table";

const columnStyles = [
  { width: "10%" }, // Date
  { width: "15%" }, // Event
  { width: "15%" }, // Team
  { width: "23%" }, // Location
  { width: "9%", textAlign: "center" }, // Map
  { width: "9%", textAlign: "center" }, // Video
  { width: "9%", textAlign: "center" }, // Calendar
];

const tableEntries = [
  {
    id: 1,
    date: "9/10 - 9/12/24",
    event: "Tournament Name ",
    team: "Summer Team",
    location: "https://lakepointsports.com/campus-map/#baseball-village",
    link1: "https://www.awre.tv/channel",
    link2: "https://lakepointsports.com/calendar/",
    link3: "https://tournaments.prepbaseballreport.com/past-events",
  },
  {
    id: 2,
    date: "10/10 - 10/13/24",
    event: "Tournament Name",
    team: "Summer Team",
    location: "https://lakepointsports.com/campus-map/#baseball-village",
    link1: "https://www.awre.tv/channel",
    link2: "https://lakepointsports.com/calendar/",
    link3: "https://tournaments.prepbaseballreport.com/past-events",
  },

  {
    id: 3,
    date: "3/13 - 3/20/24",
    event: "Showcase Name",
    team: "High School",
    location: "https://lakepointsports.com/campus-map/#baseball-village",
    link1: "https://www.awre.tv/channel",
    link2: "https://lakepointsports.com/calendar/",
    link3: "https://tournaments.prepbaseballreport.com/past-events",
  },

  {
    id: 4,
    date: "4/11 - 4/14/24",
    event: "Showcase Name",
    team: "High School",
    location: "https://lakepointsports.com/campus-map/#baseball-village",
    link1: "https://www.awre.tv/channel",
    link2: "https://lakepointsports.com/calendar/",
    link3: "https://tournaments.prepbaseballreport.com/past-events",
  },

  {
    id: 5,
    date: "5/10 - 5/12/24",
    event: "Tournament Name",
    team: "USA Baseball",
    location: "https://lakepointsports.com/campus-map/#baseball-village",
    link1: "https://www.awre.tv/channel",
    link2: "https://lakepointsports.com/calendar/",
    link3: "https://tournaments.prepbaseballreport.com/past-events",
  },

  {
    id: 6,
    date: "6/10 - 6/13/24",
    event: "Tournament Name",
    team: "USA Baseball",
    location: "https://lakepointsports.com/campus-map/#baseball-village",
    link1: "https://www.awre.tv/channel",
    link2: "https://lakepointsports.com/calendar/",
    link3: "https://tournaments.prepbaseballreport.com/past-events",
  },
  {
    id: 7,
    date: "7/14 - 7/17/24",
    event: "Showcase Name",
    team: "Team Maryland",
    location: "https://lakepointsports.com/campus-map/#baseball-village",
    link1: "https://www.awre.tv/channel",
    link2: "https://lakepointsports.com/calendar/",
    link3: "https://tournaments.prepbaseballreport.com/past-events",
  },

  {
    id: 8,
    date: "8/16 - 8/18/24",
    event: "Showcase Name",
    team: "Team Maryland",
    location: "https://lakepointsports.com/campus-map/#baseball-village",
    link1: "https://www.awre.tv/channel",
    link2: "https://lakepointsports.com/calendar/",
    link3: "https://tournaments.prepbaseballreport.com/past-events",
  },
];

const ExternalLinksTable = () => {
  return (
    <div>
      <h1 className="text-white">Player Schedule</h1>
      <div className=" w3-padding-24">
      <h5 className=" w3-text-white">FALL SCHEDULE</h5>
        <Table
          striped
          bordered
          hover
          variant="dark"
          style={{
            border: "2px solid #dee2e6",
            borderRadius: "1rem",
            boxShadow: "0 0 10px rgba(250, 250, 250, 0.5)",
          }}
        >
          <thead
            style={{
              border: "2px solid #dee2e6",
              fontWeight: "bold",
            }}
          >
            <tr className="small"
            style={{fontWeight:'700'}}>
              <th style={columnStyles[0]}>DATE</th>
              <th style={columnStyles[1]}>EVENT</th>
              <th style={columnStyles[2]}>TEAM</th>
              <th style={columnStyles[3]}>ADDRESS</th>
              <th style={columnStyles[4]}>WATCH LIVE</th>
              <th style={columnStyles[5]}>GAMETIME</th>
              <th style={columnStyles[6]}>RESULTS</th>
            </tr>
          </thead>
          <tbody>
            {tableEntries.map((entry) => (
              <tr key={entry.id} className=" small">
                <td>{entry.date}</td>
                <td>{entry.event}</td>
                <td>{entry.team}</td>

                <td style={columnStyles[3]}>
                  <a
                    href={entry.location}
                    target="_blank"
                    className=" link-light link-opacity-50-hover"
                    rel="noopener noreferrer"
                  >
                    1234 Anywhere St. City, ST. 54321
                  </a>
                </td>
                <td style={columnStyles[4]}>
                  <a
                    href={entry.link1}
                    target="_blank"
                    className=" link-light link-opacity-50-hover"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faVideoCamera} />
                  </a>
                </td>
                <td style={columnStyles[5]}>
                  <a
                    href={entry.link2}
                    target="_blank"
                    className=" link-light link-opacity-50-hover"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faCalendar} />
                  </a>
                </td>
                <td style={columnStyles[6]}>
                  <a
                    href={entry.link3}
                    target="_blank"
                    className=" link-light link-opacity-50-hover"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faTrophy} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className=" w3-padding-24">
        <h5 className=" w3-text-white">HIGH SCHOOL SCHEDULE</h5>
        <Table
          striped
          bordered
          hover
          variant="dark"
          style={{
            border: "2px solid #dee2e6",
            borderRadius: "1rem",
            boxShadow: "0 0 10px rgba(250, 250, 250, 0.5)",
          }}
        >
          <thead
            style={{
              border: "2px solid #dee2e6",
              fontWeight: "bold",
            }}
          >
            <tr className="small"
            style={{fontWeight:'700'}}>
              <th style={columnStyles[0]}>DATE</th>
              <th style={columnStyles[1]}>EVENT</th>
              <th style={columnStyles[2]}>TEAM</th>
              <th style={columnStyles[3]}>ADDRESS</th>
              <th style={columnStyles[4]}>WATCH LIVE</th>
              <th style={columnStyles[5]}>GAMETIME</th>
              <th style={columnStyles[6]}>RESULTS</th>
            </tr>
          </thead>
          <tbody>
            {tableEntries.map((entry) => (
              <tr key={entry.id} className=" small">
                <td>{entry.date}</td>
                <td>{entry.event}</td>
                <td>{entry.team}</td>

                <td style={columnStyles[3]}>
                  <a
                    href={entry.location}
                    target="_blank"
                    className=" link-light link-opacity-50-hover"
                    rel="noopener noreferrer"
                  >
                    1234 Anywhere St. City, ST. 54321
                  </a>
                </td>
                <td style={columnStyles[4]}>
                  <a
                    href={entry.link1}
                    target="_blank"
                    className=" link-light link-opacity-50-hover"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faVideoCamera} />
                  </a>
                </td>
                <td style={columnStyles[5]}>
                  <a
                    href={entry.link2}
                    target="_blank"
                    className=" link-light link-opacity-50-hover"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faCalendar} />
                  </a>
                </td>
                <td style={columnStyles[6]}>
                  <a
                    href={entry.link3}
                    target="_blank"
                    className=" link-light link-opacity-50-hover"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faTrophy} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className=" w3-padding-24">
      <h5 className=" w3-text-white">SUMMER SCHEDULE</h5>
        <Table
          striped
          bordered
          hover
          variant="dark"
          style={{
            border: "2px solid #dee2e6",
            borderRadius: "1rem",
            boxShadow: "0 0 10px rgba(250, 250, 250, 0.5)",
          }}
        >
          <thead
            style={{
              border: "2px solid #dee2e6",
              fontWeight: "bold",
            }}
          >
            <tr className="small"
            style={{fontWeight:'700'}}>
              <th style={columnStyles[0]}>DATE</th>
              <th style={columnStyles[1]}>EVENT</th>
              <th style={columnStyles[2]}>TEAM</th>
              <th style={columnStyles[3]}>ADDRESS</th>
              <th style={columnStyles[4]}>WATCH LIVE</th>
              <th style={columnStyles[5]}>GAMETIME</th>
              <th style={columnStyles[6]}>RESULTS</th>
            </tr>
          </thead>
          <tbody>
            {tableEntries.map((entry) => (
              <tr key={entry.id} className=" small">
                <td>{entry.date}</td>
                <td>{entry.event}</td>
                <td>{entry.team}</td>

                <td style={columnStyles[3]}>
                  <a
                    href={entry.location}
                    target="_blank"
                    className=" link-light link-opacity-50-hover"
                    rel="noopener noreferrer"
                  >
                    1234 Anywhere St. City, ST. 54321
                  </a>
                </td>
                <td style={columnStyles[4]}>
                  <a
                    href={entry.link1}
                    target="_blank"
                    className=" link-light link-opacity-50-hover"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faVideoCamera} />
                  </a>
                </td>
                <td style={columnStyles[5]}>
                  <a
                    href={entry.link2}
                    target="_blank"
                    className=" link-light link-opacity-50-hover"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faCalendar} />
                  </a>
                </td>
                <td style={columnStyles[6]}>
                  <a
                    href={entry.link3}
                    target="_blank"
                    className=" link-light link-opacity-50-hover"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faTrophy} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ExternalLinksTable;

/**
 * import React from 'react';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocation, faVideoCamera, faCalendar } from '@fortawesome/free-solid-svg-icons';

const tableEntries = [ 
  { id: 1, date:'9/9/24', event: 'Tournament Name', team: 'Summer Team',   location: 'https://lakepointsports.com/campus-map/#baseball-village', 
    link1: 'https://www.awre.tv/channel', 
    link2: 'https://lakepointsports.com/calendar/',
    link3: 'https://tournaments.prepbaseballreport.com/past-events'
  },  
  { id: 2, date:'10/10/24', event: 'Tournament Name', team: 'Summer Team',   location: 'https://lakepointsports.com/campus-map/#baseball-village', 
    link1: 'https://www.awre.tv/channel', 
    link2: 'https://lakepointsports.com/calendar/',
    link3: 'https://tournaments.prepbaseballreport.com/past-events'
  }
];

const StripedTable = () => {
return (
  <table className="table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Event</th>
        <th>Team</th>
        <th>Location</th>
        <th>Map</th>
        <th>Video</th>
        <th>Calendar</th>
      </tr>
    </thead>
    <tbody>
      {tableEntries.map((entry) => (
        <tr key={entry.id}>
          <td>{entry.date}</td>
          <td>{entry.event}</td>
          <td>{entry.team}</td>
          <td>{entry.location}</td>
          <td>
            <a href={entry.link1} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faMapLocation} />
            </a>
          </td>
          <td>
            <a href={entry.link2} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faVideoCamera} />
            </a>
          </td>
          <td>
            <a href={entry.link3} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faCalendar} />
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  );
}

export default StripedTable;
 */
