import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

function LogDetail() {
  const { index } = useParams();

  const nav = useNavigate();

  const [log, setLog] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => {
        setLog(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = () => {
    axios.delete(`${API}/logs/${index}`).then(() => nav('/logs'));
  };

  return (
    <div>
      <h1>Captain's Log Show</h1>
      <h2>
        {log.title} - By {log.captainName}
      </h2>
      <p>{log.post}</p>
      <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
      <Link to={`/logs`}>
        <button>Back</button>
      </Link>
      <Link to={`/logs/${index}/edit`}>
        <button>Edit</button>
      </Link>
      <Link to={`/logs`}>
        <button onClick={handleDelete}>Delete</button>
      </Link>
    </div>
  );
}

export default LogDetail;
