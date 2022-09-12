import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Log from "./Log";
const API = process.env.REACT_APP_API_URL;

export default function logs() {
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((res) => {
        setLogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="Logs">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>See the logs</th>
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
