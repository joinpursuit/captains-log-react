import { useState, useEffect } from "react";
import FormatLog from "./FormatLog.js";
import axios from "axios"

function Logs() {
    const [logs, setLogs] = useState([]);
    const URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
      axios.get(URL+"/logs")
        .then((response) => setLogs(response.data))
    }, [URL])
  
    return (
      <div className="Logs">
        <section>
          <table>
            <thead>
            </thead>
            <tbody>
              {logs.map((log, index) => {
                return <FormatLog key={index} log={log} index={index} />;
              })}
            </tbody>
          </table>
        </section>
      </div>
    );
  }
  
  export default Logs;