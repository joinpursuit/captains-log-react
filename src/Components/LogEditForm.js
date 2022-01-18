import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
function LogEditForm() {
    // base url
    const URL = process.env.REACT_APP_API_URL;
    // the index from React Router
    const { index } = useParams();
    // the navigate function from React Router
    const navigate = useNavigate();

    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        daysSinceLastCrisis: 0,
        mistakesWereMadeToday: false,
    });

    // make an API call to our back end
    // using the index from Router
    // call setLog with the Log the call returns
    useEffect(() => {
        axios
        .get(`${URL}/logs/${index}`)
        .then((response) => setLog(response.data));
    }, []);

    const handleTextChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
        .put(`${URL}/logs/${index}`, log)
        .then(() => navigate(`/logs/${index}`));
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
            placeholder="Name"
            required
            />
            <label htmlFor="title">Title:</label>
            <textarea
            id="title"
            type="text"
            // pattern="http[s]*://.+"
            required
            value={log.title}
            // placeholder="http://"
            onChange={handleTextChange}
            />
            <label htmlFor="post">Post:</label>
            <textarea
            id="post"
            // type="text"
            name="post"
            value={log.post}
            placeholder="Today ..."
            onChange={handleTextChange}
            />
            <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
            <textarea
            id="daysSinceLastCrisis"
            name="daysSinceLastCrisis"
            value={log.daysSinceLastCrisis}
            onChange={handleTextChange}
            placeholder="0"
            />
            <label htmlFor="mistakesWereMadeToday">Mistakes Were Made Today:</label>
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