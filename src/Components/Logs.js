import axios from "axios";
import { useState, useEffect } from "react";
import Log from "./Log";
const API = process.env.REACT_APP_API_URL;
console.log("dis da stuff", API);

function Logs() {
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((response) => setLogs(response.data))
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div className="Logs">
      <h1>SANITY CHECK</h1>
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
