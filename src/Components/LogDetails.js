import { useState, useEffect } from "react"
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios"
import { apiURL} from "../util/apiURL"
const API = apiURL();

const LogDetails = () => {
    const [log, setLog] = useState([]);
    let { index } = useParams();
    let history = useHistory();

    const fetchLogs = async () => {
        try {
            const res = await axios.get(`${API}/logs/${index}`)
            setLog(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        fetchLogs();
    }, [])

    return (
        <div>
            <h1>Show</h1>
            <h1>Captain's Log</h1>
            <h1>{log.title} - By {log.captainName}</h1>
            <h1>{log.post}</h1>
            <h1>{log.mistakesWereMadeToday}</h1>
            <h1>Days since last crisis: {log.daysSinceLastCrisis} </h1>
            <Link to={`/logs`}>
                <button>Back</button>
            </Link>
            <Link to={`/logs/${index}/edit`}>
                <button>Edit</button>
            </Link>
        </div>
    )

}

export default LogDetails;