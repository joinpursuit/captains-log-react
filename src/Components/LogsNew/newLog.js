import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";

import "./newLog.scss";

const API = process.env.REACT_APP_API_URL;

const NewLog = () => {
  const navigate = useNavigate();

  const [captainName, setCaptainName] = useState("");
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [mistakesWereMadeToday, setMistakesWereMadeToday] = useState(false);
  const [daysSinceLastCrisis, setDaysSinceLastCrisis] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLog = {
      captainName,
      title,
      post,
      mistakesWereMadeToday,
      daysSinceLastCrisis,
    };

    axios.post(`${API}/logs`, newLog).then((res) => {
      navigate("/logs");
    });

    clearForms();
  };

  const clearForms = () => {
    setCaptainName("");
    setTitle("");
    setPost("");
    setMistakesWereMadeToday(false);
    setDaysSinceLastCrisis(0);
  };

  return (
    <section className="newLogSection">
      <header>Captain's Log</header>
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name</label>
        <input
          type="text"
          className="form-control"
          id="captainName"
          value={captainName}
          onChange={(e) => setCaptainName(e.target.value)}
        />

        <label htmlFor="title">Post Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="post">Post</label>
        <textarea
          className="form-control"
          id="post"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />

        <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="mistakesWereMadeToday"
            value={mistakesWereMadeToday}
            onChange={() => setMistakesWereMadeToday(!mistakesWereMadeToday)}
          />
        </div>

        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
        <input
          type="number"
          className="form-control"
          id="daysSinceLastCrisis"
          value={daysSinceLastCrisis}
          onChange={(e) => setDaysSinceLastCrisis(e.target.value)}
        />

        <br />

        <Button type="submit" className="btn btn-primary">
          Submit
        </Button>
      </form>
    </section>
  );
};

export default NewLog;
