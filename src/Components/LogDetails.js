import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const LogDetails = () => {
    const [log, setLog] = useState({});
    let { index } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/logs/${index}`)
        .then(res => setLog(res.data))
        .catch(err => navigate())
    }, [index, navigate])

    const handleBack = () => {
        navigate('/logs')
    }

    const handleDelete = () => {
        axios.delete(`${API}/logs/${index}`)
        .then(res => navigate("/logs"))
        .catch(err => console.error(err))
    };

    return (
        <div className="LogDetails">
            <header>{log.title} - By {log.captainName}</header>
            <p>{log.post}</p>
            <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
            <button type="submit" onClick={handleBack}>Back</button>
            <Link to={`/logs/${index}/edit`} >
            <button type="submit">Edit</button>
            </Link>
            <button type="submit" onClick={handleDelete}>Delete</button>
        </div>
    )
};

export default LogDetails;