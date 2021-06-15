import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

import { apiURL } from '../util/apiURL';
const API = apiURL();

function LogEdit(props) {
  let { index } = useParams();
  let history = useHistory();

  const [log, setLog] = useState({
    name: "",
    url: "",
    category: "",
    description: "",
    mistakesWereMade: false,
  });

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMade: !log.mistakesWereMade });
  };

  const fetchLog = async () => {
    try {
      const res = await axios.get(`${API}/logs/${index}`);
      setLog(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  const handleNumChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };
  useEffect(() => {
   fetchLog();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await props.updateLog(log, index);
    history.push(`/logs/${index}`);
  };

  return (
    <div className="Edit">
{/* - Displays a form with the following inputs and appropriate labels:
  - captainName (text)
  - title (text)
  - post (text)
  - mistakesWereMadeToday (checkbox)
  - daysSinceLastCrisis (number)
  - submit (submit) */}

<h1>Captain's Log</h1>



      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Log"
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
        //   pattern="http[s]*://.+"
          required
          value={log.title}
          placeholder="Log Title"
          onChange={handleTextChange}
        />
        {/* <label htmlFor="post">Post:</label>
        <input
          id="post"
          type="text"
          name="post"
          value={log.post}
          placeholder="educational, inspirational, ..."
          onChange={handleTextChange}
        /> */}
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          name="post"
          value={log.post}
          onChange={handleTextChange}
          placeholder="Describe why you loged this site"
        />
          <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          name="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          placeholder="educational, inspirational, ..."
          onChange={handleNumChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default LogEdit;