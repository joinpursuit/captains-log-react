import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LogNewForm() {
    const [log, setLog] = useState({
        name: "",
        title: "",
        post: "",
        daysSinceLastCrisis: 0,
        mistakesWereMadeToday: false,
    });
    const navigate = useNavigate();

  const handleTextChange = (e) => {
    //   console.log(e.target.value)
    setLog({ ...log, [e.target.id]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/logs`, log)
      .then((res) => {
        navigate("/logs");
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Captain's Name:</label>
        <input
          type="text"
          id="name"
          value={log.name}
          onChange={handleTextChange}
          placeholder="Name of Captain"
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={log.title}
          onChange={handleTextChange}
          placeholder="Title here"
          required
        />
        <label htmlFor="post">Post:</label>
        <input
          type="text"
          id="post"
          value={log.post}
          onChange={handleTextChange}
          placeholder="Post here"
          required
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
        <input
          type="text"
          id="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder="Days here"
          required
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes Were Made Today</label>
        <input
          type="checkbox"
          id="mistakesWereMadeToday"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <br></br>
        <input type="submit" />
      </form>
    </div>
  );
}
export default LogNewForm;
