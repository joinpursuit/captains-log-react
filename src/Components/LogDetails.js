import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";

import { apiURL } from "../util/apiURL";
const API = apiURL();

const LogDetails = ({ deleteLog }) => {
  const [log, setlog] = useState({});
  let { index } = useParams();
  let history = useHistory();

  const fetchlog = async () => {
    try {
      const res = await axios.get(`${API}/logs/${index}`);
      setlog(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchlog();
  }, []);

  const handleDelete = () => {
    deleteLog(index);
    history.push("/logs");
  };

  return (
    <section>
      <p>{log.title} - By {log.captainName}</p>
      <p>{log.title}</p>
      <p>{log.post}</p>
      <p>{log.mistakesWereMadeToday}</p>
      <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
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
    </section>
  );
}

export default withRouter(LogDetails);
