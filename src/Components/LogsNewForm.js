
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

export default function LogsNewForm() {
  const navigate = useNavigate();
  const [log, setLog] = useState({
    captainName: '',
    title: '',
    post: '',
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: '',
  });

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/logs`, log)
      .then((res) => {
        //if the create request succeeds send
        navigate('/logs');
      })
      .catch((error) => {
        console.warn(error);
      });
  };
  return (
    <div className='New'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='captainName'>Captain's Name:</label>
        <input
          id='captainName'
          value={log.captainName}
          type='text'
          onChange={handleTextChange}
          placeholder='Name'
          required
        />
        <label htmlFor='title'>Title:</label>
        <input
          id='title'
          type='text'
          required
          value={log.post}
          placeholder='post'
          onChange={handleTextChange}
        />
        <label htmlFor='post'>Post:</label>
        <textarea
          id='post'
          type='text'
          required
          value={log.post}
          placeholder='post'
          onChange={handleTextChange}
        />

        <label htmlFor='mistakesWereMadeToday'>Mistakes were made today:</label>
        <input
          id='mistakesWereMadeToday'
          type='checkbox'
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <label htmlFor='daysSinceLastCrisis'>Days Since Last Crisis:</label>
        <input
          id='daysSinceLastCrisis'
          type='number'
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder='...'
        />
        <br />
        <input type='submit' />
      </form>
    </div>
  );
}
