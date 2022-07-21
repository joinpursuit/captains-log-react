import axios from "axios";
import { useState, useEffect } from "react";
import Log from "./Log";

const API = process.env.REACT_APP_API_URL;

function Logs() {
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    axios.get(`${API}/logs`).then((res) => {
      setLogs(res.data);
    });
  }, []);
  return (
    <div className="Log">
      <section>
        <table>
          <tr>
            <th>Captain Name</th>
            <th>Entry</th>
          </tr>
          <tbody>
            {logs.map((log, idx) => {
              return <Log key={idx} log={log} idx={idx} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Logs;
