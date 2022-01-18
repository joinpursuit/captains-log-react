import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const EditLog = () => {
  const { index } = useParams();
  const URL = `http://localhost:3003/logs/${index}`;
  const navigate = useNavigate();
  const [log, setLog] = useState({
    captainName: '',
    title: '',
    post: '',
    mistakesWereMadeToday: true,
    daysSinceLastCrisis: '',
  });

  useEffect(() => {
    (async () => {
      let response = axios.get(URL);
      setLog(response.data);
    })();
  }, []);

  const handleChange = (evt) => {
    setLog({ ...log, [evt.target.id]: evt.target.value });
  };

  const handleCheckbox = (evt) => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios.put(URL, log).then(() => navigate(`/logs/${index}`));
  };

  return (
    <div className="edit">
      <h1>Edit</h1>
      <form onSubmit={handleSubmit}>
        <label for="captainName">
          Captain's Name:
          <br />
        </label>
        <input
          type="text"
          name="captainName"
          id="captainName"
          value={log.captainName}
          onChange={handleChange}
        ></input>
        <label for="title">
          <br />
          Title
          <br />
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={log.title}
          onChange={handleChange}
        ></input>
        <label for="post">
          <br />
          Post
          <br />
        </label>
        <textarea
          name="post"
          id="post"
          value={log.post}
          onChange={handleChange}
          placeholder="What Happened Today?"
        ></textarea>
        <label for="daysSinceLastCrisis">
          <br />
          Days Since Last Crisis
          <br />
        </label>
        <input
          type="number"
          name="daysSinceLastCrisis"
          id="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          onChange={handleChange}
        ></input>
        <label for="mistakesWereMadeToday">
          <br />
          Mistakes were made today:
          <br />
        </label>
        <input
          type="checkbox"
          name="mistakesWereMadeToday"
          id="mistakesWereMadeToday"
          value={log.mistakesWereMadeToday}
          onChange={handleCheckbox}
        ></input>
        <br />
        <input type="submit" />
      </form>
      <Link to={`/logs`}>
        <button onClick={<Link to={`/logs`} />} name="Back">
          Back
        </button>
      </Link>
    </div>
  );
};

export default EditLog;
