import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function LogDetails() {
  const [log, setLogs] = useState([]);
  let { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => {
        setLogs(res.data);
      })

      .catch(() => {
        navigate("/not found");
      });
  }, []);
  const handleDelete = () => {
    axios
      .delete(`${API}/logs/${index}`)
      .then(() => {
        navigate("/logs");
      })
      .catch(() => {
        console.warn("error");
      });
  };

  return (
    <article>
      <h1>
        {log.title} - By {log.captainName}
      </h1>
      <h2>{log.post}</h2>
      <h3>Days since last crisis: {log.daysSinceLastCrisis}</h3>
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

export default LogDetails;