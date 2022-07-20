import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
const API = process.env.REACT_APP_API_URL;

function LogsDetail() {
  const { index } = useParams();
  const [log, setLog] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => setLog(response.data))
      .catch((error) => console.error("catch", error));
  }, [index]);

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

      <button>Delete</button>
    </section>
  );
}

export default LogsDetail;
