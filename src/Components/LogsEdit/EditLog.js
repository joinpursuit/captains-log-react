import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

import "./EditLog.scss";

const API = process.env.REACT_APP_API_URL;

const EditLog = () => {
  const navigate = useNavigate();
  const { index } = useParams();

  const [captainName, setCaptainName] = useState("");
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [mistakesWereMadeToday, setMistakesWereMadeToday] = useState(false);
  const [daysSinceLastCrisis, setDaysSinceLastCrisis] = useState(0);

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => {
        setCaptainName(res.data.captainName);
        setTitle(res.data.title);
        setPost(res.data.post);
        setMistakesWereMadeToday(res.data.mistakesWereMadeToday);
        setDaysSinceLastCrisis(res.data.daysSinceLastCrisis);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // eslint-disable-line

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLog = {
      captainName,
      title,
      post,
      mistakesWereMadeToday,
      daysSinceLastCrisis,
    };

    axios.put(`${API}/logs/${index}`, newLog).then((res) => {
      navigate(`/logs/${index}`);
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
    <section className="editLogSection">
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

        <section className="editButtons">
          <Button type="submit" className="btn btn-primary">
            Submit
          </Button>
          <Link className="logLinks" to="/logs">
            <Button variant="secondary">Back</Button>
          </Link>
        </section>
      </form>
    </section>
  );
};

export default EditLog;
