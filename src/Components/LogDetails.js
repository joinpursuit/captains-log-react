import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function LogDetails() {
    const URL = process.env.REACT_APP_API_URL;
    const [log, setLog] = useState([]);
    const { index } = useParams();
    const navigate = useNavigate();

    // - make GET request to http://localhost:3003/bookmarks/:index
    // - use `setBookmark` to change our current bookmark
    //   to the data we get back
    useEffect(() => {
        axios
        .get(`${URL}/logs/${index}`)
        .then((response) => setLog(response.data));
    }, []);

    const handleDelete = () => {
        // make a delete request to /logs/:index
        axios
        .delete(`${URL}/logs/${index}`)
        .then(() => navigate("/logs"));
        // redirect them to back to /logs
    };

    return (
        <article>
        <h2>{`${log.title} - By ${log.captainName}`}</h2>
        <h5>{log.post}</h5>
        <p>Days since last crisis: {log.daysSinceLastCrisis}</p>

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