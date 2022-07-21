import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function LogDetails() {
  const [log, setLog] = useState([]);
  let { index } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => setLog(response.data))
      .catch((error) => navigate(`/404`));
  }, [index,navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/logs/${index}`)
      .then((response) => navigate(`/logs`))
      .catch((error) => console.log(error));
  };

  return (
    <article>
      <h3>{log.title} - By {log.captainName}</h3>
      <p>{log.post}</p>
      <p>{log.mistakesWereMadeToday}</p>
      <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
      <div className='showNavigation'>
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
