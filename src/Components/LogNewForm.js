import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogNewForm() {
    const navigate = useNavigate();
    const URL = process.env.REACT_APP_API_URL;
    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        daysSinceLastCrisis: 0,
        mistakesWereMadeToday: false,
    });

    const handleTextChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
    };

    const addLog = (newLog) => {
        axios
        .post(`${URL}/logs`, newLog)
        .then(() => navigate("/logs"));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${URL}/logs`, log).then(() => navigate("/logs"));
    };

    return (
        <div className="New">
        <form onSubmit={handleSubmit}>
            <label htmlFor="captainName">Captain's Name</label>
            <input
            id="captainName"
            value={log.captainName}
            type="text"
            onChange={handleTextChange}
            placeholder="Name"
            required
            />
            <label htmlFor="title">Title</label>
            <input
            id="title"
            type="text"
            // pattern="http[s]*://.+"
            required
            value={log.title}
            // placeholder="http://"
            onChange={handleTextChange}
            />
            <label htmlFor="post">Post</label>
            <textarea
            id="post"
            name="post"
            value={log.post}
            placeholder="Today ..."
            onChange={handleTextChange}
            />
            <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
            <input
            id="daysSinceLastCrisis"
            type="number"
            name="daysSinceLastCrisis"
            value={log.daysSinceLastCrisis}
            onChange={handleTextChange}
            placeholder="0"
            />
            <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
            <input
            id="mistakesWereMadeToday"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={log.mistakesWereMadeToday}
            />
            <br />
            <input type="submit" />
        </form>
        </div>
    );
}

export default LogNewForm;