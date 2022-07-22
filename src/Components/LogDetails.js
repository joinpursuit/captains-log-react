import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function LogDetails() {
    const [logs, setLogs] = useState({});
    let { index } = useParams();

    const navigate = useNavigate();

    useEffect(
        () => {
            axios
                .get(`${API}/logs/${index}`)
                .then((response) => setLogs(response.data))
                .catch((error) => navigate('/error'))
        }, [index]);

    const handleDelete = () => {
        axios
            .delete(`${API}/logs/${index}`)
            .then((response) => navigate(`/logs`))
            .catch((error) => console.error(error))
    }

    return (
        <article className='Log'>
            <h3>
                {logs.mistakesWereMadeToday ? <span>😬</span> : null} {logs.title}
            </h3>
            <h5>
                <h1>{logs.title} - By {logs.captainName}</h1>
                <span>
                    <a href={logs.url}>{logs.name}</a>
                </span>
            </h5>
            <p>{logs.post}</p>
            <div className="showNavigation">
                <div>
                    {" "}
                    <a href={`/logs`}>
                        <button>Back</button>
                    </a>
                </div>
                <div>
                    {" "}
                    <a href={`/logs/${index}/edit`}>
                        <button>Edit</button>
                    </a>
                </div>
                <td>
                <button onClick={handleDelete}>Delete</button>
                </td>
            </div>
        </article>
    )
}
