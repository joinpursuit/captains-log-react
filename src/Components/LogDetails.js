import axios from 'axios'
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function LogDetails() {
  const URL = process.env.REACT_APP_API_URL;
  const [log, setLog] = useState([]);
  const { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //make GET request to http://localhost:3003/logs/:index
    //use setLog to change our current log
    //to the data we get back
    axios
      .get(`${URL}/logs/${index}`)
      //What should we do with the response?
      .then((response) => setLog(response.data));
  }, []);

  const handleDelete = () => {
    //make a delete request to /logs/:index
    axios.delete(`${URL}/logs/${index}`)
    //redirect them to /logs
    .then((response) => navigate("/logs"))

  };

  return (
    <article>
      <h2>
        {log.title} - By {log.captainName}
      </h2>
      <h3>
        {log.post}
      </h3>
      <h5>Days since last crisis: {log.daysSinceLastCrisis}</h5>
      <div className="showNavigation">
        <div>
          {" "}
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
