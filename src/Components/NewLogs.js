import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const API = process.env.REACT_APP_API_URL;

export default function NewLogs() {
  const [logs, setLogs] = useState({

    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const navigate = useNavigate();

  const addLog = () => {
    axios.post(`${API}/logs`, logs)
      .then(response => navigate(`/logs`)) 
      .catch(error => console.error(error)) 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addLog();
  }
  
  const handleTextChange = (event) => {
    setLogs({...logs, [event.target.id]: event.target.value})
  }

  const handleCheckboxChange = () => {
    setLogs({...logs, mistakesWereMadeToday: !logs.mistakesWereMadeToday })
  }

  return (
    <div className='newLogs'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='captainName'>Captain's Name:</label>
        <input
          id="captainName"
          value={logs.captainName}
          type='text'
          onChange={handleTextChange}
          placeholder="Captain's Name"
          required
        />

        <label htmlFor='title'>Title:</label>
        <input
          id="title"
          value={logs.title}
          type='text'
          onChange={handleTextChange}
          placeholder="Title"
          required
        />

        <label htmlFor='post'>Post:</label>
        <textarea
          id="post"
          value={logs.post}
          type='text'
          onChange={handleTextChange}
          placeholder="post"
          required
        />

        <label htmlFor="mistakesWereMadeToday">Mistakes were made today?</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={logs.mistakesWereMadeToday}
        />

        <label htmlFor='daysSinceLastCrisis'>Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          value={logs.daysSinceLastCrisis}
          type="number"
          onChange={handleTextChange}
          placeholder="0"
        />

        <br />
        <input type='submit' />
      </form>
    </div>
  )
}
