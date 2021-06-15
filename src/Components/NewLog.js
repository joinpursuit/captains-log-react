import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function NewLog(props) {
  let history = useHistory();

  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addLog(log);
    history.push("/logs");
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="captainName"
          type="text"
          required
          value={log.captainName}
          onChange={handleTextChange}
          placeholder="Captain's Name"
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          required
          value={log.title}
          placeholder="Title of Log"
          onChange={handleTextChange}
        />
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          value={log.post}
          onChange={handleTextChange}
          placeholder="How did the day go?"
        />
        <label htmlFor="mistakesWereMadeToday">
          Check if Mistakes were made today:
        </label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          value={log.mistakesWereMadeToday}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          onChange={handleTextChange}
          value={log.daysSinceLastCrisis}
        />

        <br />

        <input type="submit" />
      </form>
    </div>
  );
}

export default NewLog;
