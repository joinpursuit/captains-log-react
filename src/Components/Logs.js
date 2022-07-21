import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Log from "./Log"

const API = process.env.REACT_APP_API_URL;


const Logs = ()  => {

  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((response) => setLogs(response.data))
      .catch((e) => console.error('catch', e));
  }, []);

  return (
 
      <section className='Logs'>
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
  
  );
}

export default Logs;
