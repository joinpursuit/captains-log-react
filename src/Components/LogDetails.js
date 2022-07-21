import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function LogDetails() {
  const [log, setLog] = useState([]);
  let { index } = useParams();

const navigate = useNavigate();

useEffect(() => {
    axios.get(`${API}/logs/${index}`)
      .then((response) => setLog(response.data))
      .catch((error) => navigate(`/404`))
  }, [index]);
  
  const handleDelete = () => {
      axios.delete(`${API}/logs/${index}`)
      .then((response) => navigate(`/logs`))
      .catch((error) => console.log(error))
  };
  
  return (
    <article>
      <h3>
        {log.captainName}
      </h3>
      <h5>
        {log.title}
      </h5>
      <h5>{log.post}</h5>
      <h5>{log.mistakesWereMadeToday}</h5>
      <h5>{log.daysSinceLastCrisis}</h5>
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