import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API_BASE = apiURL();

export default function LogDetail(props) {
  const [log, setLog] = useState([]);
  let { index } = useParams();
  let history = useHistory();

  useEffect(() => {
    axios.get(`${API_BASE}/logs/${index}`).then((response) => {
      // setLogs(response.data);
      const { data } = response;
      console.log(data);
      setLog(data);
    });
  }, [index, history]);

  return (
    <div className="detailed">
      <div className="modify">
        <Link to="/logs">
          <button>Back</button>
        </Link>
        <Link to={`/logs/${index}/edit`}>
          <button>Edit</button>
        </Link>
      </div>

      <div className="loginfo">
        <h3>
          {log.title} - By {log.captainName}
        </h3>
        <h4>{log.post}</h4>
        <h4>Days since last crisis: {log.daysSinceLastCrisis}</h4>
      </div>
    </div>
  );
}
