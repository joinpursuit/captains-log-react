import React from "react";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const API_BASE = apiURL();

function LogDetails(props) {
  const { deleteLog } = props;
  const [log, setLog] = useState({});

  let { index } = useParams();
  let history = useHistory()

  useEffect(() => {
    axios.get(`${API_BASE}/logs/${index}`).then((res) => {
      const { data } = res;
      setLog(data);
    }).catch((e) => {
        history.push("/not-found")
    })
  }, [index, history]);
  return (
  <div>
    <h2>{log.date}</h2>
  </div>
  )
}

export default LogDetails;
