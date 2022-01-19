import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Log from "./Log";

// import "./Logs.css";

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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Mistakes</th>
              <th>Captain's Name</th>
              <th>See this log</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, i) => (
              <Log key={"log" + i} id={i} log={log} />
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
};

export default Logs;
