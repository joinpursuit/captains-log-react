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
    <div>
      <header>
        <b>Captain's Log</b>
      </header>
      <b>Show</b>
      <br />
      <b>
        {log.title} - By {log.captainName}
      </b>
      <p>{log.post}</p>
      <p>
        <b>Days since last crisis:</b> {log.daysSinceLastCrisis}
      </p>
      <Link to={"/logs"}>
        <button>Back</button>
      </Link>
      <Link className="3" to={`/logs/${index}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default LogDetails;
