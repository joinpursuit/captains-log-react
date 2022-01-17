import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
const URL = process.env.REACT_APP_API_URL;
function EditLog(props) {
  const { index } = useParams();

  const navigate = useNavigate();
  const [Log, setLog] = useState([
    {
      captainName: "",
      title: "",
      post: "",
      mistakesWereMadeToday: "",
      daysSinceLastCrisis: "",
    },
  ]);
  useEffect(() => {
    axios
      .get(`${URL}/logs/${index}`)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setLog(response.data);
      })
      .catch((error) => console.log("catch", error));
  }, []);

  const handleTextChange = (event) => {
    setLog({ ...Log, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    setLog({ ...Log, [event.target.name]: !Log.mistakesWereMadeToday });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.put(`${URL}/logs/${index}`, Log).then(() => navigate(`/logs/${index}`));
  };

  return (
    <div className="Edit">
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
        <input type="submit" value="Edit" />
        <Link to="/logs">
          <button>Back</button>
        </Link>
      </form>
    </div>
  );
}

export default EditLog;
