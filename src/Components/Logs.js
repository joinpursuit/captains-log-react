import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import axios from 'axios';

function Logs() {

  const [logs, setLogs] = useState([]);
  const API = process.env.REACT_APP_API_URL

  useEffect(() => {
    axios.get(`${API}/logs`).then((res) => {
      setLogs(res.data);
    });
  }, []);

  return (
    <div>
      {logs.map((log, index) => {
        let url = `/logs/${index}`
        return (
          <>
          <Link to={url} log={log}>
            <p>{log.title} </p>
          </Link>
          </>
        )
      })}
    </div>
  )
}

export default Logs

//make API call here rather than in app