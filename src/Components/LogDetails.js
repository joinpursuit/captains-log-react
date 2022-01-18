import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Log from "./Log";


function LogDetails() {
  const URL = process.env.REACT_APP_API_URL;
  const [log, setLog] = useState([]);
  let { index } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    axios
    .get(`${URL}/logs/${index}`)
    .then((response) => setLog(response.data));
  }, []);

  const handleDelete = () => {
    axios
    .delete(`${URL}/logs/${index}`)
    .then(() => navigate("/logs"));
  };

  return (
    <article>
      <h3>
        {log.mistakesWereMadeToday ? <span>⭐️</span> : null} {log.captainName}
      </h3>
      <h4>
        {log.title} - By {log.captainName} 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </h4>
      <p>"{log.post}"</p>
      <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
      <div>
        {" "}
        <button onClick={handleDelete}>Delete</button>
      </div>
    </article>
  );
}

export default LogDetails;