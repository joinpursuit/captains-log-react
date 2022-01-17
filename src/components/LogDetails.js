import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function LogDetails() {
  const URL = process.env.REACT_APP_API_URL;
  const [logs, setLogs] = useState([]);
  const { index } = useParams();
  const navigate = useNavigate();

  // - make GET request to http://localhost:3003/logs/:index
  // - use `setLog` to change our current log
  //   to the data we get back
  useEffect(() => {
    axios
      .get(`${URL}/logs/${index}`)
      .then((response) => setLogs(response.data));
  }, []);

  const handleDelete = () => {
    // make a delete request to /logs/:index
    axios.delete(`${URL}/logs/${index}`).then(() => navigate("/logs"));
    // redirect them to back to /logs
  };

  return (
    <article>
      <h3>Captains Log</h3>
      <p>
        {logs.title}-by{logs.captainName}
         {/*title by captain name*/}
      </p>
      <p>post:{logs.post}</p>
       {/*log post*/}
      <p>
        {logs.mistakesWereMadeToday ? (
          <span>Mistakes were made today</span>
        ) : (
          <span>No mistakes today</span>
        )}
         {/*if true display mistakes were made, if not display no mistakes today*/}
      </p>
      <p>Days since last crisis: {logs.daysSinceLastCrisis}</p>
      <div className="showNavigation">
        <div>
          {" "}
          {/*two buttons*/}
          <Link to={`/logs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/logs/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default LogDetails;