import { useState, useEffect } from "react";
import Log from "./Log";
import axios from "axios";

function Logs() {
  const [logs, setLogs] = useState([]);
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/logs`).then((response) => setLogs(response.data));
  }, []);

  return (
    <div className="Logs">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
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
