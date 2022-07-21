import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function LogNewForm() {
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: "",
  });

  const navigate = useNavigate();

  const addLog = () => {
  axios.post(`${API}/logs`, log)
  .then((res)=>{navigate(`/logs`)})
  .catch((err)=>{console.error(err)})
  }

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addLog();
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label>Captain's Name</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of the Captain"
          required
        />
        <br></br>
        <label>Title:</label>
        <input
          id="title"
          type="text"
          required
          value={log.title}
          placeholder="Enter Title"
          onChange={handleTextChange}
        />
        <br></br>
        <label>Post:</label>
        <input
          id="post"
          type="text"
          name="post"
          value={log.post}
          placeholder="Post Here"
          onChange={handleTextChange}
        />
        <br></br>
        <label>Mistakes Were Made Today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <br></br>
        <label>Days Since Last Crisis:</label>
        <textarea
          id="post"
          name="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder="Days Since Last Crisis"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
