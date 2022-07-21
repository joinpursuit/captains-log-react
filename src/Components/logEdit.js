import axios from 'axios';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';
const API = process.env.REACT_APP_API_URL;

function LogEdit() {
  const navigate = useNavigate();
  let { arrayIndex } = useParams();

  const [log, setLog] = useState({
    name: '',
    url: '',
    category: '',
    description: '',
    madeMistake: false,
  });

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, madeMistake: !log.madeMistake });
  };

  useEffect(() => {
    axios
      .get(`${API}/logs/${arrayIndex}`)
      .then((response) => {
        setLog(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/logs/${arrayIndex}`, log)
      .then(() => {
        navigate(`/logs/${arrayIndex}`);
      })
      .catch((error) => {
        console.warn(error);
      });
  };
  return (
    <div className='Edit'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          id='name'
          value={log.name}
          type='text'
          onChange={handleTextChange}
          placeholder='Name of Website'
          required
        />
        <label htmlFor='url'>URL:</label>
        <input
          id='url'
          type='text'
          pattern='http[s]*://.+'
          required
          value={log.url}
          placeholder='http://'
          onChange={handleTextChange}
        />
        <label htmlFor='category'>Category:</label>
        <input
          id='category'
          type='text'
          name='category'
          value={log.category}
          placeholder='educational, inspirational, ...'
          onChange={handleTextChange}
        />
        <label htmlFor='isFavorite'>Favorite:</label>
        <input
          id='isFavorite'
          type='checkbox'
          onChange={handleCheckboxChange}
          checked={log.madeMistake}
        />
        <label htmlFor='description'>Description:</label>
        <textarea
          id='description'
          name='description'
          value={log.description}
          onChange={handleTextChange}
          placeholder='Describe why you bookmarked this site'
        />
        <br />

        <input type='submit' />
      </form>
      <Link to={`/bookmarks/${arrayIndex}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}
export default LogEdit;
