import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

// UPDATE page!!! 

const API = process.env.REACT_APP_API_URL;

function LogEditForm() {
    let { index } = useParams();
    const navigate = useNavigate();

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
        setLog({ ...log, isFavorite: !log.isFavorite });
    };

    useEffect(() => {
        axios.get(`${API}/logs/${index}`)
            .then(res => setLog(res.data))
            .catch(err => console.log(err))
    }, []);


    const updateLog = () => {
        axios.put(`${API}/logs/${index}`, log)
            .then(res => {
                setLog(res.data)
                navigate(`/logs/${index}`) 
            })
            .catch(err => console.error(err))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updateLog();

    };

    return (
        <div className="Edit">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    id="captainName"
                    value={log.captainName}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Captain's Name"
                    required
                />
                <label htmlFor="title">Title of Entry:</label>
                <input
                    id="title"
                    value={log.title}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Title of Entry"
                    required
                />
                <label htmlFor="post">Post:</label>
                <input
                    id="post"
                    value={log.post}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Entry.."
                    required
                />
                <label htmlFor="mistakesWereMadeToday">Mistakes Were Made Today:</label>
                <input
                    id="mistakesWereMadeToday"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={log.mistakesWereMadeToday}
                />
                <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
                <textarea
                    id="daysSinceLastCrisis"
                    name="daysSinceLastCrisis"
                    value={log.daysSinceLastCrisis}
                    onChange={handleTextChange}
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



export default LogEditForm