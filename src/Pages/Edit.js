import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

import { apiUrl } from "../util/apiURL";

const API = apiUrl();

export default function Edit(props) {
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: "",
  });

  const { updateLog } = props;

  let { index } = useParams();
  let history = useHistory();

  const handleTextChange = (e) => {
    setLog((state) => ({
      ...state,
      [e.target.id]: e.target.value,
    }));
  };

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

  const handleCheckboxChange = () => {
    setLog((state) => ({
      ...state,
      mistakesWereMadeToday: !state.mistakesWereMadeToday,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateLog(log, index);
    history.push(`/logs/${index}`);
  };

  return (
    <div>
      <h2>Edit</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          placeholder="Captain's name"
          id="captainName"
          value={log.captainName}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          placeholder="Log title"
          id="title"
          value={log.title}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="post">Post:</label>
        <input
          type="text"
          placeholder="Log post"
          id="post"
          value={log.post}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes made:</label>
        <input
          type="checkbox"
          id="mistakesWereMadeToday"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <label htmlFor="daysSinceLastCrisis">Last Crisis:</label>
        <input
          type="text"
          placeholder="Days since last crisis"
          id="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          required
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
