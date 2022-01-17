import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
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
      <Link to={"/logs"}>
        <button>Back</button>
      </Link>
      <Link to={`/logs/${params.index}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>{`Delete`}</button>
    </div>
  );
}

export default LogIndex;
