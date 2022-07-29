import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

const LogNewForm = () => {
    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0,
    });

    const navigate = useNavigate();

    const addNewLog = () => {
        axios.post(`${API}/logs`, log)
        .then(res => navigate("/logs"))
        .catch(err => console.log(err))
    }

    const handleChange = (e) => {
        setLog({...log, [e.target.id]: e.target.value})
    };

    const handleCheckbox = (e) => {
        setLog({...log, mistakesWereMadeToday: !log.mistakesWereMadeToday})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewLog();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Captain's Name:
                    <input type="text" id="captainName" value={log.captainName} onChange={handleChange}></input>
                </label>
                <br/>
                <label>
                    Title: 
                    <input type="text" id="title" value={log.title} onChange={handleChange}></input>
                </label>
                <br/>
                <label>Post:</label>
                <textarea id="post" type="text" value={log.post} onChange={handleChange}></textarea>
                <br/>
                <label>Mistakes were made today</label>
                <input type="checkbox" id="mistakesWereMadeToday" value={log.mistakesWereMadeToday} onChange={handleCheckbox}></input>
                <br/>
                <label>
                    Days Since Last Crisis?
                    <input type="number" id="daysSinceLastCrisis" value={log.daysSinceLastCrisis} onChange={handleChange}></input>
                </label>
                <br/>
                <input type="submit"></input>
            </form>
        </div>
    )
};

export default LogNewForm;