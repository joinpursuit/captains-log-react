import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from 'axios'
const API = process.env.REACT_APP_API_URL

function LogEditForm() {
  let { index } = useParams();
  const navigate = useNavigate()

  const [log, setLog] = useState({
    captainName: "",
    daysSinceLastCrisis: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
  });

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  useEffect(() => {
    axios.get(`${API}/logs/${index}`)
    .then((res) => {
      setLog(res.data)
    })
    .catch((err) => {
      console.warn(err)
    })
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`${API}/logs/${index}`, log)
    .then((res) => {
      setLog(res.data)
      navigate(`/logs/${index}`)
    })
    .catch((err) => {
      console.warn(err)
    })
  };
  return (
    <div className="Edit">
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
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          name="daysSinceLastCrisis"
          required
          value={log.daysSinceLastCrisis}
          placeholder="100"
          onChange={handleTextChange}
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          name="title"
          value={log.title}
          placeholder="title goes here"
          onChange={handleTextChange}
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <label htmlFor="post">Post</label>
        <textarea
          id="post"
          name="post"
          value={log.post}
          onChange={handleTextChange}
          placeholder="Record log here"
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

export default LogEditForm;