import { useState } from "react";
import { withRouter } from "react-router-dom";

function LogNew({ addLog, history }) {
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
  const handleNumChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.isFavorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addLog(log);
    history.push("/logs");
  };

  return (
    <div className="New">
{/* - Displays a form with the following inputs and appropriate labels:
  - captainName (text)
  - title (text)
  - post (text)
  - mistakesWereMadeToday (checkbox)
  - daysSinceLastCrisis (number)
  - submit (submit) */}





      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain Name:</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Log"
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
        //   pattern="http[s]*://.+"
          required
          value={log.title}
          placeholder="Log Title"
          onChange={handleTextChange}
        />
        <label htmlFor="daysSinceLastCrisis">Post:</label>
        <input
          id="post"
          type="text"
          name="post"
          value={log.post}
          placeholder="educational, inspirational, ..."
          onChange={handleTextChange}
        />
        <label htmlFor="isFavorite">Mistakes Were Made Today:</label>
        <input
          id="isFavorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={log.description}
          onChange={handleTextChange}
          placeholder="Describe why you loged this site"
        />
          <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          name="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          placeholder="educational, inspirational, ..."
          onChange={handleNumChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default withRouter(LogNew);