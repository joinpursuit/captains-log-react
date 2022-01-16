import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios"

function LogEditForm() {
    const navigate = useNavigate()
    const { index } = useParams();
    const URL = process.env.REACT_APP_API_URL;

    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: "",
    });

    const handleTextChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
    };

    useEffect(() => {
        axios.get(`${URL}/logs/${index}`)
        .then((response) => setLog(response.data))
    }, [URL, index])

    const updateLog = (editedLog) => {
        axios.put(`${URL}/logs/${index}`, editedLog)
        .then(() => navigate(`/logs/${index}`));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updateLog(log)
    };

    return (
        <div className="Edit">
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
            id="title"
            type="text"
            required
            value={log.title}
            placeholder="Title"
            onChange={handleTextChange}
            />
            <label htmlFor="captainName">Captain's Name:</label>
            <input
            id="captainName"
            value={log.captainName}
            type="text"
            onChange={handleTextChange}
            placeholder="Captain's Name"
            required
            />
            <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
            <input
            id="daysSinceLastCrisis"
            type="number"
            min="0"
            name="daysSinceLastCrisis"
            value={log.daysSinceLastCrisis}
            placeholder="Number of Days"
            onChange={handleTextChange}
            />
            <label htmlFor="mistakesWereMadeToday">Mistakes were made today?</label>
            <input
            id="mistakesWereMadeToday"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={log.mistakesWereMadeToday}
            />
            <label htmlFor="post">Post:</label>
            <textarea
            id="post"
            name="post"
            value={log.post}
            onChange={handleTextChange}
            placeholder="Log post"
            />
            <br />

            <button>Edit</button>
        </form>
        <Link to={`/logs/${index}`}>
            <button>Nevermind!</button>
        </Link>
        <Link to={`/logs`}>
            <button>Back to Index</button>
        </Link>
        </div>
    );
}

export default LogEditForm;
