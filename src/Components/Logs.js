// INDEX: GET /logs
// Displays a list of log.title that are clickable to take the user to /logs/:index.

import axios from "axios";
import { useEffect, useState } from "react";
import Log from "./Log";

const API = process.env.REACT_APP_API_URL;

function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((res) => {
        console.log(res.data);
        setLogs(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  let AllLogs = logs.map((log, index) => {
    return <Log key={index} log={log} index={index} />;
  });

  return (
    <div className="Logs">
      <h2>see this log</h2>
      <section>
        <table>
          <thead>
            <tr>
              <th>Mistakes</th>
              <th>Captain Name</th>
              <th>See this log</th>
            </tr>
          </thead>
          <tbody>{AllLogs}</tbody>
        </table>
      </section>
    </div>
  );
}

export default Logs;
