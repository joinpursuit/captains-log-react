import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const API =   process.env.REACT_APP_API_URL

function LogNewForm() {
  const navigate = useNavigate()
  const [log, setLog] = useState({
    captainName: "",
    daysSinceLastCrisis: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
  });

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${API}/logs`, log)
    .then(() => {
      alert("We've added your new log.")
      navigate("/logs")
    })
    .catch((err) => {
      console.warn(err)
    })
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain Name:</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Captain Name"
          required
        />
        <label htmlFor="daysSinceLastCrisis">Days since last crisis:</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          name="daysSinceLastCrisis"
          required
          value={log.daysSinceLastCrisis}
          placeholder="100"
          onChange={handleTextChange}
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          name="title"
          value={log.title}
          placeholder="title goes here"
          onChange={handleTextChange}
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <label htmlFor="post">Log:</label>
        <textarea
          id="post"
          name="post"
          value={log.post}
          onChange={handleTextChange}
          placeholder="Record log here"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default LogNewForm;