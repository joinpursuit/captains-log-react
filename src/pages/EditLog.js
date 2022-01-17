import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function EditLog() {
  const { index } = useParams();
  const URL = `http://localhost:3003/logs/${index}`;
  const navigate = useNavigate();
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: true,
    daysSinceLastCrisis: "",
  });

  useEffect(() => {
    console.log("made it to edit page");
    axios.get(URL).then((response) => setLog(response.data));
  }, []);

  // Mostly same as New log
  const handleChange = (event) => {
    // event.target.id === "daysSinceLastCrisis" ? setLog({ ...log, [event.target.id]: Number(event.target.value) })
    //     :
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckbox = (event) => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  // axios put instead of post
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(URL, log).then(() => navigate(`/logs/${index}`));
  };

  return (
    <div className="edit">
      <h1>Edit</h1>
      <form onSubmit={handleSubmit}>
        <label for="captainName">
          Captain's Name:
          <br />
        </label>
        <input
          type="text"
          name="captainName"
          id="captainName"
          value={log.captainName}
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
          value={log.title}
          onChange={handleChange}
        ></input>
        <label for="post">
          <br />
          Post
          <br />
        </label>
        <textarea
          //   type="textarea"
          name="post"
          id="post"
          value={log.post}
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
          value={log.daysSinceLastCrisis}
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
          value={log.mistakesWereMadeToday}
          onChange={handleCheckbox}
        ></input>
        <br />
        <input type="submit" />
      </form>
      <Link to={`/logs`}>
        <button onClick={<Link to={`/logs`} />} name="Back">
          Back
        </button>
      </Link>
    </div>
  );
}

export default EditLog;
