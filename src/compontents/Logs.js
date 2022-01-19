import { useState, useEffect } from "react";
import Log from "./Log";

const API = process.env.REACT_APP_API_URL;

export default function Logs() {
  const [logs, setLogs] = useState([]);

  // ASYNC
  useEffect(async () => {
    try {
      let response = await fetch(`${API}/logs`);
      let apiData = await response.json();
      setLogs(apiData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="Bookmarks">
      <section>
        <table>
          <thead>
            <tr>
              <th>Mistakes</th>
              <th>Captain's Name</th>
              <th>See this Log</th>
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
