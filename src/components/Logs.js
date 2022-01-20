import { useState, useEffect } from "react";
import axios from "axios";
import LogsDisplay from "./LogsDisplay";

function Logs() {
  const [logs, setLogs] = useState([]);
  //   localhost:2500
  const URL = process.env.REACT_APP_API_URL;

  //   use fetch to get data from backend
  useEffect(() => {
    const fetchData = async () => {
      console.log("we are hitting the useEffect!");
      const res = await axios.get(`${URL}/logs`);
      setLogs(res.data);
      console.log(res);
    };
    fetchData();
  }, []);

  return (
    <div>
      {logs.map((log, index) => {
        return <LogsDisplay key={index} logInfo={log} index={index} />;
      })}
    </div>
  );
}

export default Logs;
