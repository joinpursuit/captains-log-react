import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

function LogDetails() {
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [log, setLog] = useState([]);
  const { index } = useParams();

  useEffect(() => {
    axios
      .get(`${URL}/logs/${index}`)
      .then((response) => {
        setLog(response.data);
      })
      .catch((e) => console.log("catch", e));
  }, []);

  const handleDelete = () => {
    axios.delete(`${URL}/logs/${index}`).then(() => navigate(`/logs`));
  };

  return (
    <section>
      <header>Captain's Log</header>
      <header>Show</header>
      <p> {log.mistakesWereMadeToday ? <span>⭐️</span> : null} </p>
      <p>
        {log.title} - By {log.captainName}
      </p>
      <p>{log.post}</p>
      <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
      <div className="navigation">
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
      </div>
      <div>
        {" "}
        <button onClick={handleDelete}>Delete</button>
      </div>
    </section>
  );
}

export default LogDetails;
