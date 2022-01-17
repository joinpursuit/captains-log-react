import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router";
import axios from "axios";

function LogIndex() {
  const params = useParams();
  const [log, setLog] = useState([]);
  const URL = `http://localhost:3003/logs/${params.index}`;
  // setting log to the info received from the api
  useEffect(() => {
    axios.get(URL).then((response) => {
      setLog(response.data);
    });
  }, []);

  //declaring useNavigate, axios request to delete
  const navigate = useNavigate();
  const handleDelete = () => {
    axios.delete(URL).then(() => navigate("/logs"));
  };

  // Just navigating back to logs
  const backButton = () => {
    navigate("/logs");
  };

  return (
    <div>
      <h1>Show</h1>
      <container>
        <h2>
          {log.title} - By {log.captainName}
        </h2>
        <h3>{log.post}</h3>
        <p>
          <bold>Days since last crisis: </bold>
          {log.daysSinceLastCrisis}
        </p>
      </container>
      <button onClick={backButton}>Back</button>
      <button onClick={handleDelete}>Delete</button>
      <button></button>
    </div>
  );
}

export default LogIndex;
