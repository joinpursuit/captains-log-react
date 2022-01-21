import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function LogCreate() {
  const { index } = useParams();
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const navigate = useNavigate();
  const URL = process.env.REACT_APP_API_URL;

  const handleTextChange = (event) => {
    event.target.id === "daysSinceLastCrisis"
      ? setLog({ ...log, [event.target.id]: Number(event.target.value) })
      : setLog({ ...log, [event.target.id]: event.target.value });
  };
  const checkBoxHandler = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${URL}/logs`, log).then(() => {
      navigate("/logs");
    });
  };

  return (
    <div className="Create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">captainName:</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="name"
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          required
          value={log.title}
          placeholder="Title"
          onChange={handleTextChange}
        />
        <label htmlFor="post">Post:</label>
        <input
          id="post"
          type="text"
          name="post"
          value={log.post}
          placeholder="Post"
          onChange={handleTextChange}
        />
        <label htmlFor="mistakesWereMadeToday">MistakesWereMadeToday:</label>
        <input
          onChange={checkBoxHandler}
          id="mistakesWereMadeToday"
          type="checkbox"
        />
        <label htmlFor="daysSinceLastCrisis">DaysSinceLastCrisis:</label>
        <textarea
          id="daysSinceLastCrisis"
          name="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder="DaysSinceLastCrisis"
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/logs/`}>
        <button>Go Back to Logs page</button>
      </Link>
    </div>
  );
}
