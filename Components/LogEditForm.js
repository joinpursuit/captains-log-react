import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function LogEditForm() {
  const navigate = useNavigate();
  let { index } = useParams();
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: "",
  });

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => {
        setLog(res.data);
      })
      .catch();
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/logs/${index}`, log)
      .then(() => {
        navigate(`/logs/${index}`);
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Captain's Name:</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Name"
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
          placeholder="post"
          onChange={handleTextChange}
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          name="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder="Ex: 0"
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />

        <textarea id="post" />
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