import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import { convertCompilerOptionsFromJson } from "typescript";


const API_BASE = apiURL();

function LogEditForm(props) {
    let { index } = useParams();
    let history = useHistory();

    const [ log, setLog] = useState({
      captainName: "",
      title: "",
      post: "",
      mistakesWereMadeToday: false,
      daysSinceLastCrisis: 0,
    })

    const handleTextChange = (e) => {
        setLog({...log, [e.target.id] : e.target.value})
    };

    const handleCheckboxChange = () => {
        setLog({...log, mistakesWereMadeToday : log.mistakesWereMadeToday})
    }

    useEffect(() => {
        axios.get(`${API_BASE}/logs/${index}`)
        .then(response => {
            setLog(response.data);
        },
        error => console.error(`Error: ${error}`)
        )
        .catch(c => console.warn(`Warning: ${c}`))
    }, [index, history, API_BASE])

    const handleSubmit = (e) => {
        e.preventDefault();
        props.updateLog(log, index);
        history.push(`/logs/${index}`);
    }
    return (
        <div className="Edit">
            <form onSubmit={handleSubmit}>
                <label htmlFor="captainName">Captain's Name:</label>
                <input 
                    id="captainName"
                    type="text"
                    value={log.captainName}
                    onChange={handleTextChange}
                    placeholder="Name of Captain"
                    required
                />
                <label htmlFor="title">Title:</label>
                <input 
                    id="title"
                    type="text"
                    value={log.title}
                    onChange={handleTextChange}
                    placeholder="Title of Captain"
                    required
                />
                <label htmlFor="daysSinceLastCrisis">How many days has it been since last crisis?</label>
                <input 
                    id="daysSinceLastCrisis"
                    type="number"
                    value={log.daysSinceLastCrisis}
                    onChange={handleTextChange}
                    placeholder="Days Since last crisis"
                    required
                />
                <label htmlFor="mistakesWereMadeToday">Made any mistake today:</label>
                <input 
                    id="mistakesWereMadeToday"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={log.mistakesWereMadeToday}
                />
                <br />
                <label htmlFor="post">Post:</label>
                <textarea
                    id="post"
                    name="post"
                    value={log.post}
                    onChange={handleTextChange}
                    placeholder="Post your log here!"
                />

                <br />
                <input type="submit" />
            </form>
            <Link to={`/logs/${index}`}>
                <button>Nevermind!</button>
            </Link>
        </div>
    )
}

export default LogEditForm
