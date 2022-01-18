import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
function CaptainsLogEditForm() {
  // base url
  const URL = process.env.REACT_APP_API_URL;
  // the index from React Router
  const { index } = useParams();
  // the navigate function from React Router
  const navigate = useNavigate();

  const [logs, setLogs] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: true,
    daysSinceLastCrisis: "",
  });

  // make an API call to our back end
  // using the index from Router
  // call setLogs with the bookmark the call returns
  useEffect(() => {
    axios
      .get(`${URL}/logs/${index}`)
      .then((response) => setLogs(response.data));
  }, []);

  const handleTextChange = (event) => {
    setLogs({ ...logs, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLogs({ ...logs, mistakesWereMadeToday: !logs.mistakesWereMadeToday });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${URL}/logs/${index}`, logs)
      .then(() => navigate(`/logs/${index}`));
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Captain:</label>
        <input
          id="name"
          value={logs.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Captain"
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={logs.title}
          placeholder="The name for the log"
          onChange={handleTextChange}
        />
        <label htmlFor="post">Post:</label>
        <input
          id="post"
          type="text"
          name="post"
          value={logs.post}
          placeholder="what's on your mind..."
          onChange={handleTextChange}
        />
        <label htmlFor="mistakesWereMadeToday">MistakesWereMadeToday:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={logs.mistakesWereMadeToday}
        />
        <label htmlFor="daysSinceLastCrisis">DaysSinceLastCrisis:</label>
        <textarea
          id="daysSinceLastCrisis"
          name="daysSinceLastCrisis"
          value={logs.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder="dayssincelastcrisis"
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/logs/${index}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default CaptainsLogEditForm;
