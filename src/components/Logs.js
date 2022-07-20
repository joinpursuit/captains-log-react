import { useState, useEffect } from 'react';
import Log from './Log';
import axios from 'axios';


const API = process.env.REACT_APP_API_URL;

function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios.get(`${API}/logs`).then((res) => {
      setLogs(res.data);
    });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mistakes</th>
            <th>Captain Name</th>
            <th>See this Log</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => {
            return <Log key={index} log={log} index={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Logs;
