import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

function LogEdit() {
  let { index } = useParams();
  const nav = useNavigate();

  const [log, setLog] = useState({
    captainName: '',
    title: '',
    post: '',
    daysSinceLastCrisis: 0,
    mistakesWereMadeToday: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'mistakesWereMadeToday') {
      setLog({ ...log, [name]: !log.mistakesWereMadeToday });
    } else {
      setLog({ ...log, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(log);
    axios.put(`${API}/logs/${index}`, log).then(() => nav(`/logs/${index}`));
  };

  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((response) => {
        setLog(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="Edit">
      <h1>Captain's Log Edit</h1>
      <form onSubmit={handleSubmit} onChange={handleChange} action="">
        <label htmlFor="name">Captain's Name:</label>
        <input name="captainName" id="captainName" type="text" />
        <label htmlFor="title">Title:</label>
        <input name="title" id="title" type="text" />
        <label htmlFor="post">Post:</label>
        <textarea name="post" type="text" id="post" />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          name="daysSinceLastCrisis"
          type="number"
          id="daysSinceLastCrisis"
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          name="mistakesWereMadeToday"
          id="mistakesWereMadeToday"
          type="checkbox"
        />
        <input type="submit" />
      </form>
      <Link to={`/logs`}>Back</Link>
    </div>
  );
}

export default LogEdit;
