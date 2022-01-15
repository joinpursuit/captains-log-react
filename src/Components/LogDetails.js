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
        // make a delete request to /bookmarks/:index
        axios
        .delete(`${URL}/logs/${index}`)
        .then(() => navigate("/logs"));
        // redirect them to back to /bookmarks
    };

    return (
        <article>
        <h3>
            {log.isFavorite ? <span>⭐️</span> : null} {log.name}
        </h3>
        <h5>
            <span>
            <a href={log.url}>{log.name}</a>
            </span>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {log.url}
        </h5>
        <h6>{log.category}</h6>
        <p>{log.description}</p>
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