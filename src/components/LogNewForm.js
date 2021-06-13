import React from 'react'
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from 'axios';

import { apiURL } from "../util/apiURL";
const API = apiURL()


const LogNewForm = ({ addLog }) => {
  const { index } = useParams();
  let history = useHistory();
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: true,
    daysSinceLastCrisis: 0,
  });

  const handleInput = (e) => {
      const updatedField = {[e.target.id]: e.target.value }
      const updatedLog = { ...log, ...updatedField};
      setLog(updatedLog);
  };

  const fetchLog = async () => {
    try {
      const res = await axios.get(`${API}/logs/${index}`);
      setLog(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleDaysSinceCrisis = (e) => {
    setLog({ ...log, daysSinceLastCrisis: Number(e.target.value)})
  }

  useEffect(() => {
    fetchLog();
  }, []);

  const handleSubmit = (e) => {
      e.preventDefault();
      addLog(log);
      history.push("/logs");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleInput}
          placeholder="Name of Captain"
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={log.title}
          type="text"
          onChange={handleInput}
          placeholder="Title"
        />
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          value={log.post}
          type="text"
          onChange={handleInput}
          placeholder="Post"
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          id="mistakesWereMadeToday"
          value={log.mistakesWereMadeToday}
          type="checkbox"
          onChange={handleCheckboxChange}
          placeholder="Were mistakes made today"
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          type="number"
          onChange={handleDaysSinceCrisis}
          placeholder="Days since last crisis"
        />
      </form>
      <button>Submit</button>
    </div>
  );
};

export default LogNewForm
