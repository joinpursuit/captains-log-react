import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios"

function LogDetails() {
    const navigate = useNavigate();
    const [log, setLog] = useState([]);
    const { index } = useParams();
    const URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(URL+"/logs/"+index)
        .then((response) => setLog(response.data))
    }, [URL, index])

    const deleteLog = () => {
        axios.delete(`${URL}/logs/${index}`)
        .then(() => navigate("/logs"));
    };

    const handleDelete = () => {
        deleteLog()
    };
    
    return (
        <article className="container p-5 my-5 bg-warning text-dark rounded">
            <h2>{log.title} - By {log.captainName}</h2>
            <p>Days since last crisis: <span className="badge bg-primary mt-3">{log.daysSinceLastCrisis}</span></p>
            <p>Any Mistakes? {log.mistakesWereMadeToday ? <span className="badge bg-success">Yes</span> : <span className="badge bg-danger">No</span>}</p>
            <p className="container p-3 bg-secondary text-white rounded"><span className="badge bg-warning text-dark">Post</span><span className=""> {log.post}</span></p>
            <div className="showNavigation btn-group mt-2 gap-3">
                <div>
                {" "}
                <Link to={`/logs`}>
                    <button className="btn btn-success">Back</button>
                </Link>
                </div>
                <div>
                {" "}
                <Link to={`/logs/${index}/edit`}>
                    <button className="btn btn-primary">Edit</button>
                </Link>
                </div>
                <div>
                {" "}
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </article>
    );
}

export default LogDetails;
