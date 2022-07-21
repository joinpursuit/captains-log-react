import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

const LogEditForm = () => {
  const navigate = useNavigate();
  const { index } = useParams();
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => {
        setLog(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/logs/${index}`, log)
      .then((res) => {
        navigate(`/logs/${index}`);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input id="captainName" type="text" onChange={handleTextChange}></input>
        <label htmlFor="title">Title: </label>
        <input id="title" type="text" onChange={handleTextChange}></input>
        <label htmlFor="post">Post: </label>
        <textarea id="post" type="text" onChange={handleTextChange} />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
        ></input>
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          onChange={handleTextChange}
        ></input>
        <input type="submit" />
        <Link to={`/logs/${index}`}>
          <button>Back</button>
        </Link>
      </form>
    </div>
  );
};

export default LogEditForm;
