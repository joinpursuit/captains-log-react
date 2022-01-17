import { useState, useEffect } from "react";
import axios from "axios";

function LogsTitles() {
  const [Logs, setLogs] = useState([]);
  const URL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    axios
      .get(`${URL}/logs`)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setLogs(response.data);
      })
      .catch((error) => console.log("catch", error));
  }, []);

  const result =
    Logs.length &&
    Logs.map((log, i) => (
      <tr key={i}>
        <td className="emoji">💥</td>
        <td className="name">{log.captainName}</td>
        <td className="Log">
          <a href={`/logs/${i}/`}>{log.title}</a>
        </td>
      </tr>
    ));
  return (
    <div className="LogsNames">
      <table>
        <tr>
          <th className="mistakes">Mistakes</th>
          <th className="Captain">Captain Name</th>
          <th>See This Log</th>
        </tr>
        {result}
      </table>
    </div>
  );
}
export default LogsTitles;
