import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function LogEditForm() {
  let { index } = useParams();

  const navigate = useNavigate();

  const [log, setLog] = useState({
    name: "",
    url: "",
    category: "",
    description: "",
    isFavorite: false,
  });

  const updateLog = () => {
    axios
      .put(`${API}/logs/${index}`, log)
      .then((response) => {
        setLog(response.data);
        navigate(`/logs/${index}`);
      })
      .catch((c) => console.warn("catch", c));
  };

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => {
        setLog(response.data);
      })
      .catch((e) => console.error(e));
  }, [index]);

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateLog(log);
  };
  return (
    <div className="Edit">
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
            value={log.daysSinceLastCrisis}
            onChange={handleTextChange}
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
            checked={log.mistakesWereMadeToday}
            onChange={handleCheckboxChange}
          />
        </div>
        <br />
        <input type="submit" />
      </form>

      <Link to={`/logs/${index}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default LogEditForm;
