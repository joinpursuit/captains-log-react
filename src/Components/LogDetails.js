import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL

function LogDetails() {
  const [log, setLog] = useState({});
  let { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}/logs/${index}`)
    .then(response => setLog(response.data))
    .catch(error => Navigate(`/404`))
  },
    /* 
    We need to GET the log from our DB to display to our user
    1. Get the INDEX it exists at in the db
    2. GET the data
    3. Display it to our user in state;
  */
    [index]
  );
  const handleDelete = () => {
    axios.delete(`${API}/logs/${index}`)
    .then((error) => console.log(error))
    /* 
      We need to send a DELETE request to our DB 
      1. Get the INDEX of our log
      2. send the DELETE request to our API
      3. < what do we need to do after this works ? >
    */
  };

  return (
    <article>
      <h3>
        {log.mistakeMade ? <span>⭐️</span> : null} {log.name}
      </h3>
      <h5>
        <span>
          <a href={log.url}>{log.name}</a>
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {log.url}
      </h5>
      <h6>{log.category}</h6>
      <p>{log.description}</p>
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
