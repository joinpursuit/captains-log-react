import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const LogEditForm = () => {
  let { index } = useParams();
  const navigate = useNavigate();

  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => setLog(res.data))
      .catch((err) => console.error(err));
  }, [index]);

  const updateLog = () => {
    axios
      .put(`${API}/logs/${index}`, log)
      .then((response) => {
        setLog(response.data);
        navigate(`/logs/${index}`);
      })
      .catch((error) => console.error(error));
  };

  const handleChange = (e) => {
    setLog({ ...log, [e.target.id]: e.target.value });
  };

  const handleCheckbox = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateLog();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Captain's Name:
          <input
            type="text"
            id="captainName"
            value={log.captainName}
            onChange={handleChange}
          ></input>
        </label>
        <br />
        <label>
          Title:
          <input
            type="text"
            id="title"
            value={log.title}
            onChange={handleChange}
          ></input>
        </label>
        <br />
        <label>
          Post:
          </label>
          <textarea
            type="text"
            id="post"
            value={log.post}
            onChange={handleChange}
          ></textarea>
        <br />
        <label>
          Mistakes were made today
          <input
            type="checkbox"
            id="mistakesWereMadeToday"
            value={log.mistakesWereMadeToday}
            onChange={handleCheckbox}
          ></input>
        </label>
        <br />
        <label>
          Days Since Last Crisis?
          <input
            type="number"
            id="daysSinceLastCrisis"
            value={log.daysSinceLastCrisis}
            onChange={handleChange}
          ></input>
        </label>
        <br />
        <input type="submit"></input>
        <Link to={`/logs/${index}`}>
          <button>Go Back</button>
        </Link>
      </form>
    </div>
  );
};

export default LogEditForm;
