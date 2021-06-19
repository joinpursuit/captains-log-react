import React from "react";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_BASE = apiURL();

function LogDetails(props) {
  // const { deleteLog } = props;
  const [log, setLog] = useState({});

  let { i } = useParams();
  let history = useHistory();

  useEffect(() => {
    axios.get(`${API_BASE}/logs/${i}`).then((res) => {
      const { data } = res;
      setLog(data);
    });
  }, [i, history]);
  
  return (
    <div>
      <h2>{log.title}</h2>
      <p>{log.post}</p>
      <p>{log.daysSinceLastCrisis}</p>
      <Link to={`/logs`}>
        <button>Back</button>
      </Link>
      <Link to="/logs">
        {" "}
        <button>Delete</button>{" "}
      </Link>
      <Link to={`/logs/${i}/edit`}>
        {" "}
        <button>Edit</button>{" "}
      </Link>
    </div>
  );
}

export default LogDetails;
