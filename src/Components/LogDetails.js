import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API_BASE = apiURL();

function LogDetails(props) {
  const { deleteLog } = props;
  const [log, setLog] = useState([]);

  let { index } = useParams();
  let history = useHistory();

  useEffect(() => {
    axios
      .get(`${API_BASE}/logs/${index}`)
      .then((response) => {
        const { data } = response;
        setLog(data);
      })
      .catch((e) => {
        history.push("/not-found");
      });
  }, [index, history]);

  const handleDelete = () => {
    deleteLog(index);
    history.push("/logs");
  };

  return (
    <article>
      <h4>
        {log.title} - By {log.captainName}
      </h4>
      <h4>
        Post:{" "}
        <span>
          <h5>{log.post}</h5>
        </span>
      </h4>
      <h4>
        Mistakes Made:{" "}
        <span>
          <h5>
            {log.mistakesWereMadeToday ? (
              <p>Yes they were!</p>
            ) : (
              <p>No they weren't!</p>
            )}
          </h5>
        </span>
      </h4>
      <h4>
        Days since last crisis:{" "}
        <span>
          <h5>{log.daysSinceLastCrisis}</h5>
        </span>
      </h4>

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

export default withRouter(LogDetails);
