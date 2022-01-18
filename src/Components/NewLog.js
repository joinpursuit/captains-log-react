import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function NewLog() {
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  let { index } = useParams();

  const [newLog, setNewLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: "",
  });

  useEffect(() => {
    axios
    .get(`${URL}/logs`)
    .then((response) => setNewLog(response.data));
  }, []);

  const handleText = (event) => {
    setNewLog({ ...newLog, [event.target.id]: event.target.value });
  };

  const handleCheckbox = () => {
    setNewLog({ ...newLog, mistakesWereMadeToday: !newLog.mistakesWereMadeToday });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
    .post(`${URL}/logs`, newLog)
    .then(() => navigate("/logs"));
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="captainName">Captain's Name</label>
          <input
            id="captainName"
            type="text"
            value={newLog.captainName}
            onChange={handleText}
            placeholder="Captain's Name"
            required
          />
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            value={newLog.title}
            placeholder="Title"
            onChange={handleText}
          />
          <label htmlFor="post">Post:</label>
          <textarea
            id="post"
            name="post"
            value={newLog.post}
            onChange={handleText}
            placeholder="Post"
          />
          <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          name="daysSinceLastCrisis"
          type="number"
          value={newLog.daysSinceLastCrisis}
          onChange={handleText}
          placeholder="How many days?"
        />
          <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckbox}
          checked={newLog.mistakesWereMadeToday}
        />
          <br />
          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default NewLog;