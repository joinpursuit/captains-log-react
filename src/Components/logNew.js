import { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
const API = process.env.REACT_APP_API_URL;

function LogNew() {
  const navigate = useNavigate();
  const [log, setLog] = useState({
    name: '',
    url: '',
    category: '',
    madeMistake: false,
    description: '',
  });

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, madeMistake: !log.madeMistake });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/logs`, log)
      .then((response) => {
        navigate('/logs');
      })
      .catch((error) => {
        console.warn(error);
      });
  };
  return (
    <div className='New'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          id='name'
          value={log.name}
          type='text'
          onChange={handleTextChange}
          placeholder='Name of Captain'
          required
        />
        <label htmlFor='url'>Title:</label>
        <input
          id='url'
          type='text'
          required
          value={log.url}
          placeholder='Rank?'
          onChange={handleTextChange}
        />
        <label htmlFor='category'>Days Since Last Crisis:</label>
        <input
          id='category'
          type='Number'
          name='category'
          value={log.category}
          placeholder='0'
          onChange={handleTextChange}
        />
        <label htmlFor='madeMistake'>Mistakes were made today:</label>
        <input
          id='madeMistake'
          type='checkbox'
          onChange={handleCheckboxChange}
          checked={log.madeMistake}
        />
        <label htmlFor='description'>Post:</label>
        <textarea
          id='description'
          name='description'
          value={log.description}
          onChange={handleTextChange}
          placeholder='Something to report?'
        />
        <br />
        <input type='submit' />
      </form>
    </div>
  );
}

export default LogNew;
