import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../util/apiURL";

const API = apiUrl();

export default function Show(props) {
  const [log, setLog] = useState([]);
  let { index } = useParams();
  let history = useHistory();

  let { deleteLog } = props;

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => {
        setLog(response.data);
      })
      .catch((error) => {
        history.push("/not-found");
      });
  }, [index, history]);

  const handleDelete = () => {
    deleteLog(index);
    history.push("/logs");
  };

  return (
    <div>
      <h1>Captain's Log</h1>
      <h2>Show</h2>
      <ul>
        <li>
          {log.title} - By {log.captainName}
        </li>
        <li>{log.post}</li>
        <li>{log.mistakesWereMadeToday + " "}</li>
        <li>Days since last crisis: {log.daysSinceLastCrisis}</li>
      </ul>
      <button onClick={handleDelete}>Delete Log</button>
      <a href="http://localhost:3000/logs">Back</a>
      <a href={`http://localhost:3000/logs/${index}/edit`}>Edit</a>
    </div>
  );
}
