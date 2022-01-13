import { useState, useEffect } from "react";
import axios from "axios";
import Log from "./Log";
function Logs() {
  const [logs, setLogs] = useState([]);
  const URL = `http://localhost:3003/logs`;

  useEffect(() => {
    axios.get(URL).then((response) => {
      console.log(response.data);
      setLogs(response.data);
    });
  }, []);
  console.log(logs);
  return (
    <div className="Logs">
      <table>
        <tr>
          <th>Mistakes</th>
          <th>Captain Name</th>
          <th>See this log</th>
        </tr>
        {logs.map((log, index) => {
          return <Log key={index} log={log} index={index} />;
        })}
      </table>
    </div>
  );
}

export default Logs;
