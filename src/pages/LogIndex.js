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

  // declaring useNavigate & axios request to delete
  const navigate = useNavigate();
  const handleDelete = () => {
    axios.delete(URL).then(() => navigate("/logs"));
  };

  // navigating back to logs, some reason Link is importing on this file
  const backButton = () => {
    navigate("/logs");
  };
  const handleEdit = () => {
    navigate(`/logs/${params.index}/edit`);
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
      <button onClick={backButton} name="Back">
        Back
      </button>
      <button onClick={handleDelete} name="Delete">
        {`Delete`}
      </button>
      <button onClick={handleEdit} name="Edit">
        Edit
      </button>
    </div>
  );
}

export default LogIndex;
