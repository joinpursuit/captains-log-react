import axios from 'axios';
import { useState, useEffect } from 'react';
import Log from './Log';

const API_URL = process.env.REACT_APP_API_URL_FROM_OUR_BACKEND;
console.log(API_URL);

function Logs() {
    const [logs, setLogs]  = useState([]);

    useEffect(()=>{
    axios.get(`${API_URL}/logs`)
        .then((res)=>{
          setLogs(res.data);
        }).catch((err)=>{
          throw err;
        })
    })

    return (
      <div className="Logs">
      <h1>Logs Index</h1>
      <section>
        <table>
          <thead>
            <tr>
              <th>Mistakes</th>
              <th>Captain Name</th>
              <th>See this log</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => {
              return <Log key={index} log={log} index={index} />;
            })}
          </tbody>
        </table>
      </section>
      </div>
    );
  }
  
  export default Logs;
  