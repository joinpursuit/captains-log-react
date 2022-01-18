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
        <div className="New container p-5 my-5 bg-warning text-dark rounded">
        <form onSubmit={handleSubmit}>
            <div className="form-floating mb-2 mt-2">
                <input
                    className="form-control"
                    id="title"
                    value={log.title}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Title"
                    required
                />
                <label htmlFor="title">Title</label>
            </div>
            <div className="form-floating mb-3 mt-3">
                <input
                    className="form-control"
                    id="captainName"
                    type="text"
                    required
                    value={log.captainName}
                    placeholder="Captain's Name"
                    onChange={handleTextChange}
                />
                <label htmlFor="captainName">Captain's Name</label>
            </div>
            <div className="form-floating mb-3 mt-3">
                <input
                    className="form-control"
                    id="daysSinceLastCrisis"
                    type="number"
                    min="0"
                    name="daysSinceLastCrisis"
                    value={log.daysSinceLastCrisis}
                    placeholder="Number of Days"
                    onChange={handleTextChange}
                />
                <label htmlFor="daysSinceLastCrisis">How Many Days Since Last Crisis?</label>
            </div>
            <div className="form-check form-switch text-dark rounded">
                <input
                    className="list-group list-group-horizontal form-check-input"
                    id="mistakesWereMadeToday"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={log.mistakesWereMadeToday}
                />
                <label className="list-group list-group-horizontal form-check-label" htmlFor="mistakesWereMadeToday">Mistakes were made today?</label>
            </div>
            <div className="form-floating mb-3 mt-3">
                <textarea
                    className="form-control"
                    id="post"
                    name="post"
                    value={log.post}
                    onChange={handleTextChange}
                    placeholder="Log post"
                />
                <label htmlFor="post">Write a Post</label>
            </div>
            <br />
            <button className="btn btn-primary">Submit</button>
        </form>
        <Link to={`/logs`}>
            <button className="btn btn-danger mt-3">Delete</button>
        </Link>
        </div>
    );
}

export default LogNewForm;
