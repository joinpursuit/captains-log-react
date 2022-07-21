import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

function LogEditForm() {
  let { index } = useParams();
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

  useEffect(() => {
    //Populate fields with existing data
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => {
        setLog(response.data);
      })
      .catch((e) => console.error(e));
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/logs/${index}`, log)
      .then(() => {
        navigate(`/logs/${index}`);
      })
      .catch((err) => console.warn(err));
  };

  return (
    <div className='Edit'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='captainName'>Captain's Name:</label>
        <input
          id='captainName'
          value={log.captainName}
          type='text'
          onChange={handleTextChange}
          placeholder="Captain's Name here"
          required
        />
        <label htmlFor='title'>Title:</label>
        <input
          id='title'
          type='text'
          required
          value={log.title}
          placeholder='Title here...'
          onChange={handleTextChange}
        />
        <label htmlFor='post'>Post:</label>
        <input
          id='post'
          type='text'
          name='post'
          value={log.post}
          placeholder='Post here...'
          onChange={handleTextChange}
        />
        <label htmlFor='mistakesWereMadeToday'>Mistakes made today:</label>
        <input
          id='mistakesWereMadeToday'
          type='checkbox'
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <label htmlFor='daysSinceLastCrisis'>Days Since Last Crisis:</label>
        <textarea
          id='post'
          type='number'
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder='Days since last crisis...'
        />
        <br />
        <input type='submit' />
      </form>
      <Link to={`/logs/${index}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default LogEditForm;
