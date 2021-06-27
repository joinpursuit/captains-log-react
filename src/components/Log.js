import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import axios from "axios";
import  { apiURL } from "../util/apiURL";

export default function Log() {
    const history = useHistory();
    const [ log, setLog ] = useState([]);
    const { index } = useParams();

    const API_BASE = apiURL();

    useEffect(() => {
        axios.get(`${API_BASE}/logs/${index}`)
        .then(res => setLog(res.data))
    }, [API_BASE, index])

    const deleteLog = () => {
        axios.delete(`${API_BASE}/logs/${index}`)
        .then(res => history.push("/logs"), (err) => console.log(err));
    }

    return (
        <div>
            <h3>Show Captain's Log</h3>
            <p>{log?.title} - By {log?.captainName}</p>
            <p>{log.post}</p>
            <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
            <Link to="/logs"><button>Back</button></Link> {" "}
            <Link to={`/logs/${index}/edit`}>Edit</Link>
            <button onClick={deleteLog}>Delete</button>
        </div>
    )
}
