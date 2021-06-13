import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API = apiURL();

const LogDetails = ({ deleteLog }) => {
  const [log, setLog] = useState({});
  let { index } = useParams();
  let history = useHistory();

  useEffect(() => {
    const fetchLog = async () => {
      try {
        const res = await axios.get(`${API}/logs/${index}`);
        setLog(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLog();
  }, [index]);

  const handleDelete = () => {
    deleteLog(index);
    history.push("/logs");
  };
  return (
    <div>
      <Link to={`/logs`}>
        <button>Back</button>
      </Link>
      <Link>
        <button to={`/logs/${index}/edit`}>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
      <div>
        <h1>
          {log.title} - By {log.captainName}
        </h1>
        <p>Post: {log.post}</p>
        <p>
          Mistakes were made today: {log.mistakesWereMadeTodaymn ? "YES" : "NO"}
        </p>
        <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
      </div>
    </div>
  );
};

export default LogDetails;
