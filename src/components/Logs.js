import axios from 'axios';
import { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_API_URL_FROM_OUR_BACKEND;
console.log(API_URL);

function Logs() {
    const [logs, setLogs]  = useState([]);

    useEffect(()=>{
    axios.get(`${API_URL}/logs`)
        .then((res)=>{
        setLogs(res.data);
        console.log("horse", res.data);
        }).catch((err)=>{
        throw err;
        })
    })

    return (
      <div className="Logs">
        <h2>Welcome</h2>
        <h3>To the greatest captain's log app! This is Logs.js</h3>
      </div>
    );
  }
  
  export default Logs;
  