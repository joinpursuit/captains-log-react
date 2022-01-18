import { useParams, useNavigate } from "react-router-dom";
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
      .then(() => navigate("/logs"))
      .catch(() => navigate("/logs"));
  };
  const handleChange = (e) => {
    setLog({ ...log, [e.target.name]: e.target.value });
  };
  const { post, captainName, title, daysSinceLastCrisis } = log;
  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="updatedCaptain">
        <strong>Captain's name: </strong>
      </label>
      <br />
      <input
        id="updatedCaptain"
        type="text"
        name="captainName"
        value={captainName}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="updatedTitle">
        <strong>Title</strong>
      </label>
      <br />
      <input
        id="updatedTitle"
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="updatedPost">
        <strong>Post:</strong>
      </label>
      <br />
      <textarea
        id="updatedPost"
        name="post"
        value={post}
        onChange={handleChange}
        placeholder="What happened today?"
      />
      <br />
      <label htmlFor="update-days">
        <strong>Days Since Last Crisis</strong>
      </label>
      <br />
      <input
        id="update-days"
        type="number"
        name="daysSinceLastCrisis"
        value={daysSinceLastCrisis}
        onChange={handleChange}
      />
      <br />
      <label>
        <strong>Mistakes were made today: </strong>
      </label>
      <br />
      <input type="checkbox" checked={checked} onChange={handleCheckBox} />
      <br />
      <button type="submit">
        <strong>Submit</strong>
      </button>
    </form>
  );
}

export default UpdateLog;
