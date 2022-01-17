import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

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
  const [checked, setChecked] = useState(log.mistakesWereMadeToday);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/logs/${id}`)
      .then((response) => setLog(response.data))
      .catch(() => navigate(`/logs/${id}`));
  }, [id]);

  const handleCheckBox = () => {
    setChecked(!checked);
  };
  const handleSubmit = () => {
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="updatedCaptain">Captain's name: </label>
      <br />
      <input
        id="updatedCaptain"
        type="text"
        name="captainName"
        value={captainName}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="updatedTitle">Title</label>
      <br />
      <input
        id="updatedTitle"
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="updatedPost">Post:</label>
      <br />
      <textarea
        id="updatedPost"
        name="post"
        value={post}
        onChange={handleChange}
        placeholder="What happened today?"
      />
      <br />
      <label htmlFor="update-days">Days Since Last Crisis</label>
      <br />
      <input
        id="update-days"
        type="number"
        name="daySince"
        value={daysSinceLastCrisis}
        onChange={handleChange}
      />
      <br />
      <label>Mistakes were made today: </label>
      <br />
      <input type="checkbox" checked={checked} onChange={handleCheckBox} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UpdateLog;
