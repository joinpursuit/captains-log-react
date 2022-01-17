import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function LogDetails() {
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [log, setLog] = useState([]);
  let { index } = useParams();

  useEffect(() => {
    axios.get(`${URL}/logs/${index}`)
      .then((response) => {
        setLog(response.data)
    })
    .catch((e) => console.log('catch', e))
  }, []);


  const handleDelete = (event) => {
    event.preventDefault();
    axios.delete(`${URL}/logs/${index}`)
    .then(() => {navigate(`/logs`)})
  };

  return (
    <>
    <div className="showContainer">
      <p>{log.mistakesWereMadeToday ? <span>💥</span> : null}</p>
      <pre/>
      <p> {log.title} - By {log.captainName}</p>
      <pre/>
      <p>{log.post}</p>
      <p> Days since last crisis: {log.daysSinceLastCrisis}</p>
    </div>
      <div className="navigation">
        <div>
          {" "}
          <Link to={`/logs`}>
            <button>Back</button>
          </Link>
        </div>
        <br/>
        <div>
          {" "}
          <Link to={`/logs/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <br/>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
        <br/>
      </div>
    </>
  );
}

export default LogDetails;
