import axios from "axios";
import { useState, useEffect } from "react";
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
    <section>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Mistakes</th>
            <th scope="col">Captain Name</th>
            <th scope="col">See this log</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => {
            return <Log log={log} index={index} key={index} />;
          })}
        </tbody>
      </table>
    </section>
  );
}

export default Logs;
