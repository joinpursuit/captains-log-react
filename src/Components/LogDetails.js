import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios'
const API = process.env.REACT_APP_API_URL;

function LogDetails() {
  const [log, setLog] = useState([]);
  let { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}/logs/${index}`)
    .then((res) => {
      setLog(res.data)
    })
    .catch((err) => {
      console.warn(err)
    })
// eslint-disable-next-line  
  }, []);
  const handleDelete = () => {
    axios.delete(`${API}/logs/${index}`)
    .then(() => {
      alert("We've deleted your log.")
      navigate("/logs")
    })
    .catch((err) => {
      console.warn(err)
    })
  };
  return (
    <article>
      <h3>
        {log.mistakesWereMadeToday ? <span>⭐️</span> : null} {log.captainName}
      </h3>
      <h5>
        <span>
          <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </h5>
      <h2>{log.title}</h2>
      <p>{log.post}</p>
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