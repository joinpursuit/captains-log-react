// - Displays the details of each log
//   - captainName
//   - title
//   - post
//   - mistakesWereMadeToday
//   - daysSinceLastCrisis
// - Displays two buttons
//   - <kbd>back</kbd>, takes the user back to the `/logs` index view
//   - <kbd>delete</kbd>, deletes the log and takes the user back to the `/logs` index view

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function LogShow() {
  const navigate = useNavigate();
  const { index } = useParams();
  const [captainLog, setCaptainLog] = useState({});
  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((log) => {
        setCaptainLog(log.data);
        console.log(log.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = () => {
    axios.delete(`${API}/logs/${index}`).then((response) => navigate("/logs"));
  };

  return (
    <div>
      <p>{captainLog.captainName}</p>
      <p>{captainLog.title}</p>
      <p>{captainLog.post}</p>
      <p>{captainLog.mistakesWereMadeToday}</p>
      <p>{captainLog.daysSinceLastCrisis}</p>

      <button onClick={() => navigate("/logs")}>Back</button>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
