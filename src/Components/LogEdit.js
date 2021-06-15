import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API = apiURL();

function LogEdit(props) {
  let { index } = useParams();
  let history = useHistory();

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

  useEffect(() => {
    axios.get(`${API}/logs/${index}`).then(
      (response) => setLog(response.data),
      (error) => history.push(`/not-found`)
    );
  }, [index, history]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(props.updateLog(log, index));
    props.updateLog(log, index);
    history.push(`/logs/${index}`);
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Name:</label>
        <input
          id="captainName"
          type="text"
          required
          value={log.captainName}
          onChange={handleTextChange}
          placeholder="Captain's Name"
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          required
          value={log.title}
          placeholder="Title of Log"
          onChange={handleTextChange}
        />
        <label htmlFor="post">Log Entry:</label>
        <textarea
          id="post"
          value={log.post}
          onChange={handleTextChange}
          placeholder="How did the day go?"
        />
        <label htmlFor="mistakesWereMadeToday">
          Check if mistakes were made today:
        </label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          value={log.mistakesWereMadeToday}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          onChange={handleTextChange}
          value={log.daysSinceLastCrisis}
        />

        <br />

        <input type="submit" />
      </form>
    </div>
  );
}

export default LogEdit;
