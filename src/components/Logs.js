import { useState, useEffect } from "react";
import Log from "./Log.js";
import axios from "axios";
// ^^ this is our new package for making API calls
const API = process.env.REACT_APP_API_URL;

export default function Logs() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        axios.get(`${API}/logs`)
          .then((response) => {setLogs(response.data) })
          .catch((error) => { console.log(error) })
      },[])

      // console.log(API);

  return (
    <div className="Logs">
    <section>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Take me there</th>
            <th>See this log</th>
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
  )
}
