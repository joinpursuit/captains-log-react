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
        <div className="Edit container p-5 my-5 bg-warning text-dark rounded">
            <form onSubmit={handleSubmit}>
            <div className="form-floating mb-2 mt-2">
                <input
                className="form-control"
                id="title"
                type="text"
                required
                value={log.title}
                placeholder="Title"
                onChange={handleTextChange}
                />
                <label htmlFor="title">Title:</label>
            </div>
            <div className="form-floating mb-3 mt-3">
                <input
                className="form-control"
                id="captainName"
                value={log.captainName}
                type="text"
                onChange={handleTextChange}
                placeholder="Captain's Name"
                required
                />
                <label htmlFor="captainName">Captain's Name:</label>
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
                <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
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
                <label htmlFor="post">Post:</label>
            </div>
            <br />
            <button className="btn btn-primary">Edit</button>
            </form>
            <div className="btn-group">
                <Link className="" to={`/logs/${index}`}>
                    <button className="btn btn-danger m-3">Nevermind!</button>
                </Link>
                <Link to={`/logs`}>
                    <button className="btn btn-success m-3">Back to Index</button>
                </Link>
            </div>
        </div>
    );
}

export default LogEditForm;
