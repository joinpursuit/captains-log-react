import { useState, useEffect } from "react";
import Log from "./Log";

import axios from "axios";
const API = process.env.REACT_APP_API_URL;
console.log(API,"API")

function Logs() {
  const [logs, setLogs] = useState([]);
console.log(logs)
  useEffect(() => {
    axios.get(`http://localhost:3003/logs`).then((res) => {
      console.log(setLogs(res.data));
    });
  }, []);

  return (
    <div className="Logs">
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