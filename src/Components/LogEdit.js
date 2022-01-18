import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function LogEdit() {
  let { index } = useParams();
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const [logsEdit, setLogsEdit] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: "",
  });

  useEffect(() => {
    axios
    .get(`${URL}/logs/${index}`)
    .then((response) => setLogsEdit(response.data));
  }, []);

  const handleText = (event) => {
    setLogsEdit({ ...logsEdit, [event.target.id]: event.target.value });
  };
  
  const handleCheckbox = () => {
      setLogsEdit({ ...logsEdit, mistakesWereMadeToday: !logsEdit.mistakesWereMadeToday });
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();
      axios
        .put(`${URL}/logs/${index}`, logsEdit)
        .then(() => navigate(`/logs/${index}`));
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="captainName">Captain's Name:</label>
            <input
              id="captainName"
              value={logsEdit.captainName}
              type="text"
              onChange={handleText}
              placeholder="Name of the Captain"
              required
            />
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              type="text"
              value={logsEdit.title}
              placeholder="Log name"
              onChange={handleText}
            />
            <label htmlFor="post">Post:</label>
            <textarea
              id="post"
              type="text"
              name="post"
              value={logsEdit.post}
              placeholder="The Captain's signature quote"
              onChange={handleText}
            />
            <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
            <input
              id="daysSinceLastCrisis"
              type="number"
              name="daysSinceLastCrisis"
              value={logsEdit.daysSinceLastCrisis}
              onChange={handleText}
              placeholder="Days of Incident"
            />
            <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
            <input
              id="mistakesWereMadeToday"
              type="checkbox"
              onChange={handleCheckbox}
              checked={logsEdit.mistakesWereMadeToday}
            />
            <br />
            <input type="submit" />
          </form>
          <Link to={`/logs/${index}`}>
              <button>Back</button>
          </Link>
        </div>
    );
}
export default LogEdit;