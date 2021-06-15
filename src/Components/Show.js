import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const API = apiURL();

export default function Show({ deleteLog }) {

  const [log, setLog] = useState({});
  let { index } = useParams();
  let history = useHistory();

  const fetchLog = async () => {
    try {
      const res = await axios.get(`${API}/logs/${index}`);
      setLog(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    fetchLog();
  }, []);

  const handleDelete = () => {
    deleteLog(index);
    history.push('/logs');
  };

  // debugger
  return (
    <div>
      <h1>Captain's Log</h1>
      <h2>Show</h2>
      <main>
        <h3>{log[index].title} - By {log[index].captainName}</h3>
        <p>{log[index].post}</p>
        <h4>Days since last crisis: {log[index].daysSinceLastCrisis}</h4>
        <a href="/logs">Back</a>
        {/* <Link to="/logs">Back</Link> */}
        <a href={`/logs/${index}/edit`}>Edit</a>
        {/* <Link to=`/logs/${index}/edit`>Delete/Edit</Link> */}

      </main>
    </div>
  );
}
