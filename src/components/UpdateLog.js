import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./UpdateLog.css";

function UpdateLog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [log, setLog] = useState({
    post: "",
    captainName: "",
    title: "",
    daysSinceLastCrisis: 0,
    mistakesWereMadeToday: false,
  });
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/logs/${id}`)
      .then((response) => setLog(response.data))
      .catch(() => navigate(`/logs/${id}`));
  }, [id]);

  const handleCheckBox = (e) => {
    setChecked(e.target.checked);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newLog = { ...log, mistakesWereMadeToday: checked };
    axios
      .put(`${process.env.REACT_APP_API_URL}/logs/${id}`, newLog)
      .then(() => navigate(`/logs/${id}`))
      .catch(() => navigate("/logs"));
  };
  const handleChange = (e) => {
    setLog({ ...log, [e.target.name]: e.target.value });
  };
  const { post, captainName, title, daysSinceLastCrisis } = log;
  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="captainName">
        <strong>Captain's Name: </strong>
        <input
          id="captainName"
          type="text"
          name="captainName"
          value={captainName}
          onChange={handleChange}
        />
      </label>
      <br />

      <label htmlFor="title">
        <strong>Title</strong>
        <input
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </label>
      <br />

      <label htmlFor="post">
        <strong>Post:</strong>
      </label>
      <textarea
        id="post"
        name="post"
        value={post}
        onChange={handleChange}
        placeholder="What happened today?"
      />
      <br />

      <label htmlFor="daysSinceLastCrisis">
        <strong>Days Since Last Crisis</strong>
        <input
          id="daysSinceLastCrisis"
          type="number"
          name="daysSinceLastCrisis"
          value={daysSinceLastCrisis}
          onChange={handleChange}
        />
      </label>
      <br />

      <label htmlFor="mistakesWereMadeToday">
        <strong>Mistakes were made today: </strong>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          checked={checked}
          onChange={handleCheckBox}
        />
      </label>
      <br />

      <button>
        <Link to="/logs">Back</Link>
      </button>
      <button type="submit">
        <strong>Submit</strong>
      </button>
    </form>
  );
}

export default UpdateLog;
