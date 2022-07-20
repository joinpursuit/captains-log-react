import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
const API = process.env.REACT_APP_API_URL;

function LogsDetail() {
  const { index } = useParams();
  const [log, setLog] = useState({});

  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => setLog(response.data))
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

  return (
    <section>
      <div>
        {log.title} - By {log.captainName}
      </div>
      <div>post : {log.post}</div>
      <div>
        mistakesWereMadeToday : {log.mistakesWereMadeToday ? "true" : "false"}
      </div>
      <div>Days since last crisis: {log.daysSinceLastCrisis}</div>
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

export default LogsDetail;
