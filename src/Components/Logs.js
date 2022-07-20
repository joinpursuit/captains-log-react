import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Log from "./Log";
const API = process.env.REACT_APP_API_URL;

function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((response) => setLogs(response.data))
      .catch((error) => console.error("catch", error));
  }, []);

  return (
    <div>
      {logs.map((log, index) => {
        return (
          <div className="Log">
            <Link to={`/logs/${index}`}>
              <Log log={log} index={index} key={index} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Logs;
