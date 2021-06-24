import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { apiURL } from '../util/apiURL';

const API_BASE = apiURL();

function LogDetail({ logs, deleteLog }) {
    const [ log, setLog ] = useState([]);
    const { index } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(`${API_BASE}/logs/${index}`)
        .then(response => {
            const { data } = response;
            setLog(data);
        })
        .catch(error => history.push("/page-not-found"))
    }, [index, history])

    const handleClick = (e) => {
        deleteLog(index);
        history.push("/logs");
    };
   
    return (
        <div>
            <h1>Captain's Log</h1>
            <h2>Show</h2>
            <h3>Post: {log.post}</h3>
            <h3>{log.title} - By {log.captainName}</h3>

            <p>Made Mistake Today:  
                {log.mistakesWereMadeToday === true ? 'true' : 'false'}
            </p>
            <p>Days since last crisis: {log.daysSinceLastCrisis}</p>

            <button onClick={handleClick}>delete</button>
            <button>
                <a href={`/logs/${index}/edit`}>Edit</a>
            </button>
        </div>
    );
};

export default LogDetail;
