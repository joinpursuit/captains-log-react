import { useState, useEffect } from "react";
import { Link, useParams, useHistory} from "react-router-dom";
import{ apiUrl } from '../util/apiURL'
import axios from "axios"

const Show = ({deleteLog}) => {
    const API_BASE = apiUrl()

    const [ log, setLog ] = useState([])
    let { index } = useParams()
    let history = useHistory()


    useEffect(()=>{
        axios.get(`${API_BASE}/logs/${index}`)
        .then((response) =>{ 
            const { data } = response
            setLog(data)
        }).catch((error) =>{
            history.push("/not-found")
        })
    },[index, history])

    const handleDelete = () => { 
        console.log(index)
        deleteLog(index)
        history.push("/logs")
     }

    return (
        <div>
            <h1>{log.title} - By {log.captainName}</h1>
            <h3>{log.captainName}</h3>
            <h4>{log.title}</h4>
            <h3>{log.post}</h3>
            <h3>{log.mistakesMadeToday}</h3>
            <h3>Days since last crisis: {log.daysSinceLastCrisis}</h3>
            <div>
                <Link to={`/logs`}>
                    <button>Back</button>
                </Link>
            </div>
            <div>
                <Link to={`/logs/${index}/edit`}>
                    <button>Edit</button>
                </Link>
            </div>
            <div>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default Show;