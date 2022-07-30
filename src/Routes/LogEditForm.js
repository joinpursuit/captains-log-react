import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LogEditForm() {
  const API_URL = process.env.REACT_APP_API_URL;
  const { index } = useParams();
  const navigate = useNavigate();

    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0,
    });

    const handleTextChange = (e) => {
        setLog({ ...log, [e.target.id]: e.target.value });
    };

    const handleCheckboxChange = () => {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
    };

    useEffect(() => {
        axios.get(`${API_URL}/logs/${index}`)
        .then((res) => {
          setLog(res.data);
        })
        .catch((err) => {
          navigate("/not-found");
        });
    }, [index, navigate, API_URL]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${API_URL}/logs/${index}`, log)
        .then(() => {
          navigate(`/logs/${index}`);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return (
        <div className="Edit">
          <form onSubmit={handleSubmit}>
            <label htmlFor="captainName">Captain's Name:</label>
            <input
              id="captainName"
              value={log.captainName}
              type="text"
              onChange={handleTextChange}
              placeholder="Name of the Captain"
              required
            />
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              type="text"
              value={log.title}
              placeholder="Log name"
              onChange={handleTextChange}
            />
            <label htmlFor="post">Post:</label>
            <textarea
              id="post"
              type="text"
              name="post"
              value={log.post}
              placeholder="The Captain's signature quote"
              onChange={handleTextChange}
            />
            <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
            <input
              id="daysSinceLastCrisis"
              type="number"
              name="daysSinceLastCrisis"
              value={log.daysSinceLastCrisis}
              onChange={handleTextChange}
              placeholder="Days of Incident"
            />
            <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
            <input
              id="mistakesWereMadeToday"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={log.mistakesWereMadeToday}
            />
            <br />

            <input type="submit" />
          </form>
          <Link to={`/logs/${index}`}>
              <button>Back</button>
          </Link>
        </div>
    );
}

export default LogEditForm;