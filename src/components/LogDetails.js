import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";
const API = apiURL();

const LogDetails = ({ deleteLog }) => {

    
  const [log, setLog] = useState({});
  let { index } = useParams();
  let history = useHistory();


  useEffect(() => {
    const fetchLogDetails = async () => {
      try {
        const res = await axios.get(`${API}/logs/${index}`);
        setLog(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLogDetails();
  }, []);

  const handleDelete = () => {
    deleteLog(index);
    history.push("/logs");
  };

  return (
    <div>
      <h2>Show</h2>
      <h2>
        {log.title} - By {log.captainName}
      </h2>
      <p>Post: {log.post}</p>
      <p>
        Mistakes Were Made Today:{" "}
        {log.mistakesWereMadeToday === true ? "true" : "false"}
      </p>
      <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
      <Link to={"/logs"}>
        <button>Back</button>
      </Link>
      <Link to={`/logs/${index}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default LogDetails;
