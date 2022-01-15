import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function LogEditForm() {
  let { index } = useParams();
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [log, setLog] = useState({
    name: "",
    title: "",
    post: "",
    crisis: "",
    mistakes: false,
  });

  useEffect(() => {
    axios.get(`${URL}/logs/${index}`).then((response) => setLog(response.data));
  }, []);

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, isFavorite: !log.isFavorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${URL}/logs/${index}`, log)
      .then(() => navigate(`/logs/${index}`));
  };

  return (
    <div>
      <header>
        <b>Captain's Log</b>
      </header>
      <b>Edit</b>
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={log.title}
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="post">Post:</label>
        <textarea id="post" value={log.post} onChange={handleTextChange} />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
        <input
          id="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          type="number"
          onChange={handleTextChange}
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <br />
        <input type="submit" />
      </form>
      <Link to={"/logs"}>
        <button>Back</button>
      </Link>
    </div>
  );
}
export default LogEditForm;
