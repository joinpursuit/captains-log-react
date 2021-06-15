import React from 'react'
import { useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

function LogEditForm({updateLog, logs}) {
  let { index } = useParams();
  let history = useHistory()
  const [ log, setLog ] = useState(logs[index])


      const handleTextChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value });
      };
    
      const handleCheckboxChange = () => {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        updateLog(log, index)
        history.push(`/logs/${index}`);
      };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder={log.captainName}
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          pattern="http[s]*://.+"
          required
          value={log.title}
          placeholder={log.title}
          onChange={handleTextChange}
        />
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          type="text"
          name="post"
          value={log.post}
          placeholder={log.post}
          onChange={handleTextChange}
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          name="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder={log.daysSinceLastCrisis}
        />
        <br />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
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

export default LogEditForm;
