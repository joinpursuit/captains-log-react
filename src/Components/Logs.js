import { useState, useEffect } from "react";
import axios from "axios";
import CaptainsLog from "./CaptainsLog";

function Logs() {
  const URL = process.env.REACT_APP_API_URL;
  const [logs, setLogs] = useState([]);

  console.log("This is a test");
  useEffect(() => {
    axios.get(`${URL}/logs`).then((response) => {
      console.log(response);
      setLogs(response.data);
    });
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
              return <CaptainsLog key={index} log={log} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Logs;
