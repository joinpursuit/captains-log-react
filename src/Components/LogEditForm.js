import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
function LogEditForm() {
    // base url
    const URL = process.env.REACT_APP_API_URL;
    // the index from React Router
    const { index } = useParams();
    // the navigate function from React Router
    const navigate = useNavigate();

    const [log, setLog] = useState({
        name: "",
        url: "",
        category: "",
        description: "",
        isFavorite: false,
    });

    // make an API call to our back end
    // using the index from Router
    // call setLog with the Log the call returns
    useEffect(() => {
        axios
        .get(`${URL}/logs/${index}`)
        .then((response) => setLog(response.data));
    }, []);

    const handleTextChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setLog({ ...log, isFavorite: !log.isFavorite });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
        .put(`${URL}/logs/${index}`, log)
        .then(() => navigate(`/logs/${index}`));
    };

    return (
        <div className="Edit">
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
            id="name"
            value={log.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of Website"
            required
            />
            <label htmlFor="url">URL:</label>
            <input
            id="url"
            type="text"
            pattern="http[s]*://.+"
            required
            value={log.url}
            placeholder="http://"
            onChange={handleTextChange}
            />
            <label htmlFor="category">Category:</label>
            <input
            id="category"
            type="text"
            name="category"
            value={log.category}
            placeholder="educational, inspirational, ..."
            onChange={handleTextChange}
            />
            <label htmlFor="isFavorite">Favorite:</label>
            <input
            id="isFavorite"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={log.isFavorite}
            />
            <label htmlFor="description">Description:</label>
            <textarea
            id="description"
            name="description"
            value={log.description}
            onChange={handleTextChange}
            placeholder="Describe why you Logged this site"
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

export default LogEditForm;