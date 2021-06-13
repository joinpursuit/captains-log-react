import React from "react";
import { Link } from 'react-router-dom'
import './Log.css'

const Log = ({ log, index }) => {
  
  return (
    <div>
      <Link to={`/logs/${index}`}>{log.title}</Link>
    </div>
  );
};

export default Log;
