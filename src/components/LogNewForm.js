import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function LogNewForm() {
    const navigate = useNavigate();
    const URL = process.env.REACT_APP_API_URL;
    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: ""
    });

    const handleTextChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value});
    };

    const handleCheckboxChange = () => {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday});
    };

    const addLog = (newLog) => {
        axios.post(`${URL}/logs`, newLog)
        .then(() => navigate("/logs"))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addLog(log)
    };

    return (
        <div className="New">
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
            id="title"
            value={log.title}
            type="text"
            onChange={handleTextChange}
            placeholder="Title"
            required
            />
            <label htmlFor="captainName">Captain's Name:</label>
            <input
            id="captainName"
            type="text"
            required
            value={log.captainName}
            placeholder="Captain's Name"
            onChange={handleTextChange}
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
            <label htmlFor="mistakesWereMadeToday">Mistakes were made today?:</label>
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
            <button>Submit</button>
        </form>
        <Link to={`/logs`}>
            <button>Delete</button>
        </Link>
        </div>
    );
}

export default LogNewForm;