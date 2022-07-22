import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function LogDetails() {
  const [log, setLog] = useState({});
  let { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => setLog(response.data))
      .catch((error) => navigate(`/404`));
  }, [index]);

  const handleDelete = () => {
    axios
      .delete(`${API}/logs/${index}`)
      .then((response) => navigate(`/logs`))
      .catch((error) => console.error(error));
  };
  return (
    <article>
      <h3>
        Captain's Name: {log.captainName ? <span>⭐️</span> : null}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {log.captainName}
      </h3>
      <h5>
      Title: <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </span>
        {log.title} - By {log.captainName} 
      </h5>
     
      <h6>
        Post: <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </span>{log.post}
      </h6>
      <h6>
        <p>Mistakes Were Made Today: <span>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </span>
        {`${
          log.mistakesWereMadeToday ? "True" : "False"
        }`}</p>
      </h6>
      <p>Days since last crisis: <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </span>
      {log.daysSinceLastCrisis}</p>

      <div className="showNavigation">
        <div>
          <Link to={`/logs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/logs/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}


