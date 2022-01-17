import axios from "axios";
import { useEffect, useState } from "react";
import Log from "./Log";
import "./Logs.css";
const Logs = () => {
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/logs`)
      .then((response) => setLogs(response.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <section className="logs">
      <div className="logs-header">
        <span>Mistakes</span>
        <span>Captain Name</span>
        <span>See this log</span>
      </div>
      {logs.map((log, i) => (
        <Log key={"log" + i} id={i} log={log} />
      ))}
    </section>
  );
};

export default Logs;
