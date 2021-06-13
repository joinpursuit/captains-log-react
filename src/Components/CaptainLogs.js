import React from "react";
// import { Link } from "react-router-dom";
import CaptainLog  from "./CaptainLog"

const CaptainLogs = ({ captainLogs }) => {
  return (
    <div>
      <h1> Captain's Log Index</h1>
      <ul>
        {captainLogs.map((captainLog, index) => {
          return (
            <CaptainLog key={index} captainLog={captainLog} index={index} />
          );
        })}
      </ul>
    </div>
  );
};

export default CaptainLogs;
