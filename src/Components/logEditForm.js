import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function logEditForm() {
  let { index } = useParams();
  const navigate = useNavigate();

  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    daysSinceLastCrisis: 0,
    mistakesWereMadeToday: false,
  });

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => {
        setLog(res.data);
      })
      .catch();
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/logs/${index}`, log)
      .then(() => {
        navigate(`/logs/${index}`);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainsName">Captain's Name:</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          required
          value={log.title}
          onChange={handleTextChange}
        />
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          type="text"
          value={log.post}
          onChange={handleTextChange}
        />
        <label htmlFor="mistakesMade">Mistakes were made today</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" />
      </form>
      <Link to={`/logs`}>
        <button>Back</button>
      </Link>
    </div>
  );
}
