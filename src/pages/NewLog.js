import "./NewLog.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function NewLog() {
  const navigate = useNavigate();
  const URL = `http://localhost:3003/logs/`;
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: "",
  });

  const handleChange = (event) => {
    event.target.id === "daysSinceLastCrisis"
      ? setLog({ ...log, [event.target.id]: Number(event.target.value) })
      : setLog({ ...log, [event.target.id]: event.target.value });

    // console.log(log);
  };

  const handleCheckbox = (event) => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(URL, log).then(() => navigate("/logs"));
  };

  return (
    <div className="newLog">
      <h1>New</h1>
      <form onSubmit={handleSubmit}>
        <label for="captainName">
          Captain's Name:
          <br />
        </label>
        <input
          type="text"
          name="captainName"
          id="captainName"
          onChange={handleChange}
        ></input>
        <label for="title">
          <br />
          Title
          <br />
        </label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
        ></input>
        <label for="post">
          <br />
          Post
          <br />
        </label>
        <textarea
          // type="textarea"
          name="post"
          id="post"
          onChange={handleChange}
          placeholder="What Happened Today?"
        ></textarea>
        <label for="daysSinceLastCrisis">
          <br />
          Days Since Last Crisis
          <br />
        </label>
        <input
          type="number"
          name="daysSinceLastCrisis"
          id="daysSinceLastCrisis"
          onChange={handleChange}
        ></input>
        <label for="mistakesWereMadeToday">
          <br />
          Mistakes were made today:
          <br />
        </label>
        <input
          type="checkbox"
          name="mistakesWereMadeToday"
          id="mistakesWereMadeToday"
          onChange={handleCheckbox}
        ></input>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
export default NewLog;
