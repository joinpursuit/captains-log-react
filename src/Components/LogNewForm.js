import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const API = process.env.REACT_APP_API_URL;

const LogNewForm = () => {
  const [log, setLog] = useState({
    captainName: '',
    title: '',
    post: '',
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const addLog = (newLog) => {
    axios
      .post(`${API}/logs`, newLog)
      .then(() => {
        navigate(`/logs`);
      })
      .catch((c) => console.error('catch', c));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addLog(log);
  };

  return (
    <div className='New'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='captainName'>Captain's Name:</label>
        <input
          id='captainName'
          name='captainName'
          value={log.captainName}
          type='text'
          onChange={handleTextChange}
          placeholder='Captain Name'
          required
        />
        <label htmlFor='title'>Title:</label>
        <input
          id='title'
          name='title'
          type='text'
          required
          value={log.title}
          placeholder='title'
          onChange={handleTextChange}
        />
        <label htmlFor='post'>Post:</label>
        <textarea
          id='post'
          type='textarea'
          name='post'
          value={log.post}
          placeholder='What happened today?'
          onChange={handleTextChange}
        />
        <label htmlFor='daysSinceLastCrisis'>Days Since Last Crisis:</label>
        <input
          id='daysSinceLastCrisis'
          type='number'
          name='daysSinceLastCrisis'
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
        />

        <label htmlFor='mistakesWereMadeToday'>Mistakes were made today</label>
        <input
          id='mistakesWereMadeToday'
          type='checkbox'
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />

        <br />
        <input type='submit' />
      </form>
    </div>
  );
};

export default LogNewForm;
