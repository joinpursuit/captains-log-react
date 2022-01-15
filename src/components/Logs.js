import { useEffect, useState } from "react";
import Log from "./Log";
import axios from "axios";
import NavBar from "./NavBar";

function Logs() {
  const [logs, setLogs] = useState([]);
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setLogs(response.data);
      })
      .catch((e) => console.log("catch", e));
  }, []);

  return (
    <div>
      <NavBar />
      {logs.map((log, index) => {
        return <Log key={index} log={log} index={index} />;
      })}
    </div>
  );
}

export default Logs;
