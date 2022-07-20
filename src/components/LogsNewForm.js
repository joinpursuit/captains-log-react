import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

const LogsNewForm = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/logs`, log)
      .then((res) => {
        navigate("/logs");
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <div>
      <h2>Captain's Log</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input id="captainName" type="text" onChange={handleTextChange}></input>
        <label htmlFor="title">Title: </label>
        <input id="title" type="text" onChange={handleTextChange}></input>
        <label htmlFor="post">Post: </label>
        <textarea id="post" type="text" onChange={handleTextChange} />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
        ></input>
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          onChange={handleTextChange}
        ></input>
        <input type="submit" />
      </form>
    </div>
  );
};

export default LogsNewForm;
