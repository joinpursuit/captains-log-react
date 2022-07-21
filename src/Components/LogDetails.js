import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

const LogDetails = () => {
  const [log, setLog] = useState([]);

  let navigate = useNavigate();

  let { index } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => setLog(response.data))
      .catch(() => navigate('/not-found'));
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/logs/${index}`)
      .then(() => {
        navigate(`/logs`);
      })
      .catch((e) => console.error(e));
  };

  return (
    <article>
      <h3>
        {log.title} - By {log.captainName}
      </h3>
      <h6>Post:{log.post}</h6>
      <p>  mistakesWereMadeToday {log.daysSinceLastCrisis ? 'true' : 'false'}
      </p>
      <p>Days since last crisis: {log.daysSinceLastCrisis}
      </p>
      <div className='showNavigation'>
        <div>
          {' '}
          <Link to={`/logs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {' '}
          <Link to={`/logs/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {' '}
          <Link to={`/logs`}>
            <button onClick={handleDelete}>Delete</button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default LogDetails;
