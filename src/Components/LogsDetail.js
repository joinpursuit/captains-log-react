import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
const API = process.env.REACT_APP_API_URL;

function LogsDetail() {
  const { index } = useParams();
  const [log, setLog] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => setLog(response.data))
      .catch((error) => console.error("catch", error));
  }, [index]);

  return (
    <section>
      <div>captainName : {log.captainName}</div>
      <div>title : {log.title}</div>
      <div>post : {log.post}</div>
      <div>
        mistakesWereMadeToday : {log.mistakesWereMadeToday ? "true" : "false"}
      </div>
      <div>daysSinceLastCrisis : {log.daysSinceLastCrisis}</div>
      <button>Back</button>
      <button>Delete</button>
    </section>
  );
}

export default LogsDetail;
