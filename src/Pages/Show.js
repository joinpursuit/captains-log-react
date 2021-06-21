import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../util/apiURL";

const API = apiUrl();

export default function Show() {
  const [log, setLog] = useState([]);
  let { index } = useParams();
  let history = useHistory();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => {
        setLog(response.data);
      })
      .catch((error) => {
        history.push("/not-found");
      });
  }, [index, history]);
  return <div></div>;
}
