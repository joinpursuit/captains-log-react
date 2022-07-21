import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function LogDetails() {
  const [log, setLog] = useState({});
  let { idx } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/logs/${idx}`)
      .then((res) => {
        setLog(res.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [idx, navigate]);
  const handleDelete = () => {
    axios
      .delete(`${API}/logs/${idx}`)
      .then(() => {
        navigate(`/logs`);
      })
      .catch((e) => console.log(e));
  };
  const {
    captainName,
    title,
    post,
    mistakesWereMadeToday,
    daysSinceLastCrisis,
  } = log;
  return (
    <article>
      <h1>Captain's Log</h1>
      <h2>
        {title} - By {captainName}
      </h2>
      <h5>{post}</h5>
      <div>Days since last crisis: {daysSinceLastCrisis}</div>
      <div>Were mistakes made today? {mistakesWereMadeToday ? "✅" : "❌"}</div>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/logs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/logs/${idx}/edit`}>
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
