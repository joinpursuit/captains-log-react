import axios from "axios";
import { useState, useEffect } from "react";
import Log from "./Log";

const API = process.env.REACT_APP_API_URL;

function Logs() {
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    axios.get(`${API}/logs`).then((res) => {
      console.log(res);
      setLogs(res.data);
    });
  }, []);
  return (
    <div>
      {console.log(API)}
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this bookmark</th>
            </tr>
          </thead>
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
