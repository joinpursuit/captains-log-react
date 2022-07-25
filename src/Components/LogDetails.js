import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function LogDetails() {
  const { index } = useParams();
  const [log, setLog] = useState({});
  
  //
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => setLog(res.data))
      .catch((error) => console.error("catch", error));
  }, [index]);

  const handleDelete = () => {
    axios
      .delete(`${API}/logs/${index}`)
      .then(() => {
        navigate(`/logs`);
      })
      .catch((e) => console.error(e));
  };

  return(
    <section>
      <ul>
        <li>{log.title} - By {log.captainName}</li>
        <li><span>post:</span> {log.post}</li>
        <li><span>mistakesWereMadeToday:</span> {log.mistakesWereMadeToday ? "Yes" : "No"}</li>
        <li><span>Days since last crisis:</span> {log.daysSinceLastCrisis}</li>
      </ul>

      <Link to="/logs">
        <button>Back</button>
      </Link>
      <Link to={`/logs/${index}/edit`}>
        <button>Edit</button>
      </Link>

      <button onClick={handleDelete}>Delete</button>
    </section>
  );
}