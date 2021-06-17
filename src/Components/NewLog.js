import React from "react";
import { withRouter } from "react-router";
import { useState } from "react";

function NewLog(props) {
  const [log, setLogs] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const handleChange = (e) => {
    setLogs({ ...log, [e.target.id]: e.target.value });
  };

  const handleCheckbox = () => {
    setLogs({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addLog(log);
    props.history.push("/logs");
  };

  return (
    <div>
      <h1>Captain's Log</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Captain's Name
          <input
            id="captainName"
            type="text"
            onChange={handleChange}
            value={log.captainName}
          ></input>
        </label>

        <label>
          Title
          <input
            id="title"
            type="text"
            onChange={handleChange}
            value={log.title}
          ></input>
        </label>

        <label>Post</label>
        <textarea id="post" onChange={handleChange} value={log.post}></textarea>

        <label>
          Mistakes were made today
          <input
            id="mistakesWereMadeToday"
            type="checkbox"
            onChange={handleCheckbox}
            checked={log.mistakesWereMadeToday}
          ></input>
        </label>

        <label>
          Days Since Last Crisis
          <input
            id="daysSinceLastCrisis"
            type="number"
            onChange={handleChange}
            value={log.daysSinceLastCrisis}
          ></input>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default withRouter(NewLog);
