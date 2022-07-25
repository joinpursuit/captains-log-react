import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Log() {

  const API = process.env.REACT_APP_API_URL
  const [log, setLog] = useState({});
  const navigate = useNavigate();
  let { index } = useParams();

  useEffect(() => {
    axios.get(`${API}/logs/${index}`).then((res) => setLog(res.data));
  }, [index, API]);

  const handleBackButton = () => {
    navigate("/logs")
  }

  const handleDeleteButton = () => {
    axios.delete(`${API}/logs/${index}`)
    .then(res => navigate("/logs"))
  }
  return <div>
    <p>Captain name: {log.captainName}</p>
    <p>Title: {log.title}</p>
    <p>Post: {log.post}</p>
    <p>Mistakes Were Made Today: <input type="checkbox" checked={log.mistakesWereMadeToday}></input></p>
    <p>Days Since Last Crisis: {log.daysSinceLastCrisis}</p>
    <button onClick={handleBackButton}>Back</button>
    <button onClick={handleDeleteButton}>Delete</button>
  </div>;
}

export default Log;
