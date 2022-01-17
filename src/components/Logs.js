import { useState, useEffect } from "react";
import axios from "axios";
import Log from "./Log";

function Logs() {
  const URL = process.env.REACT_APP_API_URL;
  const [logs, setLogs] = useState([]);

  console.log("This is a test");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${URL}/logs`);
      setLogs(response.data);
      console.log(response);
    };
    fetchData();
  }, []);

  return (
    <div className="Logs">
      <section>
        <table>
          <thead>
            <tr>
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