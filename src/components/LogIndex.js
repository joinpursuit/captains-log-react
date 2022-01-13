import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

function LogIndex() {
  const params = useParams();
  const [log, setLog] = useState([]);
  const URL = `http://localhost:3003/logs/${params.index}`;
  useEffect(() => {
    axios.get(URL).then((response) => {
      setLog(response.data);
    });
  }, []);
  console.log(log);
  return (
    <div>
      <h1>Show</h1>
      <container>
        <h2>
          {log.title} - By {log.captainName}
        </h2>
        <h3>{log.post}</h3>
        <p>
          <bold>Days since last crisis: </bold>
          {log.daysSinceLastCrisis}
        </p>
      </container>
      <button></button>
      <button></button>
      <button></button>
    </div>
  );
}

export default LogIndex;
