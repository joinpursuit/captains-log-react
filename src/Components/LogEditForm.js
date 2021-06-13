import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

import { apiURL } from '../util/apiURL';
const API = apiURL();

const LogEditForm = (props) => {
  let { index } = useParams();
  let history = useHistory();

  const [log, setLog] = useState({
    name: "",
    url: "",
    category: "",
    description: "",
    isFavorite: false,
  });

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, isFavorite: !log.isFavorite });
  };

  const fetchlog = async () => {
    try {
      const res = await axios.get(`${API}/logs/${index}`);
      setLog(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchlog();
  },);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await props.updatelog(log, index);
    history.push(`/logs/${index}`);
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain Name:</label>
        <input
          id="captainName"
          type="text"
          required
          value={log.captainName}
          placeholder="Captain Name"
          onChange={handleTextChange}
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={log.title}
          type="text"
          onChange={handleTextChange}
          placeholder="Title"
          required
        />
        <label htmlFor="post">Post:</label>
        <input
          id="post"
          type="text"
          name="post"
          value={log.post}
          placeholder="educational, inspirational, ..."
          onChange={handleTextChange}
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes Were Made Today: </label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={log.description}
          onChange={handleTextChange}
          placeholder="Describe why you loged this site"
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/logs/${index}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default LogEditForm;
