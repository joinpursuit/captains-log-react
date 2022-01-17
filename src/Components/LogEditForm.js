import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function LogEditForm() {
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  let { index } = useParams();

  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  useEffect(() => {
    axios
      .get(`${URL}/logs/${index}`)
      .then((response) => {
        setLog(response.data);
      })
      .catch((e) => console.log("catch", e));
  }, []);
  
  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleMistakesChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    axios
    .put(`${URL}/logs/${index}`, log)
    .then(() => {
      navigate(`/logs/${index}`);
    });
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Captain's Name"
          required
        />
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          required
          value={log.title}
          onChange={handleTextChange}
          placeholder="Title"
        />
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          type="text"
          name="post"
          value={log.post}
          onChange={handleTextChange}
          placeholder="Post"
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          name="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder="Days since last crisis ...."
          required
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleMistakesChange}
          checked={log.mistakesWereMadeToday}
        />
        <br />
        <input type="submit" />
      </form>
      <Link to={`/logs`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default LogEditForm;

