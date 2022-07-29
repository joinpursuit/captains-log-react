import { useState, useEffect } from "react";
import Log from "./Log";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const Logs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios.get(`${API}/logs`)
    .then((res) => setLogs(res.data))
    .catch((err) => console.error(err));
  }, []);

  return (
    <div className="Logs">
        {logs.map((log, index) => {
              return <Log key={index} log={log} index={index} />;
            })}
    </div>
  );
};

export default Logs;
