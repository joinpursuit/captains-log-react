import { useState, useEffect } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import axios from 'axios'

import { apiURL } from '../util/apiURL'
const API = apiURL()


export default function LogDetails() {

    const [log, setLog] = useState([])
    const { index } = useParams()
    let history = useHistory()
    console.log(history)

    useEffect(() => {
        axios.get(`${API}/logs/${index}`)
        .then(response => {
            setLog(response.data)
        })
        .catch(e => {
            history.push('/not/found')
            console.log(e)
        })
    }, [])

    return (
        <div>
            LogDetails
            <h3>{log.title} - By {log.captainName}</h3>
            <p>Post: {log.post}</p>
            {log.mistakesWereMadeToday ? <p>Were mistakes made today? Yes</p> : null}
            <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
            <Link to='/logs'>
                <button>Back</button>
            </Link>
            <Link to={`/logs/${index}/edit`}>
                <button>Edit</button>
            </Link>
            <button>Delete</button>
        </div>
    )

}
