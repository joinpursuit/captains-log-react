import { useState, useEffect } from "react";
import axios from "axios";
import Log from "./Log";

function Logs() {
  const URL = process.env.REACT_APP_API_URL;
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/logs`)
      .then((response) => {
        setLogs(response.data);
      })
      .catch((e) => console.log("catch", e));
  }, []);

  return (
    <div className="logs">
      <table>
        <tr>
          <th>Mistakes</th>
          <th>Captain's Name</th>
          <th>See the Log</th>
        </tr>
        {logs.map((log, index) => {
          return <Log key={index} log={log} index={index} />;
        })}
      </table>
    </div>
  );
}

export default Logs;
