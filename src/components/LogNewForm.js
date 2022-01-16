import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const API_URL = process.env.REACT_APP_API;

function LogNewForm() {
    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0,
    });

    const navigate = useNavigate();

    const handleText = (e) => {
        setLog({...log, [e.target.id]: e.target.value})
    }

    const handleCheckbox = () => {
        setLog({...log, mistakesWereMadeToday: !log.mistakesWereMadeToday})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API_URL}/logs`, log)
             .then(res => navigate("/logs"))
             .catch(err => console.log(err))
    }

    return (
        <div className="new-form">
            <div className="form-center">
                <form onSubmit={handleSubmit}>
                    <div className="form-section">
                        <label htmlFor="captainName">Captain's Name</label>
                        <input className="input-text" id="captainName" value={log.captainName} type="text" onChange={handleText} required />
                    </div>

                    <div className="form-section">
                        <label htmlFor="title">Title</label>
                        <input className="input-text" id="title" value={log.title} type="text" onChange={handleText} required />
                    </div>

                    <div className="form-section">
                        <label htmlFor="post">Post</label>
                        <textarea id="post" value={log.post} onChange={handleText} required></textarea>
                    </div>


                    <div className="form-section">
                        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
                        <input className="input-text" id="daysSinceLastCrisis" value={log.daysSinceLastCrisis} type="number" onChange={handleText} required />
                    </div>

                    <div className="form-section">
                        <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
                        <input id="mistakesWereMadeToday" checked={log.mistakesWereMadeToday} type="checkbox" onChange={handleCheckbox} />
                    </div>

                    <div className="center"><input className="submit-btn" type="submit" /></div>
                </form>
            </div>
        </div>
    )
}

export default LogNewForm;