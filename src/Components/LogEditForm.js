import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

import { apiURL } from "../util/apiURL";
const API = apiURL();

const LogEditForm = (props) => {
  let { index } = useParams();
  let history = useHistory();

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

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const fetchlog = async () => {
    try {
      const res = await axios.get(`${API}/logs/${index}`);
      setLog(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchlog();
  },[]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await props.updateLog(log, index);
    history.push(`/logs/${index}`);
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain Name:</label>
        <input
          id="captainName"
          type="text"
          required
          value={log.captainName}
          placeholder="Captain Name"
          onChange={handleTextChange}
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={log.title}
          type="text"
          onChange={handleTextChange}
          placeholder="Title"
          required
        />
        <label htmlFor="post">Post:</label>
        <input
          id="post"
          type="text"
          name="post"
          value={log.post}
          placeholder="educational, inspirational, ..."
          onChange={handleTextChange}
        />
        <label htmlFor="mistakesWereMadeToday">
          Mistakes Were Made Today:{" "}
        </label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          name="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/logs/${index}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
};

export default LogEditForm;
