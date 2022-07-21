import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function LogEditForm() {
const { index } = useParams();
const navigate = useNavigate();

const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  useEffect(() => {
      axios.get(`${API}/logs/${index}`)
      .then(response => setLog(response.data))
      .catch(error => console.log(error))
  }, [index]);

  const updateLog = () => {
      axios.put(`${API}/logs/${index}`, log)
      .then(response => { 
      setLog(response.data)
      navigate(`/logs/${index}`)
    })
    .catch(error => console.log(error))
  }

const handleSubmit = (event) => {
    event.preventDefault();
    updateLog();
  };

  return (
    <div classcaptainName="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainsName">Captain's Name</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Captain Name"
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={log.title}
          placeholder="Title"
          onChange={handleTextChange}
        />
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          type="text"
          name="post"
          value={log.post}
          onChange={handleTextChange}
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder="Days Since Last Crisis"
        />
        <br />
        <input type="submit" />
        <a> <Link to={`/logs`}>
            <button>Back</button>
          </Link></a>
      </form>
    </div>
  );
}

export default LogEditForm;
