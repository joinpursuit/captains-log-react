import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LogEdit() {
  let { index } = useParams();

  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const handleTextChange = (event) => {
    event.target.id === "daysSinceLastCrisis"
      ? setLog({ ...log, [event.target.id]: Number(event.target.value) })
      : setLog({ ...log, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    console.log("Respond to Edit Page");
    axios.get(`${URL}/logs/${index}`).then((res) => setLog(res.data));
  }, []);

  const checkBoxHandler = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${URL}/logs/${index}`, log)
      .then(() => navigate(`/logs/${index}`));
  };

  return (
    <div className="Edit">
      <h1>Edit</h1>
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
          checked={log.mistakesWereMadeToday}
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
      <Link to={`/logs/${index}`}>
        <button>Never Mind</button>
      </Link>
      <Link to={`/logs`}>
        <button>Go Back to Logs page</button>
      </Link>
    </div>
  );
}

export default LogEdit;
