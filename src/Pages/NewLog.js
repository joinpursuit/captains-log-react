import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function NewLog () {
    const { index } = useParams;
    const URL = process.env.REACT_APP_API_URL
    const [ log, setLog ] = useState ({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: true,
        daysSinceLastCrisis: "",
    })
    const navigate = useNavigate();

    // useEffect(() => {
    //     axios.get(URL)
    //     .then(res => {
    //         setLog(res.data)
    //     })
    // }, [index])

    const handleTextChange = (e) => {
        setLog({...log, [e.target.id]: e.target.value})
    }

    const handleCheckboxChange = (e) => {
        setLog({...log}, {mistakesWereMadeToday: !log.mistakesWereMadeToday})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${URL}/logs`, log)
        .then(res => navigate(`/logs`))
    }

    return (
        <div className="NewLog">
            <h1>New</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="captainName">Captain's Name:</label>
                <input type="text" id="captainName" value={log.captainName} onChange={handleTextChange} />
                <br />
                <label htmlFor="title">Title</label>
                <input type="text" id="title" value={log.title} onChange={handleTextChange} />
                <br />
                <label htmlFor="post">Post:</label>
                <textarea type="text" id="post" value={log.post} onChange={handleTextChange} />
                <br />
                <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
                <texarea type="number" id="daysSinceLastCrisis" checked={log.daysSinceLastCrisis} onChange={handleTextChange} />
                <br />
                <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
                <input type="checkbox" id="mistakesWereMadeToday" value={log.mistakesWereMadeToday} onCheck={handleCheckboxChange} />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default NewLog;