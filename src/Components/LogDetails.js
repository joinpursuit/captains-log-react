import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

// import "./Nav.css";
const URL = process.env.REACT_APP_API_URL;
function LogDetails(props) {
  const { index } = useParams();
  const navigate = useNavigate();
  const [Log, setLog] = useState([]);
  useEffect(() => {
    axios
      .get(`${URL}/logs/${index}`)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setLog(response.data);
      })
      .catch((error) => console.log("catch", error));
  }, []);
  const handleDelete = () => {
    axios.delete(`${URL}/logs/${index}`, Log[`${index}`]).then(() => navigate(`/logs/`));
  };
  console.log(props);
  return (
    <div className="Log">
      <h1>Show Captain's Log</h1>
      <span>
        <h3>
          {Log.title} - By {Log.captainName}
        </h3>
      </span>
      <span>{Log.post}</span>
      <br />
      <span>
        <strong>Days since last crisis:</strong> {Log.daysSinceLastCrisis}
      </span>
      <br />
      <Link to="/logs">
        <button>back</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
      <Link to={`/logs/${index}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  );
}

export default LogDetails;
