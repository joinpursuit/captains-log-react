import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";
const API = apiURL();

const EditLog = ({updateLog}) => {
  let { index } = useParams();
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });
  const history = useHistory();

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckbox = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const fetchLogs = async () => {
    try {
      const res = await axios.get(`${API}/logs/${index}`);
      setLog(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateLog(log, index);
    history.push(`/logs/${index}`);
  };

  const {
    captainName,
    title,
    post,
    mistakesWereMadeToday,
    daysSinceLastCrisis,
  } = log;
  return (
    <div className="newlog">
      <h1>Captain's Log</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          type="text"
          id="captainName"
          onChange={handleTextChange}
          value={captainName}
        />
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          onChange={handleTextChange}
          value={title}
        />
        <label htmlFor="post">Post:</label>
        <textarea
          type="text"
          id="post"
          onChange={handleTextChange}
          value={post}
        />
        <label htmlFor="mistakesWereMadeToday">
          Mistakes were made today:{" "}
          <input
            type="checkbox"
            id="mistakesWereMadeToday"
            onChange={handleCheckbox}
            value={mistakesWereMadeToday}
          />
        </label>
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis: </label>
        <input
          type="number"
          id="daysSinceLastCrisis"
          onChange={handleTextChange}
          value={daysSinceLastCrisis}
        />
        <br/>
        <input type="submit" />
      </form>
      <Link to={`/log/${index}`}>
        <button type="submit">Submit</button>
      </Link>
    </div>
  );
};

export default EditLog;
