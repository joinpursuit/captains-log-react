import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

function LogEditForm() {
  let { index } = useParams();
  const URL = process.env.REACT_APP_API_URL;
  //const [logEdit, setLogEdit] = useState([]);

  const navigate = useNavigate();

  const [logEdit, setLogEdit] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: "",
  });

  const handleTextChange = (event) => {
    setLogEdit({ ...logEdit, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLogEdit({ ...logEdit, mistakesWereMadeToday: !logEdit.mistakesWereMadeToday });
  };

  useEffect(() => {
    axios
      .get(`${URL}/logs/${index}`)
      .then((response) => setLogEdit(response.data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${URL}/logs/${index}`, logEdit)
      .then(() => navigate(`/logs/${index}`));
  };

  return (
    <div>
        <header>Captain's Log</header>
        <header>Edit</header>
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name</label>
        <input
          id="captainName"
          value={logEdit.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Captain"
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={logEdit.title}
          onChange={handleTextChange}
          placeholder="Title"
          required
        />
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          name="post"
          value={logEdit.post}
          onChange={handleTextChange}
          placeholder="Post"
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          name="daysSinceLastCrisis"
          type="number"
          value={logEdit.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder="How many days?"
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={logEdit.mistakesWereMadeToday}
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
