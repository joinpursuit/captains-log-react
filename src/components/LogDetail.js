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
            <h2>Post: {log.post}</h2>

            <h3>Name: {log.captainName}</h3>
            <h3>Title: {log.title}</h3>

            <p>Made Mistake Today:  
                {log.mistakesWereMadeToday === true ? 'true' : 'false'}
            </p>
            <p>Last Crisis: {log.daysSinceLastCrisis}</p>

            <button onClick={handleClick}>delete</button>
        </div>
    );
};

export default LogDetail;
