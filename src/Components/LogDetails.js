import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import axios from 'axios'
import { apiURL } from '../util/apiURL';


const API = apiURL()

const LogDetails = ({ deletedLog }) => {

    const [logs, setLogs] = useState([])

    let { index } = useParams()
    let history = useHistory()

    useEffect(() => {
        axios.get(`${API}/logs/${index}`)
            .then((response) => {
                const { data } = response
                setLogs(data)
            }).catch((e) => {
                history.push('/not-found')
            })
    }, [index, history])

    const handledelete = () => {
        deletedLog(index)
    }


    return (
        <div>
            <h2>Show</h2>
            <h3>{logs.title} - By {logs.captainName}</h3>
            <p>{logs.post}</p>
            <p>{logs.mistakesWereMadeToday}</p>
            <p>Days since last crisis: {logs.daysSinceLastCrisis}</p>
            <Link to={'/logs'}>
                <button type='button'>Back</button>
            </Link>
            <Link to={`/logs/${index}/edit`}>
                <button type='button'>Edit</button>
            </Link>
            <button type='submit' onClick={handledelete}>delete</button>
        </div>
    )
}


export default LogDetails;