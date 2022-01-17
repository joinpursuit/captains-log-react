import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewLog() {
  const [checked, setChecked] = useState(false);
  const [state, setState] = useState({
    post: "",
    captainName: "",
    title: "",
    daysSinceLastCrisis: 0,
    mistakesWereMadeToday: false,
  });
  const navigate = useNavigate();
  const handleCheckBox = () => {
    setChecked(!checked);
  };
  const handleSubmit = () => {
    const newLog = { ...state, mistakesWereMadeToday: checked };
    axios
      .post(`${process.env.REACT_APP_API_URL}/logs`, newLog)
      .then(() => navigate("/logs"))
      .catch(() => navigate("/logs"));
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const { post, captainName, title, daySince } = state;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="captain">Captain's name: </label>
      <br />
      <input
        id="captain"
        type="text"
        name="captainName"
        value={captainName}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="title">Title</label>
      <br />
      <input
        id="title"
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="post">Post:</label>
      <textarea
        id="post"
        name="post"
        value={post}
        onChange={handleChange}
        placeholder="What happened today?"
      />
      <br />
      <label htmlFor="days-since">Days Since Last Crisis</label>
      <br />
      <input
        id="days-since"
        type="number"
        name="daySince"
        value={daySince}
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

export default NewLog;
