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
        Title: {log.title}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </h4>
      <p>Post: "{log.post}"</p>
      <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
      <div>
        <div>
          <a href={"/logs"}>
            <button>Back</button>
          </a>
        </div>
        <div>
          <a href={`/logs/${index}/edit`}>
            <button>Edit</button>
          </a>
        </div>
      </div>
      <div>
        {" "}
        <button onClick={handleDelete}>Delete</button>
      </div>
    </article>
          );
}

export default LogDetails;