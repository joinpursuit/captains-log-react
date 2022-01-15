import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function LogDetails() {
  const [logs, setLogs] = useState([]);
  let { index } = useParams();
  // useParams GRABS REACT ROUTER PARAMS// GRABS NAVIGATE FUNCTION FROM REACT ROUTER
  const navigate = useNavigate();

  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // GET/MAKE API CALL TO /bookmarks/:index
    axios.get(`${URL}/logs/${index}`).then((response) => {
      setLogs(response.data);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ON DELETE, DELETE THEN NAVIGATE TO UPDATED BOOKMARKS
  const handleDelete = () => {
    axios.delete(`${URL}/logs/${index}`).then(() => {
      navigate("/logs");
    });
  };
  return (
    <article>
      <h3>Captain's Log</h3>
      <p>
        {logs.title} - By {logs.captainName}
      </p>
      <p>Post: {logs.post}</p>
      <p>Days since last crisis: {logs.daysSinceLastCrisis}</p>
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

export default LogDetails;
