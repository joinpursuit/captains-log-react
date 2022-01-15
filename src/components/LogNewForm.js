import { useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import axios from "axios";

function LogNewForm() {
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_API_URL;
  const [log, setLog] = useState({
    name: "",
    title: "",
    post: "",
    crisis: "",
    mistakes: false,
  });

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, isFavorite: !log.isFavorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${URL}/logs`, log).then(() => navigate("/logs"));
  };

  return (
    <div>
      <header>Captain's Log</header>
      <b>New</b>
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          placeholder="Captain's Name"
          onChange={handleTextChange}
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={log.title}
          type="text"
          placeholder="Title"
          onChange={handleTextChange}
        />
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          value={log.post}
          type="text"
          placeholder="Post"
          onChange={handleTextChange}
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
        <input
          id="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          type="number"
          placeholder="0"
          onChange={handleTextChange}
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default LogNewForm;
