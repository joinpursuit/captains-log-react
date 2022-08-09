import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

const LogsIndex = () => {
  const [logsData, setLogsData] = useState([]);

  useEffect(() => {
    debugger
    axios
      .get(`${API}/logs`)
      .then((response) => {
        debugger
        setLogsData(response.data);
        console.log(response.data)  
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section>
     {logsData.map((captainLog, index)=>{
     return (
      <Link to={`/logs/${index}`}>
        <p>{captainLog.title}</p>
      </Link>
     ) 
     })}
    </section>
  );
};
export default LogsIndex;
