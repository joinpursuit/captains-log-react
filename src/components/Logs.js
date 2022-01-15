import { useState, useEffect } from "react";
import CaptainsLog from "./CaptainsLog";
import axios from "axios";

function Logs() {
  const [logs, setLogs] = useState([]);
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const result = async () => {
      // console.log("we hit useEffect!");
      const response = await axios.get(`${URL}/logs`);
      setLogs(response.data);
      console.log(response);
      console.log(response.data);
    };
    result();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="CaptainsLog">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>See this Log</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, i) => {
              return <CaptainsLog key={i} log={log} index={i} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Logs;
