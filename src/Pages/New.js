import React, { useState } from "react";
import { withRouter } from "react-router-dom";

function New(props) {
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: "",
  });

  const { addLog } = props;

  const handleTextChange = (e) => {
    setLog((state) => ({
      ...state,
      [e.target.id]: e.target.value,
    }));
  };

  const handleCheckboxChange = () => {
    setLog((state) => ({
      ...state,
      mistakesWereMadeToday: !state.mistakesWereMadeToday,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addLog(log);
    props.history.push("/logs");
  };

  return (
    <div>
      <h1>Captain's Log</h1>
      <h2>New</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Captain's Name">Captain's Name</label>
        <input
          type="text"
          placeholder="Captain's Name"
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
        <textarea
          id="post"
          name="post"
          value={log.post}
          onChange={handleTextChange}
          placeholder="Log post"
          required
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
        <input
          type="checkbox"
          id="mistakesWereMadeToday"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
        <input
          type="number"
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

export default withRouter(New);
