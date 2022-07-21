import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;
function LogEditForm() {
  let { index } = useParams();
  let navigate = useNavigate();
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
    axios.get(`${API}/logs/${index}`).then((res) => {
      setLog(res.data);
    });
  }, [index]);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/logs/${index}`, log)
      .then((response) => {
        setLog(response.data);
        navigate(`/logs/${index}`);
      })
      .catch((err) => console.warn(err));
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Captain Name"
          required
        />
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          required
          value={log.title}
          placeholder="Title"
          onChange={handleTextChange}
        />
        <label htmlFor="post">Post</label>
        <textarea
          id="post"
          type="text"
          name="post"
          value={log.post}
          placeholder="write your post here"
          onChange={handleTextChange}
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          name="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" />
      </form>
      <div>
        <Link to={`/logs`}>
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}
export default LogEditForm;




















