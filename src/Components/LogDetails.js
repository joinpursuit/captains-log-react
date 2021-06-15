import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { apiURL } from "../util/apiURL";

function LogDetails(props) {
  const [log, setLog] = useState([]);
  let { index } = useParams();

  let history = useHistory();

  useEffect(() => {
    axios.get(`${apiURL()}/logs/${index}`).then(
      (response) => {
        setLog(response.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }, [index]);

  const handleDelete = () => {
    props.deleteLog(index);
    history.push("/logs");
  };

  return (
    <div>
      <h3>Show</h3>
      <h4>
        {log.title} - By {log.captainName}
      </h4>
      <p>{log.post}</p>
      {log.mistakesWereMadeToday ? (
        <p>Mistakes were made</p>
      ) : (
        <p>No mistakes were made</p>
      )}
      <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
      <a href="/logs">Back</a>
      <Link to={`/logs/${index}/edit`}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default LogDetails;
