import {useState, useEffect} from "react"
import {useHistory, useParams} from "react-router-dom"
import axios from "axios"
import {apiURL} from "../util/apiURL"
const API = apiURL()

const LogEditForm = (props) => {
    let { index } = useParams();
    let history = useHistory();
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const handleTextChange = (e) => {
    setLog({ ...log, [e.target.id]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleNumber = (e) => {
    setLog({ ...log, daysSinceLastCrisis: Number(e.target.value) });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateLog(log, index);
    history.push("/logs");
  };

  useEffect(() => {
    const fetchLog = async () => {
      try {
        const res = await axios.get(`${API}/Logs/${index}`);
        setLog(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLog();
  }, [index]);

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Captain"
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          required
          value={log.title}
          placeholder="Entry Title"
          onChange={handleTextChange}
        />
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          name="post"
          value={log.post}
          placeholder="Describe what happened today"
          onChange={handleTextChange}
        />
        <label htmlFor="mistakesWereMadeToday">
          Mistakes were made today?:
        </label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          name="daysSinceLastCrisis"
          type="number"
          value={log.daysSinceLastCrisis}
          onChange={handleNumber}
          placeholder="Enter a number since last crisis"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default LogEditForm