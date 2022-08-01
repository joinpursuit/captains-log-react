import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import axios from "axios";
import "./Styles/LogForm.css";

const API = process.env.REACT_APP_API_URL;

export default function LogEditForm() {
  let { index } = useParams();
  
  // It returns a function that lets you navigate programmatically
  const navigate = useNavigate();

  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    daysSinceLastCrisis: "",
    mistakesWereMadeToday: false,
  });

  // UPDATE
  const updateLog = () => {
    axios
      .put(`${API}/logs/${index}`, log)
      .then((res) => {
        setLog(res.data);
        navigate(`/logs/${index}`);
      })
      .catch((c) => console.warn("catch", c));
  };

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => {
        setLog(res.data);
      })
      .catch((e) => console.error(e));
  }, [index]);

  // Handlers
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
    <section>
      <form onSubmit={handleSubmit}>
        <div className="form__control">
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
        <div className="form__control">
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
        {/* Cypress issue: form > textarea */}
        <> 
          <label htmlFor="post">Post:</label>
          <textarea
            id="post"
            type="textarea"
            name="post"
            value={log.post}
            placeholder="post..."
            onChange={handleTextChange}
          />
        </>  
        <div className="form__control">
          <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
          <input
            id="daysSinceLastCrisis"
            type="number"
            value={log.daysSinceLastCrisis}
            onChange={handleTextChange}
          />
        </div>
        <div className="form__control">
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
        <input type="submit" />
        <Link to={`/logs/${index}`}>
          <button>Back</button>
        </Link>
      </form>
    </section>
  );
}