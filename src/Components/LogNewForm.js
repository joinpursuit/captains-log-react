import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function LogNewForm() {
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: "",
  });

  const navigate = useNavigate();

  const addLog = (newLog) => {
    axios
      .post(`${API}/logs`, newLog)
      .then(() => {
        navigate(`/logs`);
      })
      .catch((c) => console.error("catch", c));
  };

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addLog(log);
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="captainName">Captain's Name</label>
          <input
            id="captainName"
            value={log.captainName}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of Captain"
            required
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            required
            value={log.title}
            placeholder="Title"
            onChange={handleTextChange}
          />
        </div>
        <br />

        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          type="textarea"
          name="post"
          value={log.post}
          placeholder="post..."
          onChange={handleTextChange}
        />

        <br />
        <div className="form-group">
          <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
          <input
            id="daysSinceLastCrisis"
            type="number"
            onChange={handleTextChange}
            value={log.daysSinceLastCrisis}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="mistakesWereMadeToday">
            Mistakes were made today:
          </label>
          <input
            id="mistakesWereMadeToday"
            type="checkbox"
            value={log.mistakesWereMadeToday}
            onChange={handleCheckboxChange}
          />
        </div>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default LogNewForm;
