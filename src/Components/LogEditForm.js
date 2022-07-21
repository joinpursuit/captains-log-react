
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function LogsEditForm() {
  let { index } = useParams();
  const navigate = useNavigate();

  const [log, setLog] = useState({
    captainName: '',
    title: '',
    post: '',
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: '',
  });

  useEffect(() => {
    //Let's autopopulate form fields with existing bookmark data
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => {
      
        setLog(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [index]);

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
        navigate(`/logs/${index}`);
      })
      .catch((err) => {
        console.warn(err);
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
          placeholder='Title'
          onChange={handleTextChange}
        />
        <label htmlFor='post'>Post:</label>
        <textarea
          id='post'
          type='text'
          required
          value={log.post}
          placeholder='Post'
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
      <div>
        <Link to={`/logs`}>
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}
