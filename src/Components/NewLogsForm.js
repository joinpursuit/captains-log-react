import { useState } from "react";
import { withRouter } from "react-router-dom";

function LogNewForm(props) {
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const handleChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { addLog, history } = props;
    addLog(log);
    history.push("/logs");
  };
  
  
  return (
    <div className="new-log">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainsName">Captain's Name</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleChange}
          placeholder="Name of Captain"
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={log.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <label htmlFor="post">Post:</label>
        <input
          id="post"
          type="text"
          name="post"
          value={log.post}
          placeholder="Captains post"
          onChange={handleChange}
        />
        <label htmlFor="mistakesWereMadeToday"> Mistakes Were MadeToday: </label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          value={log.mistakesWereMadeToday}
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <textarea
          id="daysSinceLastCrisis"
          name="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          onChange={handleChange}
          placeholder="Days Since Last Crisis..."
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default withRouter(LogNewForm);