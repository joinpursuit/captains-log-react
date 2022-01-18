import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios"

function LogDetails() {
    const navigate = useNavigate();
    const [log, setLog] = useState([]);
    const { index } = useParams();
    const URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${URL}/logs/${index}`)
        .then((response) => setLog(response.data))
    }, [URL, index])


    const handleDelete = () => {
        axios.delete(`${URL}/logs/${index}`)
        .then(() => navigate("/logs"));
    };
    
    return (
        <article>
        <h2>{log.title} - By {log.captainName}</h2>
        <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
        <p>Any Mistakes? {log.mistakesWereMadeToday ? <span>Yes</span> : <span>No</span>}</p>
        <p>Post: {log.post}</p>
        <div className="showNavigation">
            <div>
            {" "}
            <Link to={`/logs`}>
                <button>Back</button>
            </Link>
            </div>
            <div>
            {" "}
            <Link to={`/logs/${index}/edit`}>
                <button>Edit</button>
            </Link>
            </div>
            <div>
            {" "}
            <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
        </article>
    );
}

export default LogDetails;