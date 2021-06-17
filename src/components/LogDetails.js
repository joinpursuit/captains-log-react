import React, {useEffect, useState } from "react"
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { apiURL } from '../util/apiURL'
const API = apiURL()


const LogDetails = () => {
    const [log, setLog] = useState({})
    const params  = useParams()
    const history = useHistory()

    const goBack = () => {
        history.push('/logs')
    }

    useEffect( () => {
    const fetchLogDetails = async () => {
        let { index } = params 
        try {
            const res = await axios.get(`${API}/logs/${index}`)
            setLog(res.data)
        } catch(err) {
            console.log(err);
        }
    }
        fetchLogDetails()
    }, [])


    return (
        <div>
            <p>Captain Name: {log.captainName}</p>
            <p>Title: {log.title}</p>
            <p>Post: {log.post}</p>
            <p>Mistakes Were Made Today: {log.mistakesWereMadeToday === true ? 'true' : 'false'}</p>
            <p>Days Since Last Crisis: {log.daysSinceLastCrisis}</p>
            <button onClick={goBack}>Back</button>
        </div>

    )
}

export default LogDetails