import { useEffect, useState } from "react";
import axios from "axios";

import Log from "./Log";
import "./Logs.scss";

const API = process.env.REACT_APP_API_URL;

const Logs = () => {
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
  }, []); // eslint-disable-line

  return (
    <section className="logsSection">
      <table>
        <thead>
          <tr className="logTableHead">
            <th>Captains Name</th>
            <th>Captains Logs</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => {
            return <Log key={index} log={log} index={index} />;
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Logs;
