import { useState, useEffect } from "react";
import axios from "axios";

import Log from "./Log";

const API = process.env.REACT_APP_API_URL;

export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((response) => setLogs(response.data))
      .catch((error) => console.error("catch", error));
  }, []);

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>See this Log</th>
            <th>Captain Name</th>
            <th>Mistakes</th>
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