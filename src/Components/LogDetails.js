import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

function LogDetails() {
  const [log, setLog] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}/logs/${index}`).then((response) => {
      setLog(response.data);
    });
    //   .catch(() => {
    //     navigate('/not-found');
    //   });
  }, [index]);

  const handleDelete = () => {
    axios
      .delete(`${API}/logs/${index}`)
      .then(() => {
        navigate(`/logs`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <article>
      <h1>Captian's Log</h1>
      <h2>Name: {log.captainName}</h2>
      <h2>Title: {log.title}</h2>
      <p>{`${log.title} - By ${log.captainName}`}</p>
      <p>Post: {log.post}</p>
      <p>mistakeWereMadeToday: {log.mistakeWereMadeToday ? 'No' : 'Yes'}</p>
      <p>{`Day since last crisis: ${log.daysSinceLastCrisis}`}</p>
      <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
      <div className='showNavigation'>
        <div>
          <Link to={`/logs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/logs/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default LogDetails;
