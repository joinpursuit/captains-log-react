import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

// SHOW PAGE!!
const API = process.env.REACT_APP_API_URL;

function LogDetails() {

  const [ log, setLog ] = useState({});
  let { index } = useParams(); 

  const navigate = useNavigate();

  useEffect(() => {
    axios
    .get(`${API}/logs/${index}`)
    .then((res) => setLog(res.data))
    .catch((err) => navigate(`*`)) 
  }, [index]);
  
  const handleDelete = () => {
    axios.delete(`${API}/logs/${index}`) 
      .then(res => navigate(`/logs`)) 
      .catch(err => console.log(err))
  };

  return (
    <article>
      <h3>
        {log.title} - {log.captainName}
      </h3>
      <h5>{log.post}</h5>
      <p>Days since last crisis: {log.daysSinceLastCrisis}</p>

      <div className="showLogNavigation">
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
