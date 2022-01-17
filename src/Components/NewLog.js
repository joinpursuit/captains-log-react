import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const URL = process.env.REACT_APP_API_URL;
function NewLog() {
  const { index } = useParams();

  const navigate = useNavigate();
  const [Log, setLog] = useState([
    { captainName: "", title: "", post: "", mistakesWereMadeToday: "", daysSinceLastCrisis: "" },
  ]);

  const handleTextChange = (event) => {
    setLog({ ...Log, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    setLog({ ...Log, [event.target.name]: event.target.checked });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${URL}/logs`, Log).then(() => navigate(`/logs`));
  };

  return (
    <div className="New">
      <h1>Captain's Log</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Captain's Name</label>
        <input
          id="captainName"
          name="captainName"
          value={Log.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Captain"
          required
        />
        <br />
        <br />
        <label for="title">Title:</label>
        <input
          id="title"
          name="title"
          type="text"
          required
          value={Log.title}
          placeholder="Title goes here"
          onChange={handleTextChange}
        />
        <br />
        <br />
        <label for="post">Post:</label>
        <textarea
          id="post"
          type="textarea"
          name="post"
          value={Log.post}
          placeholder="Post goes here"
          onChange={handleTextChange}
        />
        <br />
        <br />
        <label for="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          id="mistakesWereMadeToday"
          name="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={Log.mistakesWereMadeToday}
        />
        <br />
        <br />
        <label for="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          name="daysSinceLastCrisis"
          value={Log.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder="Days Since Last Crisis"
        />
        <br />
        <br />
        <label for="form"></label>
        <input id="post" type="submit" />
      </form>
    </div>
  );
}

export default NewLog;
