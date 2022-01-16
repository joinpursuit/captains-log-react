import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LogDetails from "./LogDetails";

function LogNewForm() {
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  let { index } = useParams();

  const [logNew, setLogNew] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: "",
  });

  useEffect(() => {
    axios.get(`${URL}/logs`).then((response) => setLogNew(response.data));
  }, []);

  const handleCheckboxChange = () => {
    setLogNew({ ...logNew, mistakesWereMadeToday: !logNew.mistakesWereMadeToday });
  };

  const handleTextChange = (event) => {
    setLogNew({ ...logNew, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // axios post request to create a new bookmark
    axios.post(`${URL}/logs`, logNew).then(() => navigate("/logs"));
    // redirect back to that new bookmark
  };

  return (
    <>
      <div className="New">
        <form onSubmit={handleSubmit}>
          <label htmlFor="captainName">Captain's Name</label>
          <input
            id="captainName"
            type="text"
            value={logNew.captainName}
            onChange={handleTextChange}
            placeholder="Captain's Name"
            required
          />
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            value={logNew.title}
            placeholder="Title"
            onChange={handleTextChange}
          />
          <label htmlFor="post">Post:</label>
          <textarea
            id="post"
            name="post"
            value={logNew.post}
            onChange={handleTextChange}
            placeholder="Post"
          />
          <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={logNew.mistakesWereMadeToday}
        />
          <br />
          <input type="submit" />
        </form>
        <button>Delete</button>
      </div>
    </>
  );
}

export default LogNewForm;
