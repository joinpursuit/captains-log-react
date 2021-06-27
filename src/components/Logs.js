import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import  { apiURL } from "../util/apiURL";

const API_BASE = apiURL();

export default function Logs() {
    let [ logs, setLogs ] = useState([]);
  
    useEffect(() => {
      axios.get(`${API_BASE}/logs`)
      .then(res => setLogs(res.data))
    }, []);

    return (
        <div>
            <h3>Captain's Log Index</h3>
            <ul>
                {logs.map((log, i) => (
                    <li key={i}>
                        <Link to={`/logs/${i}`}>{log.title}</Link>
                    </li>)
                )}
            </ul>
        </div>
    )
}
